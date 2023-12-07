const num = prompt("input a number");
console.log(num)

if(num === null){
    console.log("please input a value");
}
else if(num === ''){
    console.log("can not calculate null");
}
else if(num){
    const total = parseFloat(num) + 10;
    console.log(total)
}

