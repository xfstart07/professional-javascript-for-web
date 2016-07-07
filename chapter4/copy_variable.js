// 复制变量

var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name);

// 传值

function setName(obj) {
  obj.name = "Nicholas";
  obj = new Object();
  obj.name = "Greg";
}
var person = new Object();
setName(person);
console.log(person.name);

// 可以把 ES 函数的参数想象成局部变量。

