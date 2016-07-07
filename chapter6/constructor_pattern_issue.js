// 构造函数的问题
// 每个方法都要在每个实例上重新创建一遍。

// function Person(name, age, job) {
// 	this.name = name;
// 	this.age = age;
// 	this.job = job;
// 	this.sayName = function() {
// 		console.log(this.name);
// 	}
// }
// var person1 = new Person("Nicholas", 29, "Software Enginner");
// var person2 = new Person("Greg", 27, "Doctor");
// console.log(person1.sayName == person2.sayName); // false

// 在例子中，person1 和 person2 都有一个名为 sayName() 的方法，但那两个方法不是同一个 Function 的实例。
// 以这种方式创建函数，会导致不同的作用域链和标识符解析

// 解决方案

function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}
function sayName() {
	console.log(this.name);
}
var person1 = new Person("Nicholas", 29, "Software Enginner");
var person2 = new Person("Greg", 27, "Doctor");
console.log(person1.sayName == person2.sayName); // true
// 因此 person1 和 person2 对象就共享了在全局作用域中定义的同一个 sayName() 函数

// 但问题又来了

// 在全局作用域中定义的函数实际上只能被某个对象调用，这让全局作用域有点名不副实

// 更让人无法接受的是：如果对象需要定义很多方法，那么就要定义很多个全局函数，于是我们这个自定义的引用类型就丝毫没有封装性可言。

// 答案：使用原型模式来解决
