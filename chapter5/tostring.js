// 转换方法

// toLocaleString()
// toString()
// valueOf()

// toLocaleString() 方法经常也会返回与 toString() 和 value() 方法相同的值，但也不总是如此。
// 不同在于为了取得每一项的值，调用的是每一项的 toLocaleString() 方法。

var person1 = {
	toLocaleString: function () {
		return "Nikolaos";
	},
	toString: function () {
		return "Nicholas";
	}
};

var person2 = {
	toLocaleString: function () {
		return "Grigorios";
	},
	toString: function () {
		return "Greg";
	}
};

var people = [person1, person2];
console.log(people);
console.log(people.toString());
console.log(people.toLocaleString());