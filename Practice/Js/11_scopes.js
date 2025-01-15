let a=10
const b=20
var c=30

if(true){
    let a=10
const b=20
//var c=30 // dont use var
}

console.log(a);
console.log(b);
//console.log(c); // var


function one(){
    const username = "hitesh"

    function two(){
        const website ="youtube"
     console.log(username);
     
    }
   //console.log(website);
    two()
}

one()


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


addOne(5) // in That case we can use function before declaration
function addOne(value){ // method 1 to create a function
    return value+1
}

creactFunction(5) // in that case, we can't use function before declaration
const creactFunction = function(num) // method 2 to create a function
{
    return num+2
}
