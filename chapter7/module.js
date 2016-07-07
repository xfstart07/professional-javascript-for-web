// 模块模式

// 模块模式(module pattern) 则是为单例创建私有变量喝特权方法。

// JavaScript 是以对象字面量的方式来创建单例对象

// var singleton = {
//   name: value,
//   method: function() {
//     // something
//   }
// };

var singleton = function() {
  var privateVariable = 10;
  function privateFunction() {
    return false;
  }
  var object = new Object();

  object.publicProperty = true;
  object.publicMethod = function() {
    privateVariable++;
    return privateFunction();
  };

  return object;
}();
