

//default
function add(a,b=10){
    console.log(a+b);
}
add(10,30);

const arr = [40,50,60,70,80,90,100];
function add(){
    return Math.max(...arr);
}
console.log(add());