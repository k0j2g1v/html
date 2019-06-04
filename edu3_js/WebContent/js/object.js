/**
 * 자바스크립트 객체
 */

const log = console.log;

let array = [ '가', '하', '다', '바' ]

// array.length
// array[0]
// array.pop()

// 자바스크립트 객체 => 싱글톤
var student = {
	name : "홍길동",
	ko : 99,
	eng : 100,
	sum : function() {
		return this.ko + this.eng;
	},
	avg : function() {
		return this.sum() / 2;
	}
}
student.name
student["name 홍길동	"]

student.address = '서울'
delete student.address
/*
 * for(let i in student){ log(i) } for(let i in student ){ log(`${i} :
 * ${student[i]}`); } // 숫자 1 옆의 ` 주의
 */
var product = [ 
	{ name : '바나나',	price : 900}, 
	{ name : '체리',	price : 1900}, 
	{ name : '사과',	price : 1200}, 
	{ name : '메론',	price : 2000}
]

product[0].name
product[0].price

function print(data) {
	log(data.name, "  ", data.price)
}
print(product[1])
print(product[0])

//자바스크립트 객체 => 생성자 함수를 통한 객체 생성
function Student(name,ko,eng){
	this.name = name,
	this.ko = ko,
	this.eng = eng
}

Student.prototype.sum=function() {
	return this.ko + this.eng;
}
Student.prototype.avg=function() {
	return this.sum() / 2;
}

var s1 = new Student("홍길동",99,55)
var s2 = new Student("김길동",48,54)

var students = [
	new Student("홍길동",99,55),
	new Student("김길동",88,45),
	new Student("최길동",79,85),
	new Student("강길동",89,95),
	new Student("박길동",85,84)
]
log('평균 list')
for(let data of students){
	log(data.avg())
}

s2.toString = function(){
	return this.name+" : "+this.avg();	
}







