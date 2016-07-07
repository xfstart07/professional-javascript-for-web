// 操作方法

// concat 复制当前数组并返回副本

var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors);
console.log(colors2);

// slice 基于当前数组中的一或多个项创建一个新数组

var colors3 = colors2.slice(1);
var colors4 = colors2.slice(1,4);
console.log(colors3);
console.log(colors4);

// splice 始终都会返回一个数组
// 删除 splice(0,2) 删除数组中的前两项
// 插入 splice(2,0, "red", "green") 从当前数组的位置2开始插入字符串 "red" 和 "green"
// 替换 splice(2,1, "red", "green") 会删除当前数组位置2的项，然后再从位置2开始插入字符串

console.log("--------------splice-----------");

var removed = colors.splice(0,1);
console.log(colors);
console.log(removed);

removed = colors.splice(1,0, "yellow", "orange");
console.log(colors);
console.log(removed);

removed = colors.splice(1,1, "red", "purple");
console.log(colors);
console.log(removed);

// indexOf, lastIndexOf 都接收两个参数：要查找的项和（可选的）表示查找起点位置的索引
// indexOf() 方法从数组的开头（位置0）开始向后查找
// lastIndexOf() 方法则从数组的末尾开始向后查找
// 两个方法都返回要查找的项在数组中的位置
// 要求查找的项必须严格相等(就像是用 ＝＝＝ 一样)
console.log("--------------indexOf-----------");

var numbers = [1,2,3,4,5,4,3,2,1];
console.log(numbers.indexOf(4)); 
console.log(numbers.lastIndexOf(4));

