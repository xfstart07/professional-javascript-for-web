// RegExp 正则

// 元字符 ( [ { \ ^ $ | ) ? * + . ] }
// g 表示全局（global）模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止
// i 表示不区分大小写(case-insensitive) 模式
// m 表示多行(multiline)模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项

var pattern1 = /[bc]at/i;
var pattern2 = new RegExp("[bc]at", "i");

// 由于 RegExp 构造函数的模式参数是字符串，所以某些情况下要对字符进行双重转义

console.log(pattern1.test("catastrophe"));

// RegExp 实例属性

// 布尔值，表示是否设置了 g 标志
console.log(pattern1.global);
// 布尔值，表示是否设置了 i 标志
console.log(pattern1.ignoreCase);
// 布尔值，表示是否设置了 m 标志
console.log(pattern1.multiline);
// 整数，表示开始搜索下一个匹配项的字符位置，从 0 算起
console.log(pattern1.lastIndex);
// 正则表达式的字符串表示
console.log(pattern1.source);

// RegExp 实例方法

// exec() 

var text = "mom and dad and baby";
var pattern = /mom( and dad( and body)?)? /gi;

var matches = pattern.exec(text);
console.log(matches.index);
console.log(matches.input);
