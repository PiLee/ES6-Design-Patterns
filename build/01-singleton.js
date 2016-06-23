'use strict';

/* ES5 */
var Singleton = function Singleton(name) {
	this.name = name;
	this.instance = null;
};
Singleton.prototype.getName = function () {
	console.log(this.name);
};
Singleton.getInstance = function (name) {
	if (!this.instance) {
		this.instance = new Singleton(name);
	}
	return this.instance;
};

var a = Singleton.getInstance('PiLee');
var b = Singleton.getInstance('Wei');

a.getName(); //PiLee
console.log(a === b); //true