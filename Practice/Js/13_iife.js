// immediately invoked function expression(IIFE)



(function chai(){
    console.log(`DB connected`);
})(); // sometimes polution in global scope creates problem. so for remove that polution we use IIFE

((name)=>{console.log(`DB.connected ${name}`)})('anik');
