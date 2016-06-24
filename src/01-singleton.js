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