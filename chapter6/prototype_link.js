// 原型链

function SuperType() {
	this.property = true;
}

SuperType.prototype.getSuperValue = function() {
	return this.property;
}

function SubType() {
	this.subproerty = false;
}

// 继承 SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
	return this.subproerty;
}

var instance = new SubType();
console.log(instance.getSuperValue());

// 确定原型和实例的关系

console.log(instance instanceof Object);
console.log(instance instanceof SuperType);
console.log(instance instanceof SubType);

// 重新超类型中的方法
console.log("------------重写----------");

SubType.prototype.getSuperValue = function() {
	return false;
}

console.log(instance.getSuperValue());
