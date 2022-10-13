---
menu: "游戏开发"
title: "Unity"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Crying Cat
  picture: "/assets/blog/authors/head.jpg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

# Unity 入门- [Unity 入门](#unity入门)

- [Editor](#editor)
- [官方文档](#官方文档)
- [实用网站](#实用网站)
- [快捷方式](#快捷方式)
- [C#脚本](#c脚本)
  - [脚本生命周期](#脚本生命周期)
- [碰撞检测](#碰撞检测)
  - [碰撞器](#碰撞器)
  - [触发器](#触发器)
- [UI](#ui)
  - [Image](#image)
  - [Text](#text)
  - [Button](#button)
  - [DropDown](#dropdown)
    - [ScrollView](#scrollview)
- [图形](#图形)
  - [支持的文件格式](#支持的文件格式)
- [音效](#音效)
  - [支持的音频格式](#支持的音频格式)
  - [AudioListener](#audiolistener)
  - [AudioPlayer](#audioplayer)
  - [AudioClip](#audioclip)
- [动画](#动画)
  - [Animator](#animator)
  - [Animation](#animation)
- [导航](#导航)
  - [Navigation Mesh（导航网格）](#navigation-mesh导航网格)
  - [NavMesh Agent（导航网格代理）](#navmesh-agent导航网格代理)
  - [Off-Mesh Link（网格外链接）](#off-mesh-link网格外链接)
  - [NavMesh Obstacle（导航网格障碍物）](#navmesh-obstacle导航网格障碍物)
- [光照](#光照)
- [粒子系统](#粒子系统)
- [TimeLine](#timeline)
  - [TimeLine+Cinemachine 实现运镜效果](#timelinecinemachine实现运镜效果)
- [协程](#协程)
- [回调](#回调)
- [异步加载](#异步加载)
- [API 扩展](#api扩展)
  - [链式编程](#链式编程)
- [编辑器扩展](#编辑器扩展)
  - [工具栏扩展](#工具栏扩展)
    - [MenuItem](#menuitem)
    - [Hierarchy 面板右键扩展](#hierarchy面板右键扩展)
  - [Inspector 面板扩展](#inspector面板扩展)
    - [CustomEditor](#customeditor)
  - [Project 面板右键菜单扩展](#project面板右键菜单扩展)
    - [CreateAssetMenu](#createassetmenu)
  - [自定义面板](#自定义面板)
    - [EditorWindow](#editorwindow)
- [宏](#宏)
  - [预编译指令](#预编译指令)
  - [平台宏](#平台宏)
  - [自定义宏](#自定义宏)
- [资源管理](#资源管理)
  - [常用路径](#常用路径)
  - [AssetDatabase](#assetdatabase)
  - [Resources](#resources)
  - [AssetBundle](#assetbundle)
- [文件存档](#文件存档)
  - [二进制文件](#二进制文件)
  - [JSON 文件](#json文件)
  - [XML 文件](#xml文件)
- [广播机制](#广播机制)
- [消息机制](#消息机制)
- [定时回调](#定时回调)
- [Mono 事件管理器](#mono事件管理器)
- [对象池](#对象池)
  - [Mono 对象池](#mono对象池)
- [网络请求](#网络请求)
  - [HTTP 封装](#http封装)
  - [Socket](#socket)
- [UI 框架](#ui框架)
- [Git](#git)
  - [分支管理](#分支管理)
  - [克隆远程仓库到本地](#克隆远程仓库到本地)
  - [提交本地项目到远程仓库（初始化）](#提交本地项目到远程仓库初始化)
  - [更新本地仓库](#更新本地仓库)
  - [常见问题](#常见问题)
- [MLAgents](#mlagents)
- [渲染管线（Render Pipeline）](#渲染管线render--pipeline)
  - [学习新知识点的第一步就是了解他的定义，首先渲染管线是什么？](#学习新知识点的第一步就是了解他的定义首先渲染管线是什么)
  - [Unity 提供了哪些渲染管线？](#unity提供了哪些渲染管线)
    - [内置渲染管线（Built-in Render Pipeline）](#内置渲染管线built-in-render-pipeline)
    - [通用渲染管线（Universal Render Pipeline）](#通用渲染管线universal-render-pipeline)
    - [高清渲染管线（High Definition Render Pipiline）](#高清渲染管线high-definition-render-pipiline)
    - [自编程渲染管线（Custom Render Pipeline）](#自编程渲染管线custom-render-pipeline)

## Editor

UnityHub：https://unity.cn/releases#undefined
UnityEditor：https://unity.cn/releases/full/2019

## 官方文档

- 用户手册：https://docs.unity.cn/cn/current/Manual/index.html
- API：https://docs.unity.cn/cn/current/ScriptReference/index.html

## 实用网站

max 资源转 fbx 格式：https://anyconv.com/max-to-fbx-converter/

## 快捷方式

> 1. 单位快速对齐：移动模式+ctrl 键长按+鼠标拖动坐标轴
> 2. 顶点快速对齐：移动模式+选中物体+v 键长按
> 3. 表面快速对齐：移动模式+ctrl、shift 键长按+鼠标拖动（center/pivot）
> 4. 运行模式编辑器着色 edit-preferences-colors-playmode tint
> 5. 复制粘贴组件 ctrl+d

## C#脚本

通过脚本来响应玩家的输入并安排游戏中应发生的事件，用于创建图形效果、控制游戏人物的物理行为等

### 脚本生命周期

编辑器更新

1. Reset
2. Awake
   游戏开始或者游戏物体生成时调用一次，当脚本挂在对象被未激活也会被调用

3. OnEnable
   对象被激活时调用一次

4. Start
   对象生成后且被激活调用一次

物理引擎 5. FixedUpdate
固定帧调用，一般将与物理引擎相关事件放在此方法中

Update

在 FixedUpdate 之后，每帧调用

LateUpdate

在 Update 之后调用一次

OnDisable

对象被禁用时调用

OnDestroy

游戏物体销毁时调用一次

unity 生命周期中函数的调用都通过反射实现，虽然使用反射在一定程度上会降低程序运行效率，但是另一方面也为游戏开发过程提供便利，降低耦合度。

## 碰撞检测

### 碰撞器

碰撞器模拟碰撞效果，实现要求是进行碰撞的两个物体都带有 Collider，并且运动的一方，也就是主动碰撞另一个物体带有 RigidBody，两个物体都带有刚体也是可以的。

- OnCollisionEnter

  碰撞接触调用一次

- OnCollisionStay

  碰撞过程每帧调用

- OnCollisionExit

  碰撞结束调用一次

### 触发器

勾选碰撞器的 is Trigger 属性之后，碰撞器便成为触发器，物体可以穿过自身，不发生物理碰撞效果。

## UI

### Image

### Text

### Button

### DropDown

#### ScrollView

- 创建 RectTransform 空物体

  创建空物体后添加 RectTransform 组件，unity 会自动替换 Transfrom

  ```c#
  GameObject go = new GameObject(name, typeof(RectTransform));
  ```

## 图形

### 支持的文件格式

Unity 可读取以下文件格式：

- BMP
- EXR
- GIF
- HDR
- IFF
- JPG
- PICT
- PNG
- PSD
- TGA
- TIFF

## 音效

### 支持的音频格式

| **\*格式\***               | **\*扩展名\*** |
| :------------------------- | :------------- |
| MPEG layer 3               | .mp3           |
| Ogg Vorbis                 | .ogg           |
| Microsoft Wave             | .wav           |
| 音频交换文件格式           | .aiff / .aif   |
| Ultimate Soundtracker 模块 | .mod           |
| Impulse Tracker 模块       | .it            |
| Scream Tracker 模块        | .s3m           |
| FastTracker 2 模块         | .xm            |

### AudioListener

### AudioPlayer

### AudioClip

```c#

```

## 动画

### Animator

### Animation

## 导航

### Navigation Mesh（导航网格）

### NavMesh Agent（导航网格代理）

### Off-Mesh Link（网格外链接）

### NavMesh Obstacle（导航网格障碍物）

## 光照

## 粒子系统

## TimeLine

### TimeLine+Cinemachine 实现运镜效果

## 协程

程从字面意思理解指的是协同程序， 除了协程，我们更熟悉的应该是进程和线程，一个应用程序一般对应一个进程，而一个进程可以有多个线程，一般是一个主线程，多个辅助线程，在多核 CPU 上，多个线程可以实现并行执行，但如果是单核 CPU，那么多个线程是交替执行的，这是一种伪并行状态。

协程就相当于一种伪并行状态，不过协程是相对于线程的，这里要特别注意协程和线程的区别，线程在多核 CPU 上可以实现并行执行，但是协程是在一个线程中开启的，总的来说，协程只是执行的结果像线程而已，实际上还是串行执行，区别于进程和线程，协程是由开发者调度的。

和我们调用某个方法相似，但又有所不同，在调用方法时，程序会跳转执行调用的方法，直到方法执行完成再返回执行主程序，而对于协程来说，我们相当于可以控制方法的执行进度，可以当方法执行到指定位置时，将方法挂起，返回去执行主程序，经过指定时间过后，再次回到协程返回的位置，继续执行协程中剩下的程序，协程的进度控制需要通过 yield return xxx 来实现。

```c#
using UnityEngine;
using System.Collections;
using System.Threading;
public class CoroutineTest : MonoBehaviour
{
    void Start()
    {
        IEnumerator newCoroutine = NewCoroutine();
        StartCoroutine(newCoroutine);//开启协程
        for (int i = 0; i < 10; i++)   //循环1
        {
            Debug.Log("Start" + i);
            Thread.Sleep(10);
        }
    }
    IEnumerator NewCoroutine()
    {
        for (int i = 0; i < 10; i++) //循环2
        {
            Debug.Log("NewCoroutine_One" + i);
        }

        yield return new WaitForSeconds(1); // 协程暂停1s

        for (int i = 0; i < 10; i++) //循环3
        {
            Debug.Log("NewCoroutine_Two" + i);
            yield return null; // 协程挂起，下一帧继续调用
        }
    }

    void Update()
    {
        Debug.Log("Update");
    }

    void LateUpdate()
    {
        Debug.Log("LateUpdate");
    }
}
```

测试样例的执行结果是：循环 2（0-9）->循环 1（0-9）->Update->LateUpdate->…(1s)->Update->循环 3（0)->LateUpdate->Update->循环 3（1）->LateUpdate->…

```c#
// StopCoroutine (string methodName)
StartCoroutine("NewCoroutine"); //开启协程
StopCoroutine("NewCoroutine");

// StopCoroutine (IEnumerator routine)
IEnumerator newCoroutine = NewCoroutine();
StartCoroutine(newCoroutine); //开启协程
StopCoroutine(newCoroutine);

// StopCoroutine (Coroutine routine)
Coroutine newCoroutine =  StartCoroutine(NewCoroutine()); //开启协程
StopCoroutine(newCoroutine);
```

Unity 协程的底层原理
协程分为两部分，协程与协程调度器：协程仅仅是一个能够中间暂停返回的函数，而协程调度是在 MonoBehaviour 的生命周期中实现的。 准确的说，Unity 只实现了协程调度部分，而协程本身其实就是用了 C#原生的”迭代器方法“。

1. 协程本体：C#的迭代器函数
   许多语言都有迭代器的概念，使用迭代器我们可以很轻松的遍历一个容器。 但是 C#里面的迭代器要屌一点，它可以“遍历函数”。
   C#中的迭代器方法其实就是一个协程，你可以使用 yield 来暂停，使用 MoveNext()来继续执行。 当一个方法的返回值写成了 IEnumerator 类型，他就会自动被解析成迭代器方法（后文直接称之为协程），你调用此方法的时候不会真的运行，而是会返回一个迭代器，需要用 MoveNext()来真正的运行。看例子：

static void Main(string[] args)
{
IEnumerator it = Test();//仅仅返回一个指向 Test 的迭代器，不会真的执行。
Console.ReadKey();
it.MoveNext();//执行 Test 直到遇到第一个 yield
System.Console.WriteLine(it.Current);//输出 1
Console.ReadKey();
it.MoveNext();//执行 Test 直到遇到第二个 yield
System.Console.WriteLine(it.Current);//输出 2
Console.ReadKey();
it.MoveNext();//执行 Test 直到遇到第三个 yield
System.Console.WriteLine(it.Current);//输出 test3
Console.ReadKey();
}
​
static IEnumerator Test()
{
System.Console.WriteLine("第一次执行");
yield return 1;
System.Console.WriteLine("第二次执行");
yield return 2;
System.Console.WriteLine("第三次执行");
yield return "test3";
}
执行 Test()不会运行函数体，会直接返回一个 IEnumerator
调用 IEnumerator 的 MoveNext()成员，会执行协程直到遇到第一个 yield return 或者执行完毕。
调用 IEnumerator 的 Current 成员，可以获得 yield return 后面接的返回值，该返回值可以是任何类型的对象。

## 回调

回调是委托的一个运用，合理使用回调可以简化并降低代码耦合度，以最近的 ccvr 交通项目为例子，虚拟交警做出对应手势控制车辆行进路线，对于虚拟交警的手势判断采用在固定点位放置对应的触发器（比如停车手势，左手前伸举起，右手垂直放置，在左前方和腰身处放置两个触发器，需要判断过渡的手势先不论），当两个手柄放置在对应点位时判断手势生效。

新建**GesturePose**脚本并挂载在触发器物体上，代码如下，让触发器状态判断与其他脚本代码分离，一个脚本只完成其该实现的功能，提供对应的接口，而不管外界如果使用。

```c#
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GesturePose : MonoBehaviour
{
    // Action是unity实现回调的类，<>内为传递的参数列表，触发器向外界提供自身信息以及触发该事件的对象
    public Action<GesturePose, Collider> triggerEnter;
    public Action<GesturePose, Collider> triggerStay;
    public Action<GesturePose, Collider> triggerExit;

    private void OnTriggerEnter(Collider other)
    {
        if (triggerEnter != null)
        {
            triggerEnter(this, other);
        }
    }

    private void OnTriggerStay(Collider other)
    {
        if (triggerStay != null)
        {
            triggerStay(this, other);
        }
    }

    private void OnTriggerExit(Collider other)
    {
        if (triggerExit != null)
        {
            triggerExit(this, other);
        }
    }
}
```

每一个触发器都添加上述脚本，然后创建一个空物体（GestureGroups）将所有触发器作为该物体的子物体，然后我们需要对所有的触发器进行一个管理，新建**GestureMgr** 脚本并添加到 GestureGroups，代码如下

```c#
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GestureMgr : MonoBehaviour
{
	// 记录所有触发器
    private List<GesturePose> gesturePoses = new List<GesturePose>();
    // 记录当前被触发的触发器序列
    private List<GesturePose> curGesturePose = new List<GesturePose>();

    private void Start()
    {
        for (int i = 0; i < transform.childCount; i++)
        {
            var gesture = transform.GetChild(i).GetComponent<GesturePose>();
            // 为每一个触发器的触发事件添加监听
            gesture.triggerEnter += GestureEnter;
            gesture.triggerStay += GestureStay;
            gesture.triggerExit += GestureExit;
            gesturePoses.Add(gesture);
        }
    }

    private void GestureEnter(GesturePose arg1, Collider arg2)
    {
        curGesture.Add(arg1);
    }

    private void GestureStay(GesturePose arg1, Collider arg2)
    {

    }
    private void GestureExit(GesturePose arg1, Collider arg2)
    {
        curGesture.Remove(arg1);
    }
}
```

这样一来，两个脚本之间只进行数据的传递，而不产生其他依赖关系。合理使用回调可以使得各成员的工作相对独立，约定接口规范之后便可以同时开展各自的工作。

## 异步加载

## API 扩展

使用 C#的扩展加上泛型可以扩展 unity 内部函数，换句话来说，就是可以达到简化的效果，比如我需要查找某个子物体，并获取这个游戏物体身上的某一个组件，标准的写法就是这样的：

```c#
var goBtn = gameObject.Find("goName").GetComponent<Button>();
```

使用泛型简化之后可以是这样的：

```c#
var goBtn = gameObject.Find<Button>("goName");
```

那么要实现这样一个简化效果是怎么实现的呢？

让我们创建一个新的类 UnityExtend，这个类可以专门用来实现 Unity 的扩展，在类中实现一个 Find 静态方法：

```c#
public static class UnityExtend{
    public static T Find<T>(this GameObject curGo, string path){
        return curGo.transform.Find(path).GetCompnonent<T>();
    }
}
```

除此之外，这是对 GameObject.Find()的变形，那么我们还可以顺便对 Transform.Find 也做个简化：

```c#
public static class UnityExtend{
    public static T Find<T>(this GameObject curGo, string path){
        return curGo.transform.Find(path).GetCompnonent<T>();
    }

    public static T Find(this Transform curTf, string path){
        return curTf.Find(path).GetComponent<T>();
    }
}
```

### 链式编程

```c#
using UnityEngine;

namespace SunFrameWork
{
    public static class ChainExtern
    {
        /// <summary>
        /// Transfrom 链式扩展
        /// </summary>
        /// <param name="tf"></param>
        /// <param name="pos"></param>
        /// <returns></returns>

        public static Transform Position(this Transform tf, Vector3 pos)
        {
            tf.position = pos;
            return tf;
        }

        public static Transform LocalPosition(this Transform tf, Vector3 pos)
        {
            tf.localPosition = pos;
            return tf;
        }
        public static Transform Roration(this Transform tf, Quaternion rotation)
        {
            tf.rotation = rotation;
            return tf;
        }

        public static Transform LocalRotation(this Transform tf, Quaternion rotation)
        {
            tf.localRotation = rotation;
            return tf;
        }

        public static Transform LocalScale(this Transform tf, Vector3 scale)
        {
            tf.localScale = scale;
            return tf;
        }

        /// <summary>
        /// RectTrasnform链式
        /// </summary>
        /// <param name="tf"></param>
        /// <param name="pos"></param>
        /// <returns></returns>
        public static RectTransform Position(this RectTransform tf, Vector3 pos)
        {
            tf.position = pos;
            return tf;
        }

        public static RectTransform LoaclPosition(this RectTransform tf, Vector3 pos)
        {
            tf.localPosition = pos;
            return tf;
        }

        public static RectTransform Roration(this RectTransform tf, Quaternion rotation)
        {
            tf.rotation = rotation;
            return tf;
        }

        public static RectTransform LocalRotation(this RectTransform tf, Quaternion rotation)
        {
            tf.localRotation = rotation;
            return tf;
        }

        public static RectTransform LocalScale(this RectTransform tf, Vector3 scale)
        {
            tf.localScale = scale;
            return tf;
        }
    }
}
```

## 编辑器扩展

### 工具栏扩展

#### MenuItem

- arg0 => 路径
- arg1 => 是否隐藏，false 表示在工具栏显示
- arg2 => 该项的排序索引值，值越小排序越前

```c#
using UnityEngine;
using UnityEditor;
using UnityEngine.SceneManagement;

public class EditorExtern : Editor
{
    [MenuItem("Extern/Scene/LoadMainScene", false, 10)]
    public static void LoadMainScene()
    {
        SceneManager.LoadScene("MainScene");
    }
}
```

#### Hierarchy 面板右键扩展

### Inspector 面板扩展

#### CustomEditor

举一个简单的例子，为脚本添加一个按钮，让它能够在 Inspector 面板中显示出来，并且可以通过这个按钮来调用脚本的一些方法。

首先，创建一个 Test 脚本

```c#
using UnityEngine;

public class Test : MonoBehaviour
{
    // Inspector面板按钮点击事件调用函数
    public void TestPrint()
    {
        Debug.Log("test");
    }
}
```

有了一个 Test 脚本之后，将它挂在一个游戏物体上，选中该游戏物体，Inpsector 面板显然什么都没有，然后我们为 Test 脚本添加一个按钮。

新建一个 TestButton 脚本，让它继承 Editor，重写 OnInspectorGUI 方法。

```c#
using UnityEditor;

// 使用特性[CustomEditor(typeof(脚本类名))]
[CustomEditor(typeof(Test))]
public class TestButton : Editor
{
    // 重写OnInspectorGUI方法
    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();

        // 获取脚本类，target表示目标脚本类
        Test test = target as Test;

        // GUILayout.Button("按钮上显示的文本") 返回一个bool类型，按下返回true
        bool isPrint = GUILayout.Button("test");
        // 按钮按下，调用脚本函数
        if (isPrint)
        {
            test.TestPrint();
        }
    }
}
```

这样就可以看到在 Inspector 面板上 Test 脚本就拥有了一个 Button 按钮。

### Project 面板右键菜单扩展

#### CreateAssetMenu

使用 ScriptableObject 实例化类对象作为一种本地存储方式时使用，可以在 CustomEditor 右键创建对象的.asset 文件

```c#
[CreateAssetMenu(fileName = "User", menuName = "Emo/CreateAccount", order = 1)]
public class UserInfo : ScriptableObject
{
    public string userName;
    public string password;
}
```

### 自定义面板

#### EditorWindow

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;

public class DebugWindow : EditorWindow
{
     [MenuItem("SunFrame/Debug")]
     private static void AddWindow1()
     {
         DebugWindow myWindow = (DebugWindow)EditorWindow.GetWindow(typeof(DebugWindow), false, "Debug", true);//创建窗口
         myWindow.Show();
     }

    private float minTimeScale;
    private float maxTimeScale;
    private float timeScale;
    private void OnGUI()
    {
        timeScale = EditorGUILayout.Slider("TimeScale", timeScale, 0.1f, 5f);
        Time.timeScale = timeScale;
    }
}
```

## 宏

### 预编译指令

```c#
#if UNITY_EDITOR
#elif UNITY_ANDROID
#endif
```

### 平台宏

[unity 官方文档](https://docs.unity3d.com/cn/current/Manual/PlatformDependentCompilation.html)

1. UNITY_EDITOR
2. UNITY_STANDALONE_WIN
3. UNITY_STANDALONE_OSX
4. UNITY_STANDALONE_LINUX
5. UNITY_ANDROID
6. UNITY_IOS

### 自定义宏

## 资源管理

### 常用路径

```c#
Application.dataPath
// 指向游戏数据文件夹的路径---Assets
Application.persistentDataPath
// 指向持久数据目录的路径
// Android环境：指向大多数设备上的 /storage/emulated/0/Android/data/<packagename>/files（一些旧款手机可能会指向 SD 卡（如果存在）上的位置），并使用 android.content.Context.getExternalFilesDir 来解析该路径。
```

### AssetDatabase

提供访问和操作 Asset 文件夹所有资源的接口，在 UNITY_EDITOR 宏下使用，以免发布后出现错误

- 加载资源

  ```c#
  AssetDatabase.LoadAssetAtPath(path, typeof(Texture2D));
  ```

- 保存改动

  ```
  AssetDatabase.SaveAssets();
  ```

### Resources

允许游戏运行时动态加载资源对象到场景中

```c#
string goPath = "Emy/Enemy_1";
GameObject go = Resources.Load(goPath);
```

### AssetBundle

## 文件存档

_首先创建一个用于保存用户信息的类作为保存对象，用来进行测试_

```csharp
[System.Serializable] // 可序列化属性
class UserInfo // 用户信息类
{
	private string name;
	private int age;
	private float score;

	public string Name { get => name; set => name = value; }
    public int Age { get => age; set => age = value; }
    public float Score { get => score; set => score = value; }

    public UserInfo(string name, int age, float score) // 构造函数
	{
		this.name = name;
		this.age = age;
		this.score = score;
	}
}
```

### 二进制文件

- **_保存数据_**

```csharp
using UnityEngine;
using System.IO; // 文件输入输出流命名空间
using System.Runtime.Serialization.Formatters.Binary; // 二进制文件序列化命名空间

public class DataMemory: MonoBehaviour
{
	void Start()
    {
		SaveAsBinary(new UserInfo("smith", 19, 99));
    }

	public void SaveAsBinary(UserInfo userInfo) // 文件保存类
	{
		BinaryFormatter binaryFormatter = new BinaryFormatter(); // 二进制格式化类
		FileStream fileStream = File.Create(Application.dataPath + '/' + "StreamingAssets" + '/' + "BinaryTest"); // 使用文件流创建一个用于保存用户信息类的文件
		binaryFormatter.Serialize(fileStream, userInfo); // 将用户信息类序列化并保存到文件
		fileStream.Close(); // 关闭文件流
	}
}
```

_运行后会在 StreamingAssets 文件夹中生成对应文件，用记事本打开内容是这样的_
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020715345036.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvbmVyczUyNjM=,size_16,color_FFFFFF,t_70#pic_center)
_这样保存的二进制文件几乎没有可读性_

`<u>`_在这里补充一下 StreamingAssets 文件夹的作用，就我目前了解，StreamingAssets 文件夹中的所有资源在打包安装到其他运行环境时，会原封不动的拷贝，而像 Resources 文件夹这些是会被打包压缩的，之后就无法访问这些文件夹了，而 StreamingAssets 不会，可以通过 Application.DataPath + '/' + "StreamingAssets"访问_`</u>`

- **_读取数据_**

```csharp
using UnityEngine;
using System.IO; // 文件输入输出流命名空间
using System.Runtime.Serialization.Formatters.Binary; // 二进制文件序列化命名空间

public class DataMemory: MonoBehaviour
{
	void Start()
    {
		UserInfo userInfo = ReadByBinary(Application.dataPath + '/' + "StreamingAssets" + '/' + "BinaryTest");
		Debug.Log(userInfo.Name);
		Debug.Log(userInfo.Age);
		Debug.Log(userInfo.Score);
	}

	public UserInfo ReadByBinary(string path)
    {
		BinaryFormatter binaryFormatter = new BinaryFormatter();
		FileStream fileStream = File.OpenRead(path); // 读取文件
		fileStream.Close();
		return binaryFormatter.Deserialize(fileStream) as UserInfo; // 反序列化
    }
}
```

_运行后读取的结果如下_
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207155954180.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvbmVyczUyNjM=,size_16,color_FFFFFF,t_70#pic_center)

### JSON 文件

_在使用 JSON 文件保存游戏数据前，需要先引入 LitJSON_
_在工具栏-项目-管理 NuGet 程序_
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210212142914825.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvbmVyczUyNjM=,size_16,color_FFFFFF,t_70#pic_center)
_在浏览中搜索 LitJSON，然后安装_
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210212143104648.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvbmVyczUyNjM=,size_16,color_FFFFFF,t_70)
_然后找到本项目中 Packages / LitJson.0.17.0 / lib / net20 文件夹中的 LitJSON.dll 文件，将其导入到项目中，然后就可以在脚本中引用 LitJson 命名空间了。_
![在这里插入图片描述](https://img-blog.csdnimg.cn/202102121436431.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvbmVyczUyNjM=,size_16,color_FFFFFF,t_70)

- **_保存数据_**

```csharp
using System;
using UnityEngine;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary; // 二进制文件序列化命名空间
using LitJson;

public class DataMemory: MonoBehaviour
{
	void Start()
    {
        SaveAsJSON(new UserInfo("smith", 19, 99));
    }

    public void SaveAsJSON(UserInfo userInfo)
    {
        // 创建文件读写流
        StreamWriter streamWriter = new StreamWriter(Application.dataPath + '/' + "StreamingAssets" + '/' + "JsonTest");
        // 将userInfo转换成Json格式字符串
        string userInfoStr = JsonMapper.ToJson(userInfo);
        // 将Json格式的字符串写入
        streamWriter.Write(userInfoStr);
        // 关闭文件读写流
        streamWriter.Close();
    }
}
```

_场景运行后得到的 JsonTest 文件用记事本打开，格式如下_
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210212150629752.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvbmVyczUyNjM=,size_16,color_FFFFFF,t_70)
_可见，Json 文件存储对象是通过键值对的形式存在，具有非常强的可读性_

- **_读取数据_**

```csharp
using System;
using UnityEngine;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary; // 二进制文件序列化命名空间
using LitJson;


public class DataMemory: MonoBehaviour
{
	void Start()
    {
        UserInfo userInfo = ReadByJSON(Application.dataPath + '/' + "StreamingAssets" + '/' + "JsonTest");
    }

    public UserInfo ReadByJSON(string path)
    {
        // 创建文件读写流
        StreamReader streamReader = new StreamReader(path);
        // 读取Json格式字符串
        string jsonStr = streamReader.ReadToEnd();
        // 关闭文件读写流
        streamReader.Close();
        // 将Json字符串转换成对象
        return JsonMapper.ToObject<UserInfo>(jsonStr);
    }
}
```

### XML 文件

- **_保存数据_**

```csharp
using System;
using UnityEngine;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary; // 二进制文件序列化命名空间
using LitJson;
using System.Xml; // 引用Xml命名空间

public class DataMemory: MonoBehaviour
{
	void Start()
    {
        SaveAsXml(new UserInfo("smith", 19, 99));
    }

    public void SaveAsXml(UserInfo userInfo)
    {
        // 创建xml文档
        XmlDocument xmlDocument = new XmlDocument();
        // 创建根节点
        XmlElement root = xmlDocument.CreateElement("XmlTest");
        // 设置根节点值
        root.SetAttribute("DataName", userInfo.ToString());
        // 添加根节点
        xmlDocument.AppendChild(root);
        // 创建子节点
        XmlElement name = xmlDocument.CreateElement("name");
        XmlElement age = xmlDocument.CreateElement("age");
        XmlElement score = xmlDocument.CreateElement("score");
        // 设置子节点值
        name.InnerText = userInfo.Name;
        age.InnerText = userInfo.Age.ToString();
        score.InnerText = userInfo.Score.ToString();
        // 添加子节点
        root.AppendChild(name);
        root.AppendChild(age);
        root.AppendChild(score);
        // 保存到文件
        xmlDocument.Save(Application.dataPath + '/' + "StreamingAssets" + '/' + "XmlTest");
    }
}
```

_运行场景后得到的 XmlTest 文件用记事本打开如下_
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210212163650283.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvbmVyczUyNjM=,size_16,color_FFFFFF,t_70)
_Xml 文件可读性较强，但是保存操作相对复杂_

- **_读取数据_**

```csharp
using System;
using UnityEngine;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary; // 二进制文件序列化命名空间
using LitJson;
using System.Xml;

public class DataMemory: MonoBehaviour
{
	void Start()
    {
        UserInfo userInfo = ReadByXml(Application.dataPath + '/' + "StreamingAssets" + '/' + "XmlTest");
    }

    public UserInfo ReadByXml(string path)
    {
        // 创建Xml文档
        XmlDocument xmlDocument = new XmlDocument();
        // 读取Xml文件
        xmlDocument.Load(path);
        // 根据节点名称获取根节点
        XmlNodeList xmlNodeList = xmlDocument.GetElementsByTagName("XmlTest");
        // 获取子节点
        XmlNode nameNode = xmlNodeList[0].ChildNodes[0];
        XmlNode ageNode = xmlNodeList[0].ChildNodes[1];
        XmlNode scoreNode = xmlNodeList[0].ChildNodes[2];
        // 获取子节点值
        string name = nameNode.InnerText;
        int age = int.Parse(ageNode.InnerText);
        float score = float.Parse(scoreNode.InnerText);
        return new UserInfo(name, age, score);
    }
}
```

## 广播机制

## 消息机制

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SunFrameWork
{
    /// <summary>
    /// 事件声明
    /// </summary>
    public enum MsgDefine
    {

    }

    public delegate void CallBack();
    public delegate void CallBack<T>(T arg);
    public delegate void CallBack<T1, T2>(T1 arg1, T2 arg2);
    public delegate void CallBack<T1, T2, T3>(T1 arg1, T2 arg2, T3 arg3);
    public delegate void CallBack<T1, T2, T3, T4>(T1 arg1, T2 arg2, T3 arg3, T4 arg4);
    public delegate void CallBack<T1, T2, T3, T4, T5>(T1 arg1, T2 arg2, T3 arg3, T4 arg4, T5 arg5);
}
```

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;


namespace SunFrameWork
{
    /// <summary>
    /// 消息分发中心
    /// </summary>
    public static class MsgCenter
    {
        private static Dictionary<MsgDefine, Delegate> eventMap = new Dictionary<MsgDefine, Delegate>();

        /// <summary>
        /// 广播事件
        /// </summary>
        /// <param name="eventDefine"></param>
        /// <exception cref="Exception"></exception>
        public static void Call(MsgDefine eventDefine)
        {
            Delegate d;
            if (eventMap.TryGetValue(eventDefine, out d))
            {
                CallBack callBack = d as CallBack;
                if (callBack != null)
                {
                    callBack();
                }
                else
                {
                    throw new Exception("the type of delegate is not exist in the table!");
                }
            }
        }

        public static void Call<T>(MsgDefine eventDefine, T arg)
        {
            Delegate d;
            if (eventMap.TryGetValue(eventDefine, out d))
            {
                CallBack<T> callBack = d as CallBack<T>;
                if (callBack != null)
                {
                    callBack(arg);
                }
                else
                {
                    throw new Exception(string.Format("广播事件错误：事件{0}对应委托具有不同的类型", eventDefine));
                }
            }
        }
        //two parameters
        public static void Call<T, T1>(MsgDefine eventDefine, T arg1, T1 arg2)
        {
            Delegate d;
            if (eventMap.TryGetValue(eventDefine, out d))
            {
                CallBack<T, T1> callBack = d as CallBack<T, T1>;
                if (callBack != null)
                {
                    callBack(arg1, arg2);
                }
                else
                {
                    throw new Exception(string.Format("广播事件错误：事件{0}对应委托具有不同的类型", eventDefine));
                }
            }
        }
        //three parameters
        public static void Call<T, T1, T2>(MsgDefine eventDefine, T arg1, T1 arg2, T2 arg3)
        {
            Delegate d;
            if (eventMap.TryGetValue(eventDefine, out d))
            {
                CallBack<T, T1, T2> callBack = d as CallBack<T, T1, T2>;
                if (callBack != null)
                {
                    callBack(arg1, arg2, arg3);
                }
                else
                {
                    throw new Exception(string.Format("广播事件错误：事件{0}对应委托具有不同的类型", eventDefine));
                }
            }
        }
        //four parameters
        public static void Call<T, T1, T2, T3>(MsgDefine eventDefine, T arg1, T1 arg2, T2 arg3, T3 arg4)
        {
            Delegate d;
            if (eventMap.TryGetValue(eventDefine, out d))
            {
                CallBack<T, T1, T2, T3> callBack = d as CallBack<T, T1, T2, T3>;
                if (callBack != null)
                {
                    callBack(arg1, arg2, arg3, arg4);
                }
                else
                {
                    throw new Exception(string.Format("广播事件错误：事件{0}对应委托具有不同的类型", eventDefine));
                }
            }
        }
        //five parameters
        public static void Call<T, T1, T3, T4, T5>(MsgDefine eventDefine, T arg1, T1 arg2, T3 arg3, T4 arg4, T5 arg5)
        {
            Delegate d;
            if (eventMap.TryGetValue(eventDefine, out d))
            {
                CallBack<T, T1, T3, T4, T5> callBack = d as CallBack<T, T1, T3, T4, T5>;
                if (callBack != null)
                {
                    callBack(arg1, arg2, arg3, arg4, arg5);
                }
                else
                {
                    throw new Exception(string.Format("广播事件错误：事件{0}对应委托具有不同的类型", eventDefine));
                }
            }
        }

        /// <summary>
        /// 添加监听事件
        /// </summary>
        /// <param name="eventDefine"></param>
        /// <param name="callBack"></param>
        public static void AddListener(MsgDefine eventDefine, CallBack callBack)
        {
            OnListenerAdd(eventDefine, callBack);
            eventMap[eventDefine] = (CallBack)eventMap[eventDefine] + callBack;
        }

        public static void AddListener<T>(MsgDefine eventDefine, CallBack<T> callBack)
        {
            OnListenerAdd(eventDefine, callBack);
            eventMap[eventDefine] = (CallBack<T>)eventMap[eventDefine] + callBack;
        }

        public static void AddListener<T1, T2>(MsgDefine eventDefine, CallBack<T1, T2> callBack)
        {
            OnListenerAdd(eventDefine, callBack);
            eventMap[eventDefine] = (CallBack<T1, T2>)eventMap[eventDefine] + callBack;
        }

        public static void AddListener<T1, T2, T3>(MsgDefine eventDefine, CallBack<T1, T2, T3> callBack)
        {
            OnListenerAdd(eventDefine, callBack);
            eventMap[eventDefine] = (CallBack<T1, T2, T3>)eventMap[eventDefine] + callBack;
        }

        public static void AddListener<T1, T2, T3, T4>(MsgDefine eventDefine, CallBack<T1, T2, T3, T4> callBack)
        {
            OnListenerAdd(eventDefine, callBack);
            eventMap[eventDefine] = (CallBack<T1, T2, T3, T4>)eventMap[eventDefine] + callBack;
        }

        public static void AddListener<T1, T2, T3, T4, T5>(MsgDefine eventDefine, CallBack<T1, T2, T3, T4, T5> callBack)
        {
            OnListenerAdd(eventDefine, callBack);
            eventMap[eventDefine] = (CallBack<T1, T2, T3, T4, T5>)eventMap[eventDefine] + callBack;
        }

        private static void OnListenerAdd(MsgDefine eventDefine, CallBack callBack)
        {
            if (!eventMap.ContainsKey(eventDefine))
            {
                eventMap.Add(eventDefine, null);
            }
            Delegate d = eventMap[eventDefine];
            if (d != null && callBack.GetType() != d.GetType())
            {
                throw new Exception("The type of delegate to be added is different from the one in the table!");
            }
        }

        private static void OnListenerAdd<T>(MsgDefine eventDefine, CallBack<T> callBack)
        {
            if (!eventMap.ContainsKey(eventDefine))
            {
                eventMap.Add(eventDefine, null);
            }
            Delegate d = eventMap[eventDefine];
            if (d != null && callBack.GetType() != d.GetType())
            {
                throw new Exception("The type of delegate to be added is different from the one in the table!");
            }
        }

        private static void OnListenerAdd<T1, T2>(MsgDefine eventDefine, CallBack<T1, T2> callBack)
        {
            if (!eventMap.ContainsKey(eventDefine))
            {
                eventMap.Add(eventDefine, null);
            }
            Delegate d = eventMap[eventDefine];
            if (d != null && callBack.GetType() != d.GetType())
            {
                throw new Exception("The type of delegate to be added is different from the one in the table!");
            }
        }

        private static void OnListenerAdd<T1, T2, T3>(MsgDefine eventDefine, CallBack<T1, T2, T3> callBack)
        {
            if (!eventMap.ContainsKey(eventDefine))
            {
                eventMap.Add(eventDefine, null);
            }
            Delegate d = eventMap[eventDefine];
            if (d != null && callBack.GetType() != d.GetType())
            {
                throw new Exception("The type of delegate to be added is different from the one in the table!");
            }
        }

        private static void OnListenerAdd<T1, T2, T3, T4>(MsgDefine eventDefine, CallBack<T1, T2, T3, T4> callBack)
        {
            if (!eventMap.ContainsKey(eventDefine))
            {
                eventMap.Add(eventDefine, null);
            }
            Delegate d = eventMap[eventDefine];
            if (d != null && callBack.GetType() != d.GetType())
            {
                throw new Exception("The type of delegate to be added is different from the one in the table!");
            }
        }

        private static void OnListenerAdd<T1, T2, T3, T4, T5>(MsgDefine eventDefine, CallBack<T1, T2, T3, T4, T5> callBack)
        {
            if (!eventMap.ContainsKey(eventDefine))
            {
                eventMap.Add(eventDefine, null);
            }
            Delegate d = eventMap[eventDefine];
            if (d != null && callBack.GetType() != d.GetType())
            {
                throw new Exception("The type of delegate to be added is different from the one in the table!");
            }
        }


        /// <summary>
        /// 移除监听事件
        /// </summary>
        /// <param name="eventDefine"></param>
        /// <param name="callBack"></param>
        public static void RemoveListener(MsgDefine eventDefine, CallBack callBack)
        {
            OnListenerRemove(eventDefine, callBack);
            eventMap[eventDefine] = (CallBack)eventMap[eventDefine] - callBack;
            OnListenerRemoved(eventDefine);
        }

        public static void RemoveListener<T>(MsgDefine eventDefine, CallBack<T> callBack)
        {
            OnListenerRemove(eventDefine, callBack);
            eventMap[eventDefine] = (CallBack<T>)eventMap[eventDefine] - callBack;
            OnListenerRemoved(eventDefine);
        }

        public static void RemoveListener<T1, T2>(MsgDefine eventDefine, CallBack<T1, T2> callBack)
        {
            OnListenerRemove(eventDefine, callBack);
            eventMap[eventDefine] = (CallBack<T1, T2>)eventMap[eventDefine] - callBack;
            OnListenerRemoved(eventDefine);
        }

        public static void RemoveListener<T1, T2, T3>(MsgDefine eventDefine, CallBack<T1, T2, T3> callBack)
        {
            OnListenerRemove(eventDefine, callBack);
            eventMap[eventDefine] = (CallBack<T1, T2, T3>)eventMap[eventDefine] - callBack;
            OnListenerRemoved(eventDefine);
        }

        public static void RemoveListener<T1, T2, T3, T4>(MsgDefine eventDefine, CallBack<T1, T2, T3, T4> callBack)
        {
            OnListenerRemove(eventDefine, callBack);
            eventMap[eventDefine] = (CallBack<T1, T2, T3, T4>)eventMap[eventDefine] - callBack;
            OnListenerRemoved(eventDefine);
        }

        public static void RemoveListener<T1, T2, T3, T4, T5>(MsgDefine eventDefine, CallBack<T1, T2, T3, T4, T5> callBack)
        {
            OnListenerRemove(eventDefine, callBack);
            eventMap[eventDefine] = (CallBack<T1, T2, T3, T4, T5>)eventMap[eventDefine] - callBack;
            OnListenerRemoved(eventDefine);
        }

        private static void OnListenerRemove(MsgDefine eventDefine, CallBack callBack)
        {
            if (eventMap.ContainsKey(eventDefine))
            {
                Delegate d = eventMap[eventDefine];
                if (d == null)
                {
                    throw new Exception("the event to be removed is not exist in the table");
                }
                if (d.GetType() != eventMap[eventDefine].GetType())
                {
                    throw new Exception("the type of delegate to be removed is different from the one in the table!");
                }
            }
            else
            {
                throw new Exception("the event to be removed is not exist in the table!");
            }
        }

        private static void OnListenerRemove<T>(MsgDefine eventDefine, CallBack<T> callBack)
        {
            if (eventMap.ContainsKey(eventDefine))
            {
                Delegate d = eventMap[eventDefine];
                if (d == null)
                {
                    throw new Exception("the event to be removed is not exist in the table");
                }
                if (d.GetType() != eventMap[eventDefine].GetType())
                {
                    throw new Exception("the type of delegate to be removed is different from the one in the table!");
                }
            }
            else
            {
                throw new Exception("the event to be removed is not exist in the table!");
            }
        }

        private static void OnListenerRemove<T1, T2>(MsgDefine eventDefine, CallBack<T1, T2> callBack)
        {
            if (eventMap.ContainsKey(eventDefine))
            {
                Delegate d = eventMap[eventDefine];
                if (d == null)
                {
                    throw new Exception("the event to be removed is not exist in the table");
                }
                if (d.GetType() != eventMap[eventDefine].GetType())
                {
                    throw new Exception("the type of delegate to be removed is different from the one in the table!");
                }
            }
            else
            {
                throw new Exception("the event to be removed is not exist in the table!");
            }
        }

        private static void OnListenerRemove<T1, T2, T3>(MsgDefine eventDefine, CallBack<T1, T2, T3> callBack)
        {
            if (eventMap.ContainsKey(eventDefine))
            {
                Delegate d = eventMap[eventDefine];
                if (d == null)
                {
                    throw new Exception("the event to be removed is not exist in the table");
                }
                if (d.GetType() != eventMap[eventDefine].GetType())
                {
                    throw new Exception("the type of delegate to be removed is different from the one in the table!");
                }
            }
            else
            {
                throw new Exception("the event to be removed is not exist in the table!");
            }
        }

        private static void OnListenerRemove<T1, T2, T3, T4>(MsgDefine eventDefine, CallBack<T1, T2, T3, T4> callBack)
        {
            if (eventMap.ContainsKey(eventDefine))
            {
                Delegate d = eventMap[eventDefine];
                if (d == null)
                {
                    throw new Exception("the event to be removed is not exist in the table");
                }
                if (d.GetType() != eventMap[eventDefine].GetType())
                {
                    throw new Exception("the type of delegate to be removed is different from the one in the table!");
                }
            }
            else
            {
                throw new Exception("the event to be removed is not exist in the table!");
            }
        }

        private static void OnListenerRemove<T1, T2, T3, T4, T5>(MsgDefine eventDefine, CallBack<T1, T2, T3, T4, T5> callBack)
        {
            if (eventMap.ContainsKey(eventDefine))
            {
                Delegate d = eventMap[eventDefine];
                if (d == null)
                {
                    throw new Exception("the event to be removed is not exist in the table");
                }
                if (d.GetType() != eventMap[eventDefine].GetType())
                {
                    throw new Exception("the type of delegate to be removed is different from the one in the table!");
                }
            }
            else
            {
                throw new Exception("the event to be removed is not exist in the table!");
            }
        }

        private static void OnListenerRemoved(MsgDefine eventDefine)
        {
            if (eventMap[eventDefine] != null)
            {
                eventMap.Remove(eventDefine);
            }
        }
    }

}
```

## 定时回调

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine.Events;

/// <summary>
/// 定时回调任务
/// </summary>
public class TimerTask
{
    // 任务名称
    public string id;
    // 计时持续时间
    private float durationTime;
    // 计时间隔（指定间隔多久触发一次事件）
    private double intervalTime;

    // 计时开始、每帧、结束回调
    public Action onStart;
    public Action onUpdate;
    public Action onEnd;

    public float DurationTime { get => durationTime; }
    public double IntervalTime { get => intervalTime; }

    /// <summary>
    /// 创建一个必须明确周期，每帧执行的计时器，以保证能够自动结束
    /// </summary>
    /// <param name="taskName"></param>
    public TimerTask(float durationTime)
    {
        this.id = "LimitTask";
        this.durationTime = durationTime;
        this.intervalTime = 0;
    }

    public TimerTask(float durationTime, Action callback)
    {
        this.id = "LimitTask";
        this.durationTime = durationTime;
        this.intervalTime = 0;
        this.onEnd += callback;
    }

    /// <summary>
    /// 创建一个无限时间、每帧执行的计时任务
    /// </summary>
    /// <param name="taskName"></param>
    public TimerTask(string taskName)
    {
        this.id = taskName;
        this.durationTime = -1;
        this.intervalTime = 0;
    }

    /// <summary>
    /// 创建一个有限时间、每帧执行的计时任务
    /// </summary>
    /// <param name="taskName"></param>
    /// <param name="durationTime"></param>
    public TimerTask(string taskName, float durationTime)
    {
        this.id = taskName;
        this.durationTime = durationTime;
        this.intervalTime = 0;
    }

    /// <summary>
    /// 创建一个无限时间、固定帧执行的计时任务
    /// </summary>
    /// <param name="taskName"></param>
    /// <param name="intervalTime"></param>
    public TimerTask(string taskName, double intervalTime)
    {
        this.id = taskName;
        this.durationTime = -1;
        this.intervalTime = intervalTime;
    }

    /// <summary>
    /// 创建一个有限时间、固定帧执行的计时任务
    /// </summary>
    /// <param name="taskName"></param>
    /// <param name="durationTime"></param>
    /// <param name="intervalTime"></param>
    public TimerTask(string taskName, float durationTime, float intervalTime)
    {
        this.id = taskName;
        this.durationTime = durationTime;
        this.intervalTime = intervalTime;
    }
}
```

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

namespace SunFrameWork
{
    /// <summary>
    /// 定时回调
    /// </summary>
    public class Timer : DntdMonoSingleton<Timer>
    {
        // 计时协程字典
        private Dictionary<TimerTask, Coroutine> taskMap = new Dictionary<TimerTask, Coroutine>();

        /// <summary>
        /// 获取计时任务
        /// </summary>
        /// <param name="taskName"></param>
        /// <returns></returns>
        public TimerTask GetTask(string taskName)
        {
            foreach (var task in taskMap.Keys)
            {
                if (task.id == taskName)
                {
                    return task;
                }
            }
            return null;
        }

        /// <summary>
        /// 开启一个新的计时器
        /// </summary>
        /// <param name="timerTask"></param>
        /// <returns></returns>
        public TimerTask New(TimerTask timerTask)
        {
            taskMap[timerTask] = MonoController.StartCoroutine(Timing(timerTask));
            return timerTask;
        }

        /// <summary>
        /// 开启一个新的计时器
        /// </summary>
        /// <param name="delayTime"></param>
        /// <param name="timerTask"></param>
        /// <returns></returns>
        public TimerTask New(float delayTime, TimerTask timerTask)
        {
            MonoController.StartCoroutine(ReadyToTiming(delayTime, timerTask));
            return timerTask;
        }

        /// <summary>
        /// 准备开始计时（延迟计时）
        /// </summary>
        /// <param name="delayTime"></param>
        /// <param name="timerTask"></param>
        /// <returns></returns>
        IEnumerator ReadyToTiming(float delayTime, TimerTask timerTask)
        {
            yield return new WaitForSeconds(delayTime);
            taskMap[timerTask] = MonoController.StartCoroutine(Timing(timerTask));
        }

        /// <summary>
        /// 计时ing
        /// </summary>
        /// <param name="timerTask"></param>
        /// <returns></returns>
        IEnumerator Timing(TimerTask timerTask)
        {
            float totleTime = 0;
            float pieceTime = 0;
            if (timerTask.onStart != null) timerTask.onStart.Invoke();

            while (timerTask.DurationTime < 0 ? true : totleTime < timerTask.DurationTime)
            {
                totleTime += Time.deltaTime;
                pieceTime += Time.deltaTime;
                if (timerTask.IntervalTime >= 0 && pieceTime >= timerTask.IntervalTime)
                {
                    if (timerTask.onUpdate != null)
                    {
                        timerTask.onUpdate.Invoke();
                    }
                    pieceTime = 0f;
                }

                yield return null;
            }
            if (timerTask.onEnd != null) timerTask.onEnd.Invoke();

            taskMap.Remove(timerTask);
        }

        /// <summary>
        /// 关闭存在的计时器
        /// </summary>
        /// <param name="timerTask"></param>
        public void StopTimer(TimerTask timerTask)
        {
            if (timerTask == null) return;
            if (taskMap.ContainsKey(timerTask))
            {
                MonoController.StopCoroutine(taskMap[timerTask]);
                taskMap.Remove(timerTask);
            }
        }

        /// <summary>
        /// 关闭存在的计时器
        /// </summary>
        /// <param name="timerTask"></param>
        public void StopAllTimer()
        {
            foreach (var task in taskMap)
            {
                MonoController.StopCoroutine(task.Value);
                taskMap.Remove(task.Key);
            }
        }
    }

}
```

## Mono 事件管理器

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Events;

/// <summary>
/// MonoBehaviour事件监听器
/// 监听Update、LateUpdate、FixedUpdate事件
/// </summary>
public class MonoListener : DntdMonoSingleton<MonoListener>
{
    private event Action update;
    private event Action fixedUpdate;
    private event Action lateUpdate;

    private void Update()
    {
        if (update != null) update();
    }

    private void FixedUpdate()
    {
        if (fixedUpdate != null) fixedUpdate();
    }

    private void LateUpdate()
    {
        if (lateUpdate != null) lateUpdate();
    }

    public void AddUpdateListener(Action action)
    {
        update += action;
    }

    public void RemoveUpdateListener(Action action)
    {
        update -= action;
    }

    public void AddFixedUpdateListener(Action action)
    {
        fixedUpdate += action;
    }

    public void RemoveFixedUpdateListener(Action action)
    {
        fixedUpdate -= action;
    }

    public void AddLateUpdateListener(Action action)
    {
        lateUpdate += action;
    }

    public void RemoveLateUpdateListener(Action action)
    {
        lateUpdate -= action;
    }
}
```

```c#
using System;
using System.Collections;
using UnityEngine;
using UnityEngine.Internal;

/// <summary>
/// MonoBehaviour事件控制器单例
/// 提供Update、LateUpdate、FixedUpdate、协程接口
/// </summary>
public class MonoController : Singleton<MonoController>
{
    private MonoListener monoEvent = MonoListener.Instance;

    public void AddUpdateListener(Action action)
    {
        monoEvent.AddUpdateListener(action);
    }

    public void RemoveUpdateListener(Action action)
    {
        monoEvent.RemoveUpdateListener(action);
    }

    public void AddFixedUpdateListener(Action action)
    {
        monoEvent.AddFixedUpdateListener(action);
    }

    public void RemoveFixedUpdateListener(Action action)
    {
        monoEvent.RemoveFixedUpdateListener(action);
    }

    public void AddLateUpdateListener(Action action)
    {
        monoEvent.AddLateUpdateListener(action);
    }

    public void RemoveLateUpdateListener(Action action)
    {
        monoEvent.RemoveLateUpdateListener(action);
    }

    public Coroutine StartCoroutine(string methodName)
    {
        return monoEvent.StartCoroutine(methodName);
    }

    public Coroutine StartCoroutine(IEnumerator routine)
    {
        return monoEvent.StartCoroutine(routine);

    }

    public Coroutine StartCoroutine(string methodName, [DefaultValue("null")] object value)
    {
        return monoEvent.StartCoroutine(methodName, value);
    }

    public void StopAllCoroutines()
    {
        monoEvent.StopAllCoroutines();
    }

    public void StopCoroutine(string methodName)
    {
        monoEvent.StopCoroutine(methodName);
    }

    public void StopCoroutine(IEnumerator routine)
    {
        monoEvent.StartCoroutine(routine);
    }

    public void StopCoroutine(Coroutine routine)
    {
        monoEvent.StopCoroutine(routine);
    }

}
```

## 对象池

```c#
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;

public abstract class BasePool<T>
{
    private int maxCap;

    protected Stack<T> objectMap = new Stack<T>();
    protected List<T> goMap = new List<T>();

    public int MaxCap { get => maxCap; protected set => maxCap = value; }

    protected abstract void LoadPref();

    public void Expand(int extraCap = 5)
    {
        MaxCap += extraCap;
        for (int i = 0; i < extraCap; i++)
        {
            LoadPref();
        }
    }

    protected T Get()
    {
        if (objectMap == null)
        {
            objectMap = new Stack<T>();
        }
        if (objectMap.Count <= 0)
        {
            Expand();
        }
        T go = objectMap.Pop();
        if (goMap == null)
        {
            goMap = new List<T>();
        }
        goMap.Add(go);
        return go;
    }

    protected void PutBack(T go)
    {
        if (objectMap == null)
        {
            objectMap = new Stack<T>();
        }
        if (goMap == null)
        {
            goMap = new List<T>();
        }
        if (goMap.Count > 0)
        {
            goMap.Remove(go);
        }
        objectMap.Push(go);
    }
}
```

### Mono 对象池

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;

namespace SunFrameWork
{
    public class MonoPool : BasePool<GameObject>
    {
        GameObject prefGo;

        public MonoPool(GameObject pref, int count)
        {
            prefGo = pref;
            MaxCap = count;
            for (int i = 0; i < count; i++)
            {
                LoadPref();
            }
        }

        protected override void LoadPref()
        {
            GameObject instance = ResMgr.Instance.Instantiate<GameObject>(prefGo);
            instance.SetActive(false);
            base.objectMap.Push(instance);
        }

        public GameObject Borrow()
        {
            GameObject go = base.Get();
            go.SetActive(true);
            return go;
        }

        public void Return(GameObject go)
        {
            go.SetActive(false);
            base.PutBack(go);
        }
    }
}
```

```c#
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;

namespace SunFrameWork
{
    public class MonoPoolController : DntdMonoSingleton<MonoPoolController>
    {
        private Dictionary<PoolID, MonoPool> poolMap = new Dictionary<PoolID, MonoPool>();

        public MonoPool New(PoolID poolID, GameObject pref, int cap)
        {
            if (poolMap == null)
            {
                poolMap = new Dictionary<PoolID, MonoPool>();
            }
            if (!poolMap.ContainsKey(poolID))
            {
                poolMap.Add(poolID, new MonoPool(pref, cap));
            }
            return poolMap[poolID];
        }

        public MonoPool GetPool(PoolID poolID)
        {
            if (poolMap == null)
            {
                poolMap = new Dictionary<PoolID, MonoPool>();
            }
            if (!poolMap.ContainsKey(poolID))
            {
                return null;
            }
            return poolMap[poolID];
        }

        public void Delete(PoolID poolID)
        {
            if (poolMap == null)
            {
                poolMap = new Dictionary<PoolID, MonoPool>();
            }
            if (!poolMap.ContainsKey(poolID))
            {
                return;
            }
            poolMap.Remove(poolID);
        }
    }
}
```

## 网络请求

### HTTP 封装

```c#
using System.Data.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Net.Security;
using System.IO;
using UnityEngine.Networking;
using System.Collections;
using SunFrameWork;
using UnityEngine;

/// <summary>
/// Http封装
/// </summary>
public class HttpController : Singleton<HttpController>
{
    public void UnityGet(string url, Action<string> successCallback, Action failedCallback)
    {
        UnityWebRequest request = new UnityWebRequest(url, "GET");
        MonoController.StartCoroutine(UnityRequest(request, successCallback, failedCallback));
    }

    public void UnityPost(string url, Action<string> successCallback, Action failedCallback, byte[] data)
    {
        UnityWebRequest request = new UnityWebRequest(url, "POST");
        MonoController.StartCoroutine(UnityRequest(request, successCallback, failedCallback, data));
    }

    public void DownloadFile(string url, byte[] fileName, Action<string, byte[]> successCallback, Action failedCallback)
    {
        UnityWebRequest request = new UnityWebRequest(url, "POST");
        MonoController.StartCoroutine(Downloading(request, fileName, successCallback, failedCallback));
    }

    IEnumerator Downloading(UnityWebRequest request, byte[] data, Action<string, byte[]> successCallback, Action failedCallback)
    {
        request.uploadHandler = new UploadHandlerRaw(data);
        request.downloadHandler = new DownloadHandlerBuffer();
        yield return request.SendWebRequest();

        if (request.result != UnityWebRequest.Result.Success)
        {
            Bug.Warning("http请求失败");
            failedCallback.Invoke();
        }
        else
        {
            Dictionary<string, string> headers = request.GetResponseHeaders();
            string fileName = headers["fileName"];
            successCallback.Invoke(fileName, request.downloadHandler.data);
        }
    }

    IEnumerator UnityRequest(UnityWebRequest request, Action<string> successCallback, Action failedCallback, byte[] data = null)
    {
        request.uploadHandler = new UploadHandlerRaw(data);
        request.downloadHandler = new DownloadHandlerBuffer();
        yield return request.SendWebRequest();

        if (request.result != UnityWebRequest.Result.Success)
        {
            Bug.Warning("http请求失败");
            failedCallback.Invoke();
        }
        else
        {
            successCallback.Invoke(request.downloadHandler.text);
        }
    }

    [Obsolete]
    public void UnityWWW(string url, Action<byte[]> callback)
    {
        MonoController.StartCoroutine(WWWRequest(url, (data) => callback.Invoke(data)));
    }

    [Obsolete]
    IEnumerator WWWRequest(string url, Action<byte[]> callback)
    {
        WWW www = new WWW(url);
        yield return www;
        if (www.isDone)
        {
            Bug.Log("下载完成");
            byte[] bytes = www.bytes;
            callback.Invoke(bytes);
        }
    }
}
```

### Socket

## UI 框架

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

namespace SunFrameWork
{
    public class BasePanel : MonoBehaviour
    {
        // 窗体根节点
        protected Transform widgetRoot;

        // 是否可见
        private bool visible;
        private bool interactive;

        public bool Visible { get => visible; protected set => visible = value; }
        public bool Interactive { get => interactive; protected set => interactive = value; }

        /// <summary>
        /// 显示面板
        /// </summary>
        public virtual void OnShow()
        {
            visible = true;
            gameObject.SetActive(true);
        }

        /// <summary>
        /// 隐藏面板
        /// </summary>
        public virtual void OnHide()
        {
            visible = false;
            gameObject.SetActive(false);
        }

        /// <summary>
        /// 激活面板
        /// </summary>
        public virtual void OnActive()
        {
            interactive = false;
            gameObject.SetActive(true);
        }

        /// <summary>
        /// 冻结面板
        /// </summary>
        public virtual void OnBlock()
        {
            interactive = false;
            gameObject.SetActive(true);
        }
    }

}
```

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;
using Newtonsoft.Json;
using UnityEditor;

namespace SunFrameWork
{
    public class UIMgr : DntdMonoSingleton<UIMgr>
    {
        // ui系统根节点
        private Transform layerRoot;
        // 面板根节点
        private Transform panelRoot;

        // 各层根节点
        private Dictionary<UILayer, Transform> layerMap = new Dictionary<UILayer, Transform>();
        // 所有面板预制体
        private Dictionary<PanelID, GameObject> prefMap = new Dictionary<PanelID, GameObject>();
        // 所有面板的脚本
        private Dictionary<PanelID, BasePanel> panelMap = new Dictionary<PanelID, BasePanel>();

        // ui栈
        private Stack<BasePanel> panelStack = new Stack<BasePanel>();

        /// <summary>
        /// 面板索引器
        /// </summary>
        /// <value></value>
        public BasePanel this[PanelID panelID]
        {
            get
            {
                if (!panelMap.ContainsKey(panelID))
                {
                    Bug.Throw(string.Format("The panel {0} does not exist", panelID));
                }
                return panelMap[panelID];
            }
        }

        public void Init()
        {
            foreach (UILayer layer in Enum.GetValues(typeof(UILayer)))
            {
                GameObject go = new GameObject(layer.ToString(), typeof(RectTransform));
                go.transform.SetParent(layerRoot);
                RectTransform rect = go.Get<RectTransform>();
                rect.SetStrecth(StretchLayout.S_S);
                layerMap[layer] = go.transform;
            }
            GameObject[] panels = ResMgr.Instance.LoadAll<GameObject>(Constant.Path_Res_Panels) as GameObject[];
            for (int i = 0; i < panels.Length; i++)
            {
                PanelID id;
                if (Enum.TryParse<PanelID>(panels[i].name, true, out id))
                {
                    prefMap[id] = panels[i];
                }
                else
                {
                    Bug.Err("不存在{0}面板的枚举定义", panels[i]);
                }
            }
        }

        /// <summary>
        /// 面板进栈
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="panelID"></param>
        /// <param name="hide"></param>
        /// <param name="diasble"></param>
        /// <returns></returns>
        public T Push<T>(UILayer layer, PanelID panelID, bool hide = true, bool disasble = true) where T : BasePanel
        {
            if (panelStack == null)
            {
                panelStack = new Stack<BasePanel>();
            }

            if (!panelMap.ContainsKey(panelID))
            {
                GameObject go = ResMgr.Instance.Instantiate<GameObject>(prefMap[panelID]);
                go.transform.SetParent(layerMap[layer]);
                RectTransform rect = go.Get<RectTransform>();
                rect.SetStrecth(StretchLayout.S_S);
                T panel = go.GetComponent<T>();
                panelMap.Add(panelID, panel);
            }

            if (panelStack.Count > 0)
            {
                BasePanel top = panelStack.Peek();
                if (hide)
                    top.OnHide();
                if (disasble)
                    top.OnBlock();
            }
            T target = panelMap[panelID] as T;
            panelStack.Push(target);
            target.OnShow();
            return target;
        }

        /// <summary>
        /// 面板出栈
        /// </summary>
        public void Pop()
        {
            if (panelStack == null)
            {
                panelStack = new Stack<BasePanel>();
            }

            if (panelStack.Count <= 0)
            {
                return;
            }

            BasePanel panel = panelStack.Pop();
            panel.OnHide();

            if (panelStack.Count > 0)
            {
                BasePanel top = panelStack.Peek();
                top.OnActive();
            }
        }
    }
}
```

## Git

国外：https://github.com/

国内：https://gitee.com/

git 安装：https://git-scm.com/downloads

git 的主要内容分为本地版本库以及远程仓库，本地版本库中项目所在的文件夹目录即工作区，git add 命令可以将工作区文件添加到暂存区，通过 git commit 命令可以将暂存区文件提交到版本库，本地版本库和远程仓库通过 git remote 命令设置连接。

![image-20210909190301596](C:\Users\24474\AppData\Roaming\Typora\typora-user-images\image-20210909190301596.png)

git 通过分支管理实现合作开发的版本控制，一个分支以当前版本为起点，相当于从当前版本中复制一份出来，每一条分支之间互不干扰。

合作开发流程中，项目团队先创建一个远程仓库，每个成员首先从将远程仓库克隆到本地，（如果本地已经有初始版本，此处改为推送到远程仓库），并从 [master]分支出发创建各自的分支，同时将本地仓库绑定对应的远程分支。

然后各成员开始各自的工作，可以随时提交更新对应的分支，此时主分支还是原始版本，工作完成后各成员先将本地代码推送到远程仓库所属分支，然后请求合并分支，查看修改，选择需要保留的部分，然后合并到主分支[master]。

当有新的工作任务或者需要修改原来的工作内容时，同样从当前版本创建分支，在新建分支上进行修改或者新增内容，工作完成后合并到主分支即可。

约定：

分支的合并统一在 gitee/github 上完成，新建 pull requests，选择合并的两个分支，检查合并关系，检查冲突文件，删除不需要的版本，最后完成合并。

尽量不修改其他人的代码，有需求及时沟通

提交更新时注意本地分支对应的远程分支是否正确

### 分支管理

```
// 切换并创建分支
git checkout -b [master]

// 切换分支
git checkout [master]

// 查看本地仓库分支
git branch -v

// 查看远程仓库分支
git branch -r

// 查看本地仓库绑定远程分支
git branch -vv

// 修改绑定远程分支
git branch --set-upstream-to=[origin]

// 删除分支
git branch -d [master]
```

### 克隆远程仓库到本地

```
// 初始化本地仓库
git init

// 从远程仓库下载到本地
git clone [url]
```

### 提交本地项目到远程仓库（初始化）

```
// 初始化本地仓库
git init

// 设置本地项目远程仓库地址
git remote add origin [url] // 第一次设置
git remote set-url origin [url] // 修改远程仓库地址

// 切换到对应分支
git checkout [feat-xzj]

// 提交本地项目到暂存区
git add . // 添加所有修改文件
git add [file] // 添加指定文件

// 提交暂存区文件到本地仓库
git commit -m "[备注]"

// 推送到远程仓库
git push -u origin [local branch]:[r branch]

// 如果失败，可以选择强制推送
git push -u origin [local branch]:[remote branch] -f

git lfs init

git lfs track "*.fbx"
```

### 更新本地仓库

```
// 拉取远程分支到本地
git fetch [origin/master]

// git fetch后合并到本地分支
git merge [master]

// 拉去远程分支并合并到本地分支, 相当于git fetch + git merge
git pull origin [remote branch]:[local branch]
```

### 常见问题

- refusing to merge unrelated histories

  一般是因为在 gitee 上新建一个项目，如果添加了 readme 文件等，本地推送的话远程仓库有本地不存在的文件所以会有冲突

  ```
  git pull origin master --allow-unrelated-histories
  ```

  git add . 长时间无响应

  ```
  rm -f ./.git/index.lock
  ```

  [session-c74b8ca6] 17679376046: Incorrect username or password (access token)

  ```
  https://gitee.com/help/articles/4181#article-header0
  ```

- **git pull origin master --allow-unrelated-histories**

- ```
  此项错误是由于本地仓库和远程有不同的开始点，也就是两个仓库没有共同的 commit 出现的无法提交。这里我们需要用到 --allow-unrelated-histories。也就是我们的 pull 命令改为下面这样的：

    git pull origin master --allow-unrelated-histories

    如果设置了默认分支，可以这样写：

    git pull --allow-unrelated-histories
  ```

  RPC failed; HTTP 413 curl 22 The requested URL returned error: 413 send-pack

  ```
  问题在于用http提交有上传大小限制，修改上传大小限制使用 git config --global http.postBuffer 52428800 后依然报错；

  改为了ssh提交就好了 (git remote -v查询git的提交地址)

  git remote set-url origin ssh://xxx@github.org/hello/etl.git
  ```

- LFS only supported repository in paid enterprise.: exit status 128

  ```
  rm .git/hooks/pre-push
  ```

## MLAgents

https://github.com/Unity-Technologies/ml-agents

- 环境配置

  Unity Editor 要求 2019.4 以上

  - Anaconda 环境

    新建一个安装环境 unity_mlagents

    win + r 打开命令窗口，使用 activate unity_mlagents 切换到刚才创建好的环境

    - 安装 pytorch：pip3 install torch~=1.7.1 -i https://pypi.tuna.tsinghua.edu.cn/simple
    - 安装 ml_agents：pip install mlagents==0.27.0 -i https://pypi.tuna.tsinghua.edu.cn/simple

  - 安装 MLAgents 插件

    unity package manager 中搜索 MLAgents 安装导入

- 小球追踪目标实例

  创建一个 Plane 作为游戏的限制区域，一个 Cube 作为追踪目标、一个 Sphere 作为代理对象。为代理添加刚体组件、Decision Requester 脚本以及创建并挂载 RollerAgent 脚本

  - OnEpisodeBegin
    初始化和重置代理

    在每一次训练开始调用一次，一般将一些初始化信息以及每次代理训练达成目标或者失败后调用以开始再一次的训练

    ```c#
    using System.Collections.Generic;
    using UnityEngine;
    using Unity.MLAgents;
    using Unity.MLAgents.Sensors;

    public class RollerAgent : Agent
    {
        Rigidbody rBody;
        void Start () {
            rBody = GetComponent<Rigidbody>();
        }

        public Transform Target;
        public override void OnEpisodeBegin()
        {
           // 如果代理从平台掉落，重置代理的坐标位置以及速度
            if (this.transform.localPosition.y < 0)
            {
                this.rBody.angularVelocity = Vector3.zero;
                this.rBody.velocity = Vector3.zero;
                this.transform.localPosition = new Vector3( 0, 0.5f, 0);
            }

            // 每次训练结束跟新目标物体的坐标位置
            Target.localPosition = new Vector3(Random.value * 8 - 4, 0.5f, Random.value * 8 - 4);
        }
    }
    ```

  - CollectObservations

    收集环境信息

    收集训练当中的主要参数，该案例中需要收集目标物体以及代理自身的坐标位置，以及代理身上刚体 x，z 方向的速度

    ```c#
    public override void CollectObservations(VectorSensor sensor)
    {
        // 目标物体以及代理的坐标位置
        sensor.AddObservation(Target.localPosition);
        sensor.AddObservation(this.transform.localPosition);

        // 代理身上刚体的x，z方向的速度
        sensor.AddObservation(rBody.velocity.x);
        sensor.AddObservation(rBody.velocity.z);
    }
    ```

  - OnActionReceived

    采取行动并分配奖励

    我们需要代理学习改变 x，z 两个方向的坐标值来追踪目标物体

    ```c#
    public float forceMultiplier = 10;
    public override void OnActionReceived(ActionBuffers actionBuffers)
    {
        // 获取代理学习得到的两个参数值，为刚体添加相应的力来使代理移动追踪目标
        Vector3 controlSignal = Vector3.zero;
        controlSignal.x = actionBuffers.ContinuousActions[0];
        controlSignal.z = actionBuffers.ContinuousActions[1];
        rBody.AddForce(controlSignal * forceMultiplier);

        // 判断代理是否成功追踪目标
        float distanceToTarget = Vector3.Distance(this.transform.localPosition, Target.localPosition);

        // 成功追踪则奖励并开始下一次训练
        if (distanceToTarget < 1.42f)
        {
            SetReward(1.0f);
            EndEpisode();
        }

        // 从平台掉落则重新训练
        else if (this.transform.localPosition.y < 0)
        {
            EndEpisode();
        }
    }
    ```

  - Heuristic

    测试环境

    将 Behavior Parameters 组件的 Behavior Type 属性设置成 Heuristic，重新 Heuristic 方法然后我们可以将键盘输入的值传递给动作参数，以此控制代理 x，z 坐标，从而手动测试我们的场景

    ```c#
    public override void Heuristic(in ActionBuffers actionsOut)
    {
        var continuousActionsOut = actionsOut.ContinuousActions;
        continuousActionsOut[0] = Input.GetAxis("Horizontal");
        continuousActionsOut[1] = Input.GetAxis("Vertical");
    }
    ```

  - 训练环境

    参数设置

    Behavior Name：代理名称

    Space Size：观察值的数量，该案例中需要目标物体、代理的坐标位置计 6 个值，加上代理的 x，z 方向的速度

    Stacked Vectors：观察值包的数量，该案例中将 8 个参数以 1 个包的形式收集数据

    Continuous Actions：连续型的参数值，该案例中的 x，z 方向坐标两个值

    Model：训练好的模型数据

    Inference Device：处理驱动类型

    Max Step：训练一次发生模拟步骤，设置 0 时不限制，设置 300 时为经过 300 个模拟步骤后重新训练

    在项目中创建 Train 文件夹存放训练数据，在该文件夹下创建 RollerConfig.yaml 文件，添加以下超参数

    注意第二行训练数据的名称需要和 Behavior Name 的一致

    ```
    behaviors:
      Roller:
        trainer_type: ppo
        hyperparameters:
          batch_size: 10
          buffer_size: 100
          learning_rate: 3.0e-4
          beta: 5.0e-4
          epsilon: 0.2
          lambd: 0.99
          num_epoch: 3
          learning_rate_schedule: linear
        network_settings:
          normalize: false
          hidden_units: 128
          num_layers: 2
        reward_signals:
          extrinsic:
            gamma: 0.99
            strength: 1.0
        max_steps: 500000
        time_horizon: 64
        summary_freq: 10000
    ```

    win + r 打开命令窗口打开 unity_mlagents 环境，并切换到 Trian 文件夹的路径，使用 mlagents-learn RollerConfig.yaml 命令，当提示按下 unity 的运行按钮后，回到 unity 开始运行游戏，此时 MLAgents 就开始训练模型了，生成的模型数据将会被存放在同文件夹下的 result 文件中。

# 渲染管线（Render Pipeline）

## 学习新知识点的第一步就是了解他的定义，首先渲染管线是什么？

渲染管线也就渲染流水线，他的工作是把场景中的内容数据通过一系列操作显示在屏幕上。

这一系列操作主要包括剔除、渲染、后期处理。

## Unity 提供了哪些渲染管线？

### 内置渲染管线（Built-in Render Pipeline）

### 通用渲染管线（Universal Render Pipeline）

### 高清渲染管线（High Definition Render Pipiline）

### 自编程渲染管线（Custom Render Pipeline）
