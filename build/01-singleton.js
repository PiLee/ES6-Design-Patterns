'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ES5 实现单例模式

/*
var Singleton = function(name){
    this.name=name;
    this.instance=null;
}
Singleton.prototype.getName=function(){
    console.log(this.name);
}
Singleton.getInstance=function(name){
    if(!this.instance){
        this.instance=new Singleton(name);
    }
    return this.instance;
}

console.log(Singleton);
var a=Singleton.getInstance('PiLee');
var b=Singleton.getInstance('Wei');
a.getName();	//PiLee
b.getName();	//PiLee
console.log(a===b); //true
*/

// ES6 实现单例模式

var Singleton = function () {
	_createClass(Singleton, null, [{
		key: 'getInstance',

		// 静态方法
		value: function getInstance(name) {
			if (!this.instance) {
				this.instance = new Singleton(name);
			}
			return this.instance;
		}
	}]);

	function Singleton(name) {
		_classCallCheck(this, Singleton);

		this.name = name;
		this.instance = null;
	}

	_createClass(Singleton, [{
		key: 'getName',
		value: function getName() {
			console.log(this.name);
		}
	}]);

	return Singleton;
}();

console.log(Singleton);
var a = Singleton.getInstance('PiLee');
var b = Singleton.getInstance('Wei');
a.getName(); //PiLee
b.getName(); //PiLee
console.log(a === b); //true

// ES5 透明的单例模式
/*
var CreateDiv=(function(){
	var instance;
	var CreateDiv=function(html){
		if(instance){ 
			return instance;
		}
		this.html=html;
		this.init();
		return instance=this;
	}

	CreateDiv.prototype.init=function(){
		var div=document.createElement('div');
		div.innerHTML=this.html;
		document.body.appendChild(div);
	};
	return CreateDiv;
})();

var c1 = new CreateDiv('PiLee');
var c2 = new CreateDiv('Wei');
console.log(c1); // html > PiLee
console.log(c2); // html > PiLee
console.log(c1===c2); // true

*/

// ES6 透明的单例模式
var instance = null;

var CreateDiv = function () {
	_createClass(CreateDiv, null, [{
		key: 'instance',
		get: function get() {
			return instance;
		},
		set: function set(_instance) {
			instance = _instance;
		}
	}]);

	function CreateDiv(html) {
		_classCallCheck(this, CreateDiv);

		if (instance === null) {
			instance = this;
			this.html = html;
			this.init();
		}
		return CreateDiv.instance;
	}

	_createClass(CreateDiv, [{
		key: 'init',
		value: function init() {
			var div = document.createElement('div');
			div.innerHTML = this.html;
			document.body.appendChild(div);
		}
	}]);

	return CreateDiv;
}();

var c1 = new CreateDiv('PiLee');
var c2 = new CreateDiv('Wei');
console.log(c1); // html > PiLee
console.log(c2); // html > PiLee
console.log(c1 === c2); // true