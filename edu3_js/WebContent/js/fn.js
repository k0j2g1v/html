/**
 * funtion test
 */

const log = console.log;

function f1(){
	alert("hello javascript");
	
}

const f2 = () => alert("hello javacript f2");

function sum(a,b,c){
	if(!c) c=0;
	return a+b+c;
}

function sumAll(){
	var sum = 0;
	for(var i = 0; arguments.length > i ;i++){
		sum += arguments[i]		
	}	
	return sum;
}

function small(a,b){
	if(a>b)return b;
	else return a;
}

const min = (a,b) => a > b ? b : a;

function callback(){
	log('callback')
}

function callTenTimes(fn){
	for(let i = 0; i < 3 ;i++){
		try{
		fn();
		}catch(e){
			log('함수를 넘겨주세요...')
		}
	}
}

//callTenTimes(callback);
//callTenTimes(function(){alert('hello')});
//let f3;
//callTenTimes(f3 = function(){alert('hello')});
//callTenTimes();

//var intervalID = setInterval(callback,1000);
//clearInterval(intervalID)
/*
var id2 = setInterval(function (){log(new Date())} ,1000)
setTimeout(function (){
	clearInterval(id2)
	//location.href="https://www.naver.com";
},5000);
*/
var f4 = function a1(){
	var data = 0;
	function i1(){
		return ++data;
	}
	return i1;
}
f4()();

var f5 = function a2(){
	var data = il
	function i1(){
		return ++data;
	}
	return i1
}();


















