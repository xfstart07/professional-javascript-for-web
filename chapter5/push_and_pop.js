// ES 栈

// 栈

console.log("------------LIFO---------");

var colors = [];

var count = colors.push("red", "green");
console.log(count);

var item = colors.pop();
console.log(item);
console.log(colors.length);

// 队列
// shift() unshift()

console.log("------------FIFO---------");

colors.push("black");

item = colors.shift();
console.log(item);

colors.unshift("red", "green");
console.log(colors);

// reverse() sort()

var values = [1,2,3,4,5];
values.reverse();
console.log(values);

var values2 = [0,1,5,10,45];
values2.sort();
console.log(values2);