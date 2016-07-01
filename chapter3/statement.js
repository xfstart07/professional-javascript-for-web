// if (condition) statement1 else statement2

var i = 25;

console.log(i);
if (i > 25) {
	console.log("Greater than 25.")
} else {
	console.log("Less than or equal to 25.")
}

console.log("------------if-end---------------");

i = 1;
do {
	i += 2;
	console.log(i);
} while(i < 10);

console.log("-----------do-while-------------");

// while(expression) statement

// for (initialization; expression; post-loop-expression) statement

// for (property in expression) statement
// 如何表示要迭代的对象的变量值为 null 或 undefined, for-in 语句会抛出错误。
// ES5 更正了这一行为；对这种情况不再抛出错误，而只是不执行循环体。
// 为了保证最大限度的兼容性，建议在使用for-in循环之前，先检测确认该对象的值不是 null 或 undefined .

// break 和 continue

// switch

switch (i) {
	case 5:
		console.log("5");
		break;
	case 8:
		console.log("8");
		break;
	case 10:
		console.log("10");
		break;
	default:
		console.log("Other");
}

// 特色：可以在 switch 语句中使用任何数据类型，无论是字符串，还是对象都没有问题。其次，每个
// case 的值不一定是常量，可以是变量，甚至是表达式。

switch ("hello world") {
	case "hello" + " world":
		console.log("Greeting was found.");
		break;
	case "goodbye":
		console.log("Closing was found.");
		break;
	default:
		console.log("Unexprcted message was found.");
}

var num = 25;
switch (true) {
	case num < 0:
		console.log("Less than 0.");
		break;
	case num >= 0 && num <= 10:
		console.log("Between 0 and 10.");
		break;
	case num > 10 && num <= 20:
		console.log("Between 10 and 20.");
		break;
	default:
		console.log("More than 20.");
}

