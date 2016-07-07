// 构造函数模式

// 构造函数始终都应该以一个大写字母开头，而非构造函数则应该以小写字母开头
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name);
  }
}

// 当作构造函数使用
var person1 = new Person("Nicholas", 29, "Software Enginner");
var person2 = new Person("Greg", 27, "Doctor");

person1.sayName();
person2.sayName();

// 以这种方式定义的构造函数是定义在 Global 对象（在浏览器中是 window 对象）中的。

// 在浏览器中，当作普通函数调用
// Person("JJ", 25, "Singer");
// window.sayName(); // JJ

// 在另一个对象的作用域中调用
var oo = new Object();
Person.call(oo, "Kristen", 21, "Nurse");
oo.sayName();
