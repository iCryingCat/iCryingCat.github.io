---
menu: "游戏开发"
title: "GFramework"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Crying Cat
  picture: "/assets/blog/authors/head.jpg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"MV
---

# MVVM UI框架

首先，ui框架最基本的功能是提供给外部显示和关闭某一个界面的接口，IView接口规范所有界面类，BindPath返回界面对应的预制体路径，当然这个路径是相对路径，基路径将会在UIManager中封装好。

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GFramework.UI
{
    // UI面板接口
    public interface IView
    {
        string BindPath();
        void Show();
        void Hide();
        void Close();
        void Dispose();
    }
}
```

MVVM框架设计是一个View和一个ViewModel双向绑定，IBinding接口规范可绑定属性，BindingContext属性赋值和返回绑定的ViewModel对象

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GFramework.UI
{
    /// <summary>
    /// 可绑定model接口
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IBinding<T>
    {
        T BindingContext
        {
            get; set;
        }
    }
}
```

接下来定义界面基类BaseView，构造时需要赋值对应的ViewModel，你会发现BaseView并不继承Mono，那么如何获取UGUI组件呢，注意到BaseView中有UIContainer对象，它是继承自Mono的类，持有需要获取的UGUI组件，

```c#
using UnityEngine;

namespace GFramework.UI
{
    public abstract class BaseView<T> : IView, IBinding<T> where T : BaseViewModel
    {
        // 绑定的ViewModel
        private readonly BindableProperty<T> model = new BindableProperty<T>();

        // ui游戏物体
        public GameObject gameObject { get; private set; }

        // ui变换组件
        public Transform transform { get; private set; }

        // mono组件
        protected UIContainer uiContainer;

        // 是否已经初始化
        protected bool isInitialized = false;

        // 属性绑定器
        protected readonly PropertyBinder<T> propertyBinder = new PropertyBinder<T>();

        public bool Hided { get; private set; }
        public bool Disposed { get; private set; }

        public T BindingContext
        {
            get => model.Value;
            set
            {
                if (!isInitialized)
                {
                    Initialize();
                    isInitialized = true;
                }
                model.Value = value;
            }
        }

        private void OnContextChanged(T old, T value)
        {
            propertyBinder.Unbind(old);
            propertyBinder.Bind(value);
        }

        private void Initialize()
        {
            model.OnValueChanged += OnContextChanged;
        }

        public void Show()
        {
            this.Disposed = false;
            this.Hided = false;
            this.OnPreShow();
            this.gameObject.SetActive(true);
            this.OnShow();
        }

        public void Hide()
        {
            this.OnPreHide();
            this.gameObject.SetActive(false);
            this.OnHided();
            this.Hided = true;
        }

        public void Close()
        {
            this.OnClosing();
            this.gameObject.SetActive(false);
            this.OnClosed();
        }

        public void Dispose()
        {
            this.gameObject.SetActive(false);
            this.Disposed = true;
            UnityEngine.GameObject.Destroy(this.gameObject);
        }

        protected T GetVar<T>(int index) where T : Component
        {
            return this.uiContainer.GetVar(index).component as T;
        }

        protected T1 GetVar<T1, T2>(int index) where T1 : BaseView<T2>, new() where T2 : BaseViewModel, new()
        {
            UIVar var = this.uiContainer.GetVar(index);
            T1 view = UIMgr.NewUI<T1, T2>();
            view.BindGO(var.gameObject, true);
            return view;
        }

        public void BindGO(GameObject go, bool exist = false)
        {
            this.gameObject = go;
            this.transform = go.transform;
            this.uiContainer = go.GetComponent<UIContainer>();
            if (!exist)
                this.transform.SetParentOfUI(this.uiContainer.layer, this.uiContainer.node);
            Load();
        }

        private void Load()
        {
            this.BindVars();
            this.BindEvents();
            this.OnLoaded();
        }

        public abstract string BindPath();
        protected virtual void BindProp() { }
        protected virtual void BindVars() { }
        protected virtual void BindEvents() { }
        protected virtual void OnLoaded() { }
        protected virtual void OnShow() { }
        protected virtual void OnPreShow() { }
        protected virtual void OnPreHide() { }
        protected virtual void OnHided() { }
        protected virtual void OnClosing() { }
        protected virtual void OnClosed() { }
    }
}
```

