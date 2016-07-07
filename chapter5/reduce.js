// ES5 新增两个缩小数组的方法: reduce() 和 reduceRight()
// 迭代数组的所有项，然后构建一个最终返回的值

var values = [1,2,3,4,5];
var sum = values.reduce(function (prev, cur, index, array) {
	return prev + cur;
});

console.log(sum);