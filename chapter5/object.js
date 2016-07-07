// Object

var person = new Object();
person.name = "Nicholas";
person.age = 29;
console.log(person);

// 字面量语法

var person2 = {
	"name": "Nicholas",
	"age": 29,
	5: true
}
console.log(person2);

console.log(person["name"]);
console.log(person.name);

// 通常，除非必须使用变量来访问属性，否则我们建议使用点表示发。
