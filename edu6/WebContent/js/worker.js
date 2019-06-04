
var i = 0;

function count() {
	i = i+1;
	postMessage(i); //i값을 back에서 for그라운드로 보냄
	setTimeout("count()",1000);
}

count();