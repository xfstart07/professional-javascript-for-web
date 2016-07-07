// filter() 对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的新数组

var numbers = [1,2,3,4,5,6,3,2,1];

var everyResult = numbers.filter(function (item, index, array) {
  // console.log(" item = " + item);
  console.log(" index = " + index);
  // console.log("array = " + array);
  return (item > 2);
});
console.log(everyResult);