UIContainer类实现如下，UIVar定义一个需要代码获取的UGUI组件

```c#
using System;
using System.Collections.Generic;

using UnityEngine;

namespace GFramework.UI
{

    [Serializable]
    public class UIVar
    {
        // 字段名字
        public string fieldName;
        public GameObject gameObject;
        public Component component;
    }

    public class UIContainer : MonoBehaviour
    {
        public UILayer layer;
        public UINode node;
        [HideInInspector] public string bindingViewPath = null;
        [HideInInspector] public string bindingViewType = null;
        [HideInInspector] public string bindingViewModelType = null;
        [HideInInspector] public List<UIVar> varsArr = new List<UIVar>();

        public UIVar GetVar(int index)
        {
            if (index >= this.varsArr.Count)
                return null;
            return this.varsArr[index];
        }
    }
}
```



# RPC框架

ProtoDefine是消息类型枚举，一个请求或者服务器调用消息对应一个枚举值

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// FIXME: 全部协议存放在一个枚举里的方式显得臃肿
public enum ProtoDefine
{
    C2S_Login = 1010,

    // 匹配
    C2S_Match = 1020,
    // 加入房间
    C2S_JoinOtherRoom = 1030,
    C2S_Tick_Input = 1040,

    // 加入房间
    S2C_OtherJoinRoom = 2010,
    // 帧同步更新
    S2C_Tick_Update = 2020,
    // 开始游戏
    S2C_Game_Start = 2030,
}
```

那么一个消息类需要定义什么内容呢，以登录消息举例：

```c#
using GFramework.Network;

using ProtoBuf;

namespace Share.Protocols
{
    [ProtoContract(ImplicitFields = ImplicitFields.AllPublic)]
    public class LoginReq
    {
        public string userName;
        public string password;

        public LoginReq() { }

        public LoginReq(string userName, string password)
        {
            this.userName = userName;
            this.password = password;
        }
    }

    [ProtoContract(ImplicitFields = ImplicitFields.AllPublic)]
    public class LoginResp
    {
        public int ok;
        public string userName;
        public string nickName;

        public LoginResp()
        {
        }

        public LoginResp(int ok, string userName, string nickName)
        {
            this.ok = ok;
            this.userName = userName;
            this.nickName = nickName;
        }
    }
}

```

由于Socket发送的数据需要是字节数组，所有还需要序列化消息对象。

ProtoBufNetSerializer提供ProtoBufNet序列化、反序列化类对象接口，VS编译器使用NUGet包管理器下载ProtoBufNet插件，Vscode需要先安装NuGet Gallery。

```c#
using System;
using System.IO;

using ProtoBuf;

