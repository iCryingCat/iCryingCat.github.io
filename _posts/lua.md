---
menu: "学艺"
title: "Lua"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Crying Cat
  picture: "/assets/blog/authors/head.jpg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

[TOC]

# Lua

## 数据类型

### nil

- 空类型
- 具有删除作用，对于全局变量和 table 中的变量，赋值 nil 等同于删除
- nil 做比较时应该加上双引号""

### boolean

- 布尔类型，true or false
- 只有 false、nil 是 false 值，其他均为 true，数字 0 也是 true

### number

- 唯一数值类型，双精度

### string

- ''或""括起的字符串类型
- [[]]括起为多行字符串
- #计算字符串长度
- 和数字运算时，lua 会尝试将其转化为数值
- .. 连接字符串

- 定义方式

  ```Lua
  1. 'str'
  2. "str"
  3. [[str]]
  ```

- 字符串进行算术运算时，Lua 会尝试将字符串转换成数字

- 使用..连接字符串

- 字符串长度

  ```lua
  1. #str
  2. string.len("str")
  ```

- 字符串截取

  ```lua
  string.sub(s, i [, j])
  ```

  - s：要截取的字符串。
  - i：截取开始位置。
  - j：截取结束位置，默认为 -1，最后一个字符。

- 字符串格式化

  ```Lua
  string1 = "Lua"
  string2 = "Tutorial"
  number1 = 10
  number2 = 20
  -- 基本字符串格式化
  print(string.format("基本格式化 %s %s",string1,string2))
  -- 日期格式化
  date = 2; month = 1; year = 2014
  print(string.format("日期格式化 %02d/%02d/%03d", date, month, year))
  -- 十进制格式化
  print(string.format("%.4f",1/3))
  string.format("%c", 83)                 -- 输出S
  string.format("%+d", 17.0)              -- 输出+17
  string.format("%05d", 17)               -- 输出00017
  string.format("%o", 17)                 -- 输出21
  string.format("%u", 3.14)               -- 输出3
  string.format("%x", 13)                 -- 输出d
  string.format("%X", 13)                 -- 输出D
  string.format("%e", 1000)               -- 输出1.000000e+03
  string.format("%E", 1000)               -- 输出1.000000E+03
  string.format("%6.3f", 13)              -- 输出13.000
  string.format("%q", "One\nTwo")         -- 输出"One\
                                          -- 　　Two"
  string.format("%s", "monkey")           -- 输出monkey
  string.format("%10s", "monkey")         -- 输出    monkey
  string.format("%5.3s", "monkey")        -- 输出  mon
  ```

### table

- 实际是一个关联数组，索引可以为数值或者字符串

  ```lua
  local tb = {}
  local tb = {'c', 'c++', 'c#'}
  tb['最好的语言'] = 'c#'
  ```

## 注释

- 单行注释：--
- 多行注释：--[[]]--

## 变量

- 三种变量：全局、局部、表中的域
- Lua 中的变量全是全局变量（语句块和函数中的变量如果没有显示声明 local 也是全局变量）
- 局部变量需要使用 local 显式声明
- 允许多变量赋值，等式左右数量不等，少于则忽略，多余则补 nil
- table 的索引使用[]或者.

## 循环

### for

```lua
for var=exp1,exp2,exp3 do
    <执行体>
end
```

### while

```lua
while(condition)
do
   statements
end
```

### repeat...until

```Lua
repeat
   statements
until( condition )
```

### if

```lua
if(布尔表达式)
then
   --[ 在布尔表达式为 true 时执行的语句 --]
end
```

```lua
if(布尔表达式)
then
   --[ 布尔表达式为 true 时执行该语句块 --]
else
   --[ 布尔表达式为 false 时执行该语句块 --]
end
```

```Lua
if( 布尔表达式 1)
then
   --[ 布尔表达式 1 为 true 时执行该语句块 --]
   if(布尔表达式 2)
   then
      --[ 布尔表达式 2 为 true 时执行该语句块 --]
   end
end
```

## 方法

```Lua
optional_function_scope function function_name( argument1, argument2, argument3..., argumentn)
    function_body
    return result_params_comma_separated
end
```

- Lua 中我们可以将函数作为参数传递给函数
- 接受多返回值
- 接受可变数目的参数，和 C 语言类似，在函数参数列表中使用三点**...** 表示函数有可变的参数
- **select('#', …)** 返回可变参数的长度。
- **select(n, …)** 用于返回参数列表中的第**n** 个参数。

## 运算符

```Lua
--不等于--
~=
--乘幂--
^
--与或非--
and
or
not
```

## 数组

- 定义

  ```lua
  array = {}
  ```

- Lua 索引值是以 1 为起始，但也可以指定 0 开始，还可以以负数为数组索引值

## 迭代器

```lua
for key,value in ipairs(array) do   print(key, value)end
```

- Lua 默认提供的迭代函数 ipairs。

## 面向对象

# XLua 框架

## 导入框架

github：https://github.com/Tencent/xLua

## 热更新流程

### 生成 MD5 码

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Security.Cryptography;

namespace SunFrameWork
{
    /// <summary>
    /// 生成MD5码
    /// </summary>
    public class MD5Helper
    {
        public static string Encode(string file)
        {
            try
            {
                using (FileStream stream = new FileStream(file, FileMode.Open))
                {
                    MD5 md5 = new MD5CryptoServiceProvider();
                    byte[] buffer = md5.ComputeHash(stream);
                    StringBuilder sb = new StringBuilder();
                    for(int i = 0; i < buffer.Length; i++)
                    {
                        // X2转化为16进制
                        sb.Append(buffer[i].ToString("X2"));
                    }
                    return sb.ToString();
                }
            }
            catch (Exception ex)
            {
                Bug.Throw(ex.Message);
            }
            return null;
        }
    }
}
```

## Lua 有什么优缺点？
