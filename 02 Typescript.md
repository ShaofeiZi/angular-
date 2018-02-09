# Typescript

Typescript 作为Angular的推荐开发语言，在学习Angular之前我们先学习下他。
## 为啥有TS
 TS是为了解决JS的很多历史遗留问题出现的，比如类型、命名空间等，毕竟是大神10天就赶出来的东西。
 
 TS作为JS的超集100%兼容JS并且可以使用很多新的JS语法糖，还可以编译为旧版本的JS。作为微软推出，google推荐的语言，学习下准没错。

## 基本语法
const & let
- 这个是ES6的 不过太长用了，拿出来说一下
- var 虽然可以用 但是 能不用就别用了。
```
const cannotChange = 9; // 只要去更改值，就会报错
let canChange = [{'a': '1'}, {'b': '2'}]; // 在不改变声明的类型的情況下，可以改变这个参数
``` 
# 类型（typing）
JavaScript是不区别类型的，var一个出来之后随便改，刚开始可能挺爽的，人多之后就GG。
示例
```typescript
//Number 
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//Stirng
let person: string = "Mike"; //可以用 ""
let age: number = 37;
let sentence: string = `Oh, ${person} is ${age} years old.`; //也可以用 `${}`
//上面等于 "Oh, " + person + " is " + age + " years old."

//Array
let list: number[] = [1, 2, 3];

//Tuple
let x: [string, number]; // Array中包含不同类型的参数
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error
x[3] = true // Error 之后的类型只能是刚开始指定的 string 或 number
```
## 类型注释(Type annotations)
Javascript
```javascript
function greeter(person) {
    return "Hello, " + person;
}
```
不管person是啥能隐式转换就转 
Typescript
```typescript
function greeter(person: string) {
    return "Hello, " + person;
}
```
直接指定类型 只能用String ，函数满天飞的时候就知道这个函数需要的参数是什么类型的了，Debug也容易多了。
## 接口类型 Interfaces
Interfaces是从后端语言copy过来的概念 写个C# java之类的应该会很熟悉 来个简单示例吧
```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Tiger", lastName: "Liu" };

console.log(greeter(user));
```
## 类 Classes
> ECMAScript 2015 中引入的 JavaScript 类(classes) 实质上是 JavaScript 现有的基于原型的继承的语法糖。 类语法不是向JavaScript引入一个新的面向对象的继承模型。JavaScript类提供了一个更简单和更清晰的语法来创建对象并处理继承。 -MDN

typescript中的类比JavaScript中的类增加了类型 ，来个示例
```typescript
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}
// 接口类型
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = new Student("Jane", "M.", "User");

console.log(greeter(user));
```
## 静态属性
类成员的静态属性我们可以直接调用，他存在于类本身 而不是类的实例上。调用方式为如下面的count的调用方式：calc.count。而不能用this.count在类的内部使用。

```typescript
class calc{
  static count=10;
  add(data1:number):number{
    var sum=calc.count+data1;
    return sum;
  }
}
var test=new calc();
document.write(test.add(20));
```
## 继承
有类别 就有继承
```typescript
class Woman extends Human {
    static gender: string = 'female';
}
```
Interface 约束class
```typescript
interface Shape {
    area(): number;
}

class Circle implements Shape {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    area(): number {
        return this.radius * this.radius * 3.1415;
    }
}
```
interface 继承interface 
```typescript
interface Shape {
    area(): number;
}

interface Color {
    RGB: string;
}

interface Thing extends Color, Shape {
}
```