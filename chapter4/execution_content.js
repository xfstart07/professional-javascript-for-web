// 4.2  执行环境及作用域

// 全局执行环境是最外围的一个执行环境。根据 ES 实现所在的宿主环境不同，表示执行环境的对象也不一样。
// 在 Web 浏览器中，全局执行环境被认为是 window 对象。

// 每个函数都有自己的执行环境。当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。
// 而在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境。ES 程序中的执行流正是由这个方便的机制控制着。

var color = "blue";

function changeColor() {
  if (color === "blue") {
    color = "red";
  } else {
    color = "blue";
  }
}
changeColor();
console.log("color is now " + color);

// 没有块级作用域

if (true) {
  var color = "blue";
}
console.log(color); // "blue"

for (var i = 0; i <= 3; i++) {
  console.log(i);
}
console.log(i); // 4
