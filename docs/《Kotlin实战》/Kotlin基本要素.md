# Kotlin基本要素

## 第一个Kotlin程序

```kotlin
fun main(args: Array<String>) {//以fun关键字定义函数体
    println("Hello World")//省略了分号
    println("较大的是："+max(2,1))
    println("较大的是："+max2(4,3))
}
fun max(a:Int,b:Int): Int{//先写参数名，再写参数类型
    return if(a>b) a else b//在kotlin中，if是表达式，这里类似java中的三元运算符
}
//另一种写法：
fun max2(a:Int,b:Int):Int = if (a>b) a else b
//这里max和max2的:Int可以省略，编译器会帮你分析表达式体函数，并把它的类型作为函数返回类型
```

## 变量

关键字

- `val`：不可变引用
- `var` 可变引用

```kotlin
    val a = 3//编译器会把int类型作为变量a的类型
    var b = "gulugulu"//b的类型是String
    var c:Char
    c = 'x'
```

## 字符串模板

可用`$`或`${}`来注入到字符串中

```kotlin
fun main(args: Array<String>) {
    val name  = "Kotlin"
    var a = 2
    var b = 3
    println("Hello $name")
    println("Hello ${if(a>b) "a大于b" else "a小于b"}")
    println("Hello ${if(a>b) a else b}")//甚至可以注入变量，这也太方便了
}
//输出
Hello Kotlin
Hello a小于b
Hello 3
```

## 类和属性

声明一个类

```kotlin
class Person(
        //当声明了属性之后，就生成了对应的访问器
        val name: String,//只读属性，所有只有getter方法
        var isMarried: Boolean//可写属性，有getter和setter方法
)
//简写:
//class Person(val name: String, var isMarried: Boolean)
```

使用

```kotlin
fun main(args: Array<String>) {
    val p = Person("令狐冲",false)
    println("isMarried的值是：${p.isMarried}")
    p.isMarried = true//因为是isMarried是可写属性的，所以可用直接更改它的值
    println("isMarried的值是：${p.isMarried}")
}
//输出
isMarried的值是：false
isMarried的值是：true
```

可以发现，只要简单的定义了类，编译器就会帮助我们生成相应的getter和setter以及构造方法，这相比于java真是大大的方便啊

## when

在kotlin里，when可以有多种用法

第一种用法，相当于java中的switch语句

```java
fun main(args: Array<String>) {
    println(getStatus(1))
}
fun getStatus(num: Int) = when(num){
    1 -> "优秀"
    2 -> "棒"
    3 -> "稀巴烂"
    else -> "未知"
}
//输出
优秀
```

第二种用法。。emmm改天写

## 一些关键字

关键字 | 说明
-- | --
`is` | 用is来检查一个变量是否是某种类型，当检查过之后，后面就可以把它当作你检查过的类型来使用 
`as` | 表示特定类型的显示转换 