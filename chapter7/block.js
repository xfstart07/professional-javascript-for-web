// 块级作用域

// (function(){
  // 这里是块级作用域
// })();

(function() {
  var now = new Date();
  if (now.getMonth() == 0 && now.getDate() == 1) {
    console.log("Happy new year");
  }
  console.log("module");
})();

// 这种做法可以减少闭包占用的内存问题，因为没有指向匿名函数的引用。
