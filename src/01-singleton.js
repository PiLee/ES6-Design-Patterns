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
class Singleton{
	// 静态方法
	static getInstance(name){
		if(!this.instance){
			this.instance = new Singleton(name);
		}
		return this.instance;
	}
	constructor(name){
		this.name=name;
		this.instance=null;
	}
	getName(){
		console.log(this.name);
	}
}

console.log(Singleton);
var a=Singleton.getInstance('PiLee');
var b=Singleton.getInstance('Wei');
a.getName();	//PiLee
b.getName();	//PiLee
console.log(a===b); //true


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
let instance=null;
class CreateDiv{
	static get instance() {
	  return instance;
	}
	static set instance(_instance) {
	  instance = _instance;
	}
	constructor(html){
		 if (instance === null) {
			instance = this;
			this.html=html;
			this.init();
		 }
		return CreateDiv.instance;
	}
	init(){
		let div=document.createElement('div');
		div.innerHTML=this.html;
		document.body.appendChild(div);
	}
}

var c1 = new CreateDiv('PiLee');
var c2 = new CreateDiv('Wei');
console.log(c1); // html > PiLee
console.log(c2); // html > PiLee
console.log(c1===c2); // true