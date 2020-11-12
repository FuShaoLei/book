# Java的基本程序结构设计

## 第一个程序
```java
public class Hello {//public访问修饰符 class表示这是一个类，Hello则是这个类的类名
	public static void main(String[] args) {//main方法是程序的入口
		System.out.println("Hello World");//执行的语句
	}
}
```

## 基本数据类型


基本类型 | 位数 | 字节 | 默认值 |对应的包装器类
--|--|--|--|--
`int` | 32 |4 | 0 | `Integer`
`short`|16|2|0 | `Short`
`long`|64 |8 |0L | `Long`
`byte`| 8 |1 |0 | `Byte`
`char`|16|2|'u0000' | `Character`
`float` | 32 |4 |0f | `Float`
`double`|64 |8 |0d|`Double`
`boolean`|1 | |false |`Boolean`

> 注意:
1. Java 里使用`long`类型的数据一定要在数值后面加上**L**，否则将作为整型解析
2. char a = 'h'char :单引号，String a = "hello" ：双引号