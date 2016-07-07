// 函数

// function function_name(argument) {
// 	// body...
// }

function sum(num1, num2) {
  return num1 + num2;
  console.log("Hello world"); // 永远不会执行
}
console.log(sum(1,2));

// return 语句也可以不带有任何返回值。这种情况下，函数在停止执行后将返回 undefined 值。
// 这种用法一般用在需要提前停止函数执行而不需要返回值的情况下。
// 推荐的做法是要么让函数始终都返回一个值，要么永远都不要返回值。否则，如果函数有时候返回值，有时候又不返回值，
// 会给调试代码带来不便。

// arguments 行为
// 关于 arguments 的行为，还有一点比较有意思。那就是它的值永远与对应命名参数的值保持同步。例如：

function doAdd(num1, num2) {
  arguments[1] = 10;
  console.log(arguments[0] + num2);
}
doAdd(1,2);

// 每次执行这个 doAdd() 函数都会重写第二个参数，将第二个参数的值修改为 10，因为 arguments 对象中的值会自动反映到对应的命名参数，所以
// 修改 arguments[1], 也就修改了 num2,结果它们的值都会变成 10. 不过，这并不是说读取这两个值会访问相同的内存空间；它们的内存空间是独立的，
// 但它们的值会同步。但这种影响是单向的：修改命名参数不会改变 arguments 中对应的值。
// 另外还要记住，如果只传入了一个参数，那么为 arguments[1] 设置的值不会反应到命名参数中。这是因为 arguments 对象的长度是由传入的参数个数决定的，
// 不是由定义函数时的命名参数的个数决定的。

// 严格模式对如何使用 arguments 对象做出了一些限制。首先，像前面例子中那样的赋值会变得无效。

// ES 中的所有参数传递的都是值，不可能通过引用传递参数。

// 没有重载

function addSomeNumber(num) {
  return num + 100;
}
function addSomeNumber(num) {
  return num + 200
}
console.log(addSomeNumber(100)); // 300
// 后定义的函数覆盖了先定义的函数