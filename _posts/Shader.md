---
menu: "游戏开发"
title: "Shader"
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Crying Cat
  picture: '/assets/blog/authors/head.jpg'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

- [渲染流水线](#渲染流水线)
  - [应用阶段](#应用阶段)
  - [几何阶段](#几何阶段)
  - [光栅化阶段](#光栅化阶段)
  - [unity 网格](#unity网格)
  - [Shader](#shader)
  - [ShaderLab](#shaderlab)
  - [Fixed function Shader](#fixed-function-shader)
  - [CG 入门](#cg入门)
  - [ShaderGraph](#shadergraph)
  - [OpenGL](#opengl)

# 渲染流水线

## 应用阶段

1. 顶点着色器
   1. 设置渲染状态
   2. 进行顶点坐标的变换，将空间坐标转换为齐次裁剪坐标，也就是归一化
   3. 顶点光照、输出纹理坐标
2. 曲面细分着色器
3. 剔除
   1.
4. 映射

## 几何阶段

1. 三角形设置
2. 三角形遍历
3. 片元着色器
4. 逐片元操作
   1. 深度测试
   2. 模板测试

## 光栅化阶段

## unity 网格

unity 中的模型，不管是 2D 还是 3D 物体，都是由一堆顶点和这些顶点组成的三角或者四边形面片来构成，通过顶点确定模型的边界，然后通过每三个顶点可以构成一个面片，一个完整的模型需要通过多个三角面片构成的，所以越精致的模型，它的面片数量就越多。

unity 中使用 Mesh Filter 组件专门处理网格的生成，而模型的外观，比如颜色，则由 Mesh Render 组件负责。Mesh Filter 组件在 Inspector 面板上只有一个参数 mesh，通过它传入一个网格并交给 Mesh Filter 去生成。在 Mesh 类中，定义了一些基本属性，重点是顶点数组（verties）、三角面片数组（triangles）、纹理坐标（uv）等，接下来，我们试着用代码生成一个矩形。

对于一个矩形，我们规定从矩形左下角顶点开始编号，顺时针分别是 0、1、2、3 四个顶点，绘制一个矩形其实需要由两个三角面片构成，直观上一个矩形具有四个顶点，但是真实需要六个顶点来绘制，此外，unity 是左手坐标系，所以顶点的绘制顺序需要顺时针才正面可见，逆时针的三角面是被抛弃的。

在下面的代码中，我们使用一个顶点数组负责确定 4 个顶点的位置坐标，而面片数组确定顶点的绘制顺序。所以要绘制这个矩形，面片数组可以定义为（0，1，2，2，3，0），每三个顶点绘制一个三角面片，所以面片数组的长度需要为 3 的倍数。

```c#
using Unityengine;

[RequireComponent(typeof(MeshFilter), typeof(MeshRender))]
public class MeshCreator : MonoBehaviour
{
    private MeshFilter meshFilter;
    private Mesh mesh;

    public void Create()
    {
        meshFilter = GetComponent<MeshFilter>();
        mesh = CreateMesh();
        meshFilter.mesh = mesh;
    }

    // 创建网格
    private Mesh CreateMesh()
    {
        Mesh m = new Mesh();

        // 定义顶点坐标
        Vector3[] verts = new Vector3[4]{
            new Vetcor3(0, 0, 0),
            new Vector3(0, 1, 0),
            new Vector3(1, 1, 0),
            new Vector3(1, 0, 0)
        };

        // 定义面片数组，确定顶点顺序
        int[] triangles = new int[]{
            0,1,2,
            2,3,0
        };

        m.vertices = verts;
        m.triangles = triangles;

        return m;
    }
}
```

将 MeshCreator 挂在到一个空物体上，调用 Create()方法就可以得到一个矩形，当然它是紫色的，由于还没有定义顶点颜色，接下来，给这个矩形面设置一个渐变颜色

在 CreateMesh()方法中继续对 Mesh 进行设置：

```c#
// 设置顶点颜色
Color[] colors = new Color[]{
    new Color(1,0,0,1),
    new Color(0,1,0,1),
    new Color(0,0,1,1),
    new Color(0,0,1,1)
};

m.colors = colors;
```

然后我们就得到了这样一个矩形面片。

![image-20210728181015856](C:\Users\24474\AppData\Roaming\Typora\typora-user-images\image-20210728181015856.png)

不过仅仅依靠定义网格顶点颜色无法实现这个颜色渐变的效果，需要编写相应的 Shader，新建一个 Shader，代码如下：

```Shader
// Upgrade NOTE: replaced 'mul(UNITY_MATRIX_MVP,*)' with 'UnityObjectToClipPos(*)'

Shader "HeatMap/HeatMap Easy"
{
    SubShader
    {
        Tags { "RenderType" = "Opaque" }
        LOD 200

        Pass
        {
            CGPROGRAM

            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct a2v
            {
                float4 pos : POSITION;
                fixed4 color : COLOR;
            };

            struct v2f
            {
                float4 vertex : SV_POSITION;
                fixed4 color : COLOR;
            };

            v2f vert(a2v i)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(i.pos);
                o.color = i.color;
                return o;
            }

            fixed4 frag(v2f i) : COLOR
            {
                return i.color;
            }

            ENDCG
        }
    }
}
```

关于 Shader 的编写还在学习中。。。暂时无法解释这个代码

Shader 准备好后，新建一个 Material，类型选中 HeatMap/HeatMap Easy（Shader 名），然后为 MeshCreator 脚本挂在的游戏物体添加材质，然后就有了上述的渐变颜色的面片效果。

## Shader

Shader 即着色器，负责声明图形硬件如何计算和输出图像，它与材质和贴图是一种包含关系，贴图作为材质生成的原料，而 shader 声明了原料的加工方法，材质是最终产品

渲染管线即渲染流水线，是显示芯片内部处理图形信号相互独立的并行处理单元。

目前主流的三种 Shader 高级编程语言有基于 OpenGL 的 GLSL、基于 DirectX 的 HLSL、CG，其中 CG 是 OpenGL、DirectX 的上层实现，unity 官方选择了 HLSL 和 CG 进行 Shader 的编写。

## ShaderLab

基本结构

```Shader
shader "ShaderName"{
	[Properties]
	SubShaders
	[FallBack]
}
```

unity 提供的几种默认 Shader

- Unlit

  不发光、不受任何光照影响

- VertexLit

  顶点光照

- Diffuse

  漫反射

- Normal mapped

  法线贴图、比漫反射更昂贵，增加一个或多个纹理（法线贴图）和几个着色器结构

- Specular

  高光、增加特殊的高光计算

- Normal Mapped Specular

  高光法线贴图，比高光更昂贵

- Parallax Normal mapped

  视差法线贴图，增加视差法线贴图计算

- Parallax Normal Mapped Specular

  视差高光法线贴图，增加视差法线贴图和镜面高光计算

unity 提供了三种 Shader 形式，Surface Shader、Vertex and fragment Shader 、Fixed function Shader

## Fixed function Shader

简单实例：

```Shader
Shader "Test"{
	properties{
		_Color("Main Color", color) = (1, 1, 1, 1)
		_Ambient("Ambient", color) = (0.3, 0.3, 0.3, 0.3)
		_Specular("Specular", color) = (1, 1, 1, 1)
		_Shininess("Shininess", range(0, 8)) = 4
		_Emission("Emission", color) = (1, 1, 1, 1)

		_MainTex("MainTex", 2d) = "MainTex"
		_SecondTex("SecondTex", 2d) = "SecondTex"

	}

	SubShader{
		pass{
			// 小括号()赋值固定值，中括号赋值变量值
			// color(1, 1, 1, 1)
			material{
				// 默认颜色
				diffuse[_Color]
				// 环境光
				ambient[_Ambient]
				// 高光
				specular[_Specular]
				// 高光强度
				shininess[_Shininess]
				// 自发光
				emission[_Emission]
			}
			// 开启光照
			lighting on
			// 开启独立镜面高光
			separatespecular on

			// 添加纹理贴图
			settexture[_MainTex]{
				// primary关键字代表之前渲染得到顶点光照数据，double表示两倍亮度，quad四倍来亮度
				combine texture * primary double
			}

			settexture[_SecondTex]{
				// previous关键字代表之前渲染得到的所有数据
				combine texture * Previous double
			}
		}
	}
}
```

## CG 入门

基本结构

```Shader
Shader "Test"{
	SubShader{
		pass{
			// CG代码开始
            CGPROGRAM
            //pragma关键字 + vertex/fragment + 方法名
            #pragma vertex vert
            #pragma fragment frag

			// 返回值类型 + 方法名 + (参数列表[])
			// in 输入， out 输出， inout输入输出
            void vert(in float2 objPos:POSITION, out float4 pos:POSITION){

            }

            void frag(inout float4 col:COLOR){

            }

            // CG代码结束
            ENDCG
		}
	}
}
```

## ShaderGraph

- 安装

## OpenGL