namespace GFramework.Network
{
    // ProtocolBuf Net序列化
    public class ProtoBufNetSerializer
    {
        // 序列化对象得到字节
        public static byte[] Encode<T>(T obj)
        {
            try
            {
                using (MemoryStream ms = new MemoryStream())
                {
                    Serializer.SerializeWithLengthPrefix<T>(ms, obj, ProtoBuf.PrefixStyle.Base128);
                    return ms.ToArray();
                }
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        // 反序列化字节得到对象
        public static T Decode<T>(byte[] data)
        {
            try
            {
                using (MemoryStream ms = new MemoryStream(data))
                {
                    T obj = Serializer.DeserializeWithLengthPrefix<T>(ms, ProtoBuf.PrefixStyle.Base128);
                    return obj;
                }
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}
```

序列化得到的字节数组只是消息体对象，一个消息一般由消息头+消息体组成，该如何进行打包和解包，这部分应当是可以根据实际需要变化的。

APacker是打包器的基类，提供打包和解包的接口，关于消息包如何进行打包，如：包长度+协议名+消息体，以及解包需要继承该类，并重写Pack、UnPack方法

```c#
using System;
using System.Collections.Generic;

namespace GFramework.Network
{
    public abstract class APacker
    {
        // 包长度字段字节数
        protected int PACKET_SIZE_NUM = 4;

        // 协议名长度
        protected int PROTO_DEFINE_NUM = 4;

        public APacker()
        {
            this.PROTO_DEFINE_NUM = 4;
            this.PACKET_SIZE_NUM = 4;
        }

        public abstract byte[] Pack(ProtoDefine protoDefine, byte[] data);
        public abstract List<Tuple<ProtoDefine, byte[]>> UnPack(ref byte[] buffer, ref int bufferSize);
    }
}
```

该框架默认提供了一个打包器如下：

```c#
using System;
using System.Collections.Generic;
using System.Linq;

namespace GFramework.Network
{
    public class ProtoPacker : APacker
    {
        GLogger logger = new GLogger("ProtoPacker");

        // 打包协议
        // 包长度+协议名称+数据
        public override byte[] Pack(ProtoDefine protoDefine, byte[] data)
        {
            List<byte> packet = new List<byte>();
            byte[] packetSize = BitConverter.GetBytes(PROTO_DEFINE_NUM + data.Length);
            byte[] proto = BitConverter.GetBytes((int)protoDefine);
            packet.AddRange(packetSize);
            packet.AddRange(proto);
            packet.AddRange(data);
            return packet.ToArray();
        }

        // 拆包
        public override List<Tuple<ProtoDefine, byte[]>> UnPack(ref byte[] buffer, ref int bufferSize)
        {
            byte[] temp = new byte[bufferSize];
            int tempSize = bufferSize;
            Array.Copy(buffer, 0, temp, 0, bufferSize);
            List<Tuple<ProtoDefine, byte[]>> protos = new List<Tuple<ProtoDefine, byte[]>>();
            while (tempSize > 0)
            {
                Tuple<ProtoDefine, byte[]> protoTuple = DiveUnPack(ref temp, ref tempSize);
                protos.Add(protoTuple);
            }
            bufferSize = tempSize;
            Array.Copy(buffer, bufferSize - tempSize, buffer, 0, tempSize);
            return protos;
        }

        private Tuple<ProtoDefine, byte[]> DiveUnPack(ref byte[] buffer, ref int bufferSize)
        {
            // 当前缓冲区大小小于包大小位大小
            if (bufferSize < PACKET_SIZE_NUM)
                return null;

            // 读取包大小
            byte[] packetSizeNum = new byte[PACKET_SIZE_NUM];
            Array.Copy(buffer, packetSizeNum, PACKET_SIZE_NUM);
            int packetSize = BitConverter.ToInt32(packetSizeNum, 0);
            logger.P($"包长度：{packetSize}");

            // 当前包还未接收完
            if (bufferSize - PACKET_SIZE_NUM < packetSize)
                return null;

            // 解析包
            byte[] packet = new byte[packetSize];
            Array.Copy(buffer, PACKET_SIZE_NUM, packet, 0, packetSize);

            // 更新缓冲区
            bufferSize -= (PACKET_SIZE_NUM + packetSize);
            buffer = buffer.Skip(PACKET_SIZE_NUM + packetSize).Take(bufferSize).ToArray();
            return DecodeProto(packet, packetSize);
        }

        /// <summary>
        /// 解析协议
        /// </summary>
        /// <param name="packet">缓冲区</param>
        /// <param name="start">协议包起始下标</param>
        /// <param name="packetSize">协议包长度</param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public Tuple<ProtoDefine, byte[]> DecodeProto(byte[] packet, int packetSize)
        {
            int index = 0;
            // 协议id
            byte[] protoDefineNum = new byte[PROTO_DEFINE_NUM];
            Array.Copy(packet, index, protoDefineNum, 0, PROTO_DEFINE_NUM);
            int defineInt = BitConverter.ToInt32(protoDefineNum, 0);
            index += PROTO_DEFINE_NUM;

            // 如果协议不存在
            if (!Enum.IsDefined(typeof(ProtoDefine), defineInt))
            {
                logger.E($"不存在该协议ID{defineInt}");
                return null;
            }

            ProtoDefine define = (ProtoDefine)defineInt;
            logger.P($"解析到{define}类型消息");

            // 读取协议字节
            int dataSize = packetSize - PROTO_DEFINE_NUM;
            byte[] data = new byte[dataSize];
            Array.Copy(packet, index, data, 0, dataSize);
            return new Tuple<ProtoDefine, byte[]>(define, data);
        }
    }
}
```

关于数据包如何定义、构造，解析已经完成，接下来需要将打包好的数据通过socket发送给服务器。

一个商业游戏中游戏的消息通信会被分为多个部分，比如登录、大厅、战斗，不同部分的通信的消息打包、解包、如何分发可能都各有不同，但是他们都有一个相同的逻辑，就是打包、发送、接收、解包、分发，完成这一套动作的功能我们把它定义在一个通道内完成。

AChannel是Tcp、Udp通道基类，通道提供发送和接收接口，并且持有一个分发器、打包器，以及当前通信对象的ip四元组

```c#
using System.Net;
namespace GFramework.Network
{
    public abstract class AChannel
    {
        public IPEndPoint iPEndPoint { get; }
        public ADispatcher dispatcher { get; }
        public APacker packer { get; }
        protected byte[] buffer;
        protected int bufferSize = 0;
        protected int maxBufferSize = 2048;

        public AChannel(IPEndPoint iPEndPoint, ADispatcher dispatcher, APacker packer)
        {
            this.iPEndPoint = iPEndPoint;
            this.dispatcher = dispatcher;
            this.dispatcher.channel = this;
            this.packer = packer;
            this.buffer = new byte[maxBufferSize];
            this.bufferSize = 0;
        }

        public virtual void BeginReceive() { }
        public abstract void Send(ProtoDefine define, byte[] data);
    }
}
```

ADispatcher是分发器基类，channel是被持有的通道对象，DecodeForm方法用于通道接收到消息，经过打包器解包后进行反序列化得到消息类对象，得到对象后怎么进行分发是我们需要自主实现的逻辑。

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GFramework.Network;

namespace GFramework.Network
{
    public abstract class ADispatcher
    {
        public AChannel channel = null;
        public abstract void DecodeForm(ProtoDefine define, byte[] data);
        public abstract void RegisterMsg(RpcCallBack response);
    }
}
```

服务器接收到消息并返回客户端该如何接收呢，创建LogicDispatcher继承分发器基类，具体实现请阅读一下代码

```c#
using System;
using System.Collections.Generic;

using GameLogic;
using GFramework;
using GFramework.Network;

using Share.Protocols;

using UnityEngine.SceneManagement;

namespace Share.Network
{
    // 逻辑服协议解析器
    public class LogicDispatcher : ADispatcher
    {
        GLogger logger = new GLogger("LogicDispatcher");

        private Queue<RpcCallBack> responseQueue = new Queue<RpcCallBack>();
        private Queue<Object> receivedDataQueue = new Queue<object>();

        public LogicDispatcher()
        {
            MonoLoop.Instance.AddUpdateListener(OnUpdate);
        }

        private void OnUpdate()
        {
            if (receivedDataQueue == null) return;
            if (receivedDataQueue.Count > 0)
            {
                lock (this.receivedDataQueue)
                {
                    Object data = this.receivedDataQueue.Dequeue();
                    lock (this.responseQueue)
                    {
                        RpcCallBack resp = this.responseQueue.Dequeue();
                        logger.P($"分发 {resp} {data}");
                        resp.Invoke(data);
                    }
                }
            }
        }

        public override void DecodeForm(ProtoDefine define, byte[] data)
        {
            logger.P($"反序列化{define}类型消息");
            switch (define)
            {
                case ProtoDefine.C2S_Login:
                    Dispatch(ProtoBufNetSerializer.Decode<LoginResp>(data));
                    break;
                case ProtoDefine.C2S_Match:
                    Dispatch(ProtoBufNetSerializer.Decode<MatchResp>(data));
                    break;
                case ProtoDefine.S2C_OtherJoinRoom:
                    DealWithOtherJoinRoom(ProtoBufNetSerializer.Decode<JoinRoomResp>(data));
                    break;
                case ProtoDefine.S2C_Game_Start:
                    DealWithOtherGameStart(ProtoBufNetSerializer.Decode<AckResp>(data));
                    break;
                default:
                    logger.E($"没有找到协议--{define}--的定义！！！");
                    break;
            }
        }

        public override void RegisterMsg(RpcCallBack response)
        {
            if (responseQueue == null) responseQueue = new Queue<RpcCallBack>();
            lock (this.responseQueue)
            {
                this.responseQueue.Enqueue(response);
            }
        }

        private void Dispatch<T>(T msg) where T : new()
        {
            if (this.receivedDataQueue == null) this.receivedDataQueue = new Queue<object>();
            lock (this.receivedDataQueue)
            {
                this.receivedDataQueue.Enqueue(msg);
            }
        }

        private void DealWithOtherJoinRoom(JoinRoomResp joinRoomResp)
        {
            logger.P("处理其他玩家加入房间消息");
            TickAgent.Instance.OnPlayerJoinRoom(joinRoomResp.roomID, joinRoomResp.netID, false);
            EventHub.Call(EventDefine.PlayerJoinRoom);
        }

        private void DealWithOtherGameStart(AckResp ackResp)
        {
            if (ackResp.ok == 0) return;
            logger.P("处理游戏开始消息");
            byte[] ack = ProtoBufNetSerializer.Encode<AckResp>(new AckResp(1));
            this.channel.Send(ProtoDefine.S2C_Game_Start, ack);
            Loom.QueueOnMainThread((arg) =>
            {
                TickAgent.Instance.OnGameStart();
                SceneManager.LoadScene("battle", LoadSceneMode.Additive);
                UIMgr.PopUI();
            }, null);
        }
    }
}
```

服务器和客户端是两个不同体系，规范一下接口

```c#
using System.Net;

namespace GFramework.Network
{
    public interface IServerProxy
    {
        void Accept();
        void SendToSingle(IPEndPoint iPEndPoint, ProtoDefine define, byte[] msg);
    }

    public interface IClientProxy
    {
        void Connect(IPEndPoint iPEndPoint);
        void RegisterMsg(RpcCallBack response);
    }
}

```

TcpClientProxy是客户端代理，提供连接服务器、发送、接收消息的异步方法，创建时需要指定客户端使用哪一个端口连接服务器，

```c#
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;

namespace GFramework.Network
{
    /// <summary>
    /// TCP连接管理类
    /// 负责与服务器建立连接保存socket对象
    /// 异步接收消息，存入消息对象
    /// 提供发送消息接口
    /// </summary>
    public class TcpClientProxy : AChannel, IClientProxy, IDisposable
    {
        GLogger logger = new GLogger("TcpClientProxy");

        private Socket socket;

        public TcpClientProxy(int port, ADispatcher dispatcher, APacker packer) : base(new IPEndPoint(IPAddress.Parse("0.0.0.0"), port), dispatcher, packer)
        {
            this.socket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
        }

        public TcpClientProxy(Socket socket, ADispatcher dispatcher, APacker packer) : base(socket.RemoteEndPoint as IPEndPoint, dispatcher, packer)
        {
            this.socket = socket;
        }

        // FIXME: 注册回调事件结构有待改善
        public void RegisterMsg(RpcCallBack response)
        {
            this.dispatcher.RegisterMsg(response);
        }

        // 连接到服务器
        public void Connect(IPEndPoint iPEndPoint)
        {
            this.socket.Bind(this.iPEndPoint);
            logger.P($"尝试以端口：{this.iPEndPoint.Port} 连接服务器...");
            this.socket.BeginConnect(iPEndPoint, OnConnected, this.socket);
        }

        /// <summary>
        /// 连接到服务器回调
        /// </summary>
        /// <param name="ar"></param>
        /// <exception cref="Exception"></exception>
        private void OnConnected(IAsyncResult ar)
        {
            try
            {
                this.socket.EndConnect(ar);
                if (this.socket.Connected)
                {
                    logger.P($"端口{this.socket.LocalEndPoint}连接成功!");
                }
                else
                {
                    logger.P("连接失败！!");
                }
                this.BeginReceive();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public override void Send(ProtoDefine define, byte[] msg)
        {
            if (this.socket.Connected)
            {
                byte[] data = this.packer.Pack(define, msg);
                socket.BeginSend(data, 0, data.Length, SocketFlags.None, OnSended, data);
            }
            else
            {
                logger.E("网络未连接");
            }
        }

        private void OnSended(IAsyncResult ar)
        {
            try
            {
                int count = socket.EndSend(ar);
                logger.P($"成功发送大小为{count}的数据");
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public override void BeginReceive()
        {
            if (this.socket.Connected)
                socket.BeginReceive(buffer, 0, maxBufferSize, SocketFlags.None, OnReceived, buffer);
        }

        // 接收到服务器消息回调
        protected void OnReceived(IAsyncResult ar)
        {
            try
            {
                int bufferSize = socket.EndReceive(ar);
                IPEndPoint remote = (IPEndPoint)socket.RemoteEndPoint;
                if (bufferSize <= 0)
                {
                    logger.P($"客户端 {remote} 断开连接！！！");
                    this.Dispose();
                    return;
                }
                logger.P($"收到--{remote}--的消息，数据长度：{bufferSize}");

                List<Tuple<ProtoDefine, byte[]>> protos = this.packer.UnPack(ref buffer, ref bufferSize);
                for (int i = 0; i < protos.Count; ++i)
                {
                    this.dispatcher.DecodeForm(protos[i].Item1, protos[i].Item2);
                }

                socket.BeginReceive(buffer, bufferSize, maxBufferSize, SocketFlags.None, OnReceived, buffer);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void Dispose()
        {
            if (this.socket == null)
                return;
            this.socket.Shutdown(SocketShutdown.Both);
            this.socket.Close();
            this.socket.Dispose();
        }
    }
}

```

C2S（客户端到服务器）消息类型继承自ICaller，S2C（服务器到客户端）消息类型继承自ICallee，RpcCallBack是所有RPC消息回调的委托类型

```c#
using System;

namespace GFramework.Network
{
    // Rpc 请求回调
    public delegate void RpcCallBack(object resp);

    // 客户端请求消息
    public interface ICaller { }

    // 服务器下发消息
    public interface ICallee { }
}
```

定义一个简单的逻辑服协议接口，IHall2Logic定义大厅请求服务器方法，ILogic2Hall定义服务器下发消息

```c#
using System.Net;
using GFramework.Network;
using Share.Protocols;

namespace Share.Services
{
    // 逻辑服务器请求消息协议
    public interface IHall2Logic : ICaller
    {
        void ToLogin(LoginReq req, RpcCallBack callback);
        void ToJoinOtherRoom(JoinRoomReq req, RpcCallBack callback);
        void ToMatch(MatchReq req, RpcCallBack callback);
    }

    // 逻辑服务器下发消息协议
    public interface ILogic2Hall : ICallee
    {
        void OnOtherJoinRoom(IPEndPoint iPEndPoint, ulong roomID);
    }
}
```

HallService继承IHall2Logic接口，实现请求消息封装

```c#
using GFramework.Network;

using Share.Protocols;
using Share.Services;
using UnityEngine;

namespace Share.Network
{
    public class HallService : IHall2Logic
    {
        public TcpClientProxy channel { get; }
        public HallService(TcpClientProxy channel)
        {
            this.channel = channel;
        }

        public void ToJoinOtherRoom(JoinRoomReq req, RpcCallBack callback)
        {
            this.channel.dispatcher.RegisterMsg(callback);
            byte[] data = ProtoBufNetSerializer.Encode<JoinRoomReq>(req);
            this.channel.Send(ProtoDefine.C2S_JoinOtherRoom, data);
        }

        public void ToLogin(LoginReq req, RpcCallBack callback)
        {
            this.channel.dispatcher.RegisterMsg(callback);
            this.channel.Send(ProtoDefine.C2S_Login, ProtoBufNetSerializer.Encode<LoginReq>(req));
        }

        public void ToMatch(MatchReq req, RpcCallBack callback)
        {
            this.channel.dispatcher.RegisterMsg(callback);
            this.channel.Send(ProtoDefine.C2S_Match, ProtoBufNetSerializer.Encode<MatchReq>(req));
        }
    }
}
```

在大厅功能需要调用RPC请求时，直接调用HallService的相关方法，并编写回调逻辑

```c#
using System;
using System.Net;
using GFramework.Network;
using UnityEngine;

namespace Share.Network
{
    // 网络管理器
    public class RpcAgent : Singleton<RpcAgent>
    {
        // 大厅Rpc
        public HallService hallRpc { get; private set; }

        public NetStatHandler netStat = new NetStatHandler(NetStat.NotConnect);

        public void Setup()
        {
            TcpClientProxy proxy = new TcpClientProxy(NetTool.GetAvailablePort(), new LogicDispatcher(), new ProtoPacker());
            proxy.Connect(new IPEndPoint(IPAddress.Parse("127.0.0.1"), 8888));
            this.hallRpc = new HallService(proxy);
        }

        public void Dispose()
        {
            this.hallRpc.channel.Dispose();
        }
    }
}
```

```c#
public void OnLogin()
{
     RpcAgent.Instance.hallRpc.ToLogin(new LoginReq(this.userName.Value, this.password.Value), (resp) =>
	{
     	LoginResp loginResp = resp as LoginResp;
        if (loginResp == null) return;
        UIMgr.ShowUI<UIMain, MainControl>().BindingContext.Init(new UserData(loginResp.userName, loginResp.nickName));
        this.bindingView.Close();
	});
}
```

由于unity不允许在其他线程调用游戏主线程，所以需要借助doom来处理服务器回调的逻辑。

```c#
using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System;
using System.Threading;
using System.Linq;

public class Loom : MonoBehaviour
{
    public static int maxThreads = 8;
    static int numThreads;

    private static Loom _current;
    //private int _count;
    public static Loom Current
    {
        get
        {
            Initialize();
            return _current;
        }
    }

    void Awake()
    {
        _current = this;
        initialized = true;
    }

    static bool initialized;

    public static void Initialize()
    {
        if (!initialized)
        {

            if (!Application.isPlaying)
                return;
            initialized = true;
            var g = new GameObject("Loom");
            _current = g.AddComponent<Loom>();
#if !ARTIST_BUILD
            UnityEngine.Object.DontDestroyOnLoad(g);
#endif
        }

    }
    public struct NoDelayedQueueItem
    {
        public Action<object> action;
        public object param;
    }

    private List<NoDelayedQueueItem> _actions = new List<NoDelayedQueueItem>();
    public struct DelayedQueueItem
    {
        public float time;
        public Action<object> action;
        public object param;
    }
    private List<DelayedQueueItem> _delayed = new List<DelayedQueueItem>();

    List<DelayedQueueItem> _currentDelayed = new List<DelayedQueueItem>();

    public static void QueueOnMainThread(Action<object> taction, object tparam)
    {
        QueueOnMainThread(taction, tparam, 0f);
    }
    public static void QueueOnMainThread(Action<object> taction, object tparam, float time)
    {
        if (time != 0)
        {
            lock (Current._delayed)
            {
                Current._delayed.Add(new DelayedQueueItem { time = Time.time + time, action = taction, param = tparam });
            }
        }
        else
        {
            lock (Current._actions)
            {
                Current._actions.Add(new NoDelayedQueueItem { action = taction, param = tparam });
            }
        }
    }

    public static Thread RunAsync(Action a)
    {
        Initialize();
        while (numThreads >= maxThreads)
        {
            Thread.Sleep(100);
        }
        Interlocked.Increment(ref numThreads);
        ThreadPool.QueueUserWorkItem(RunAction, a);
        return null;
    }

    private static void RunAction(object action)
    {
        try
        {
            ((Action)action)();
        }
        catch
        {
        }
        finally
        {
            Interlocked.Decrement(ref numThreads);
        }

    }


    void OnDisable()
    {
        if (_current == this)
        {

            _current = null;
        }
    }

    // Use this for initialization
    void Start()
    {

    }

    List<NoDelayedQueueItem> _currentActions = new List<NoDelayedQueueItem>();

    // Update is called once per frame
    void Update()
    {
        if (_actions.Count > 0)
        {
            lock (_actions)
            {
                _currentActions.Clear();
                _currentActions.AddRange(_actions);
                _actions.Clear();
            }
            for (int i = 0; i < _currentActions.Count; i++)
            {
                _currentActions[i].action(_currentActions[i].param);
            }
        }

        if (_delayed.Count > 0)
        {
            lock (_delayed)
            {
                _currentDelayed.Clear();
                _currentDelayed.AddRange(_delayed.Where(d => d.time <= Time.time));
                for (int i = 0; i < _currentDelayed.Count; i++)
                {
                    _delayed.Remove(_currentDelayed[i]);
                }
            }

            for (int i = 0; i < _currentDelayed.Count; i++)
            {
                _currentDelayed[i].action(_currentDelayed[i].param);
            }
        }
    }
}

```



# 导表工具

# 帧同步
