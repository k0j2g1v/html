
let name = "hong";
let num = 99;

let flag = true < 10;
let now = new Date();

const log = console.log;

function f1() {
    let name = 'f1-name'
    console.log(name);
    alert(name);    
}

const f2 = function(a){
    if(a == 'yes'){
    alert(a);
    }
}

var array = ['lee', true, 3];
log('---- array ----')
for(let item of array){
    log(item);
}

log('---- array2 ----')
for(let item in array){
    log(item);
};
log('---------------')
array.forEach(i => {
    log(i)   
}); 
log('---------------')

 let aa = 'aa';
 let bb = 'bb';
 {
     let aa = '{aa}';
     log(aa);
     log(bb);
 };

 let a = 1;
 {
     console.log(a);
    let a = 2;
 }