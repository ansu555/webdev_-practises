const user={
    username:"anik",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`); // .this for curent contest     
        console.log(this);
           
    }
}

// user.welcomeMessage()
// user.username="das"
// user.welcomeMessage()

// console.log(this);

function aurbolo(){
    // let username="anik"
    console.log(this);
}
aurbolo()

// const aur=function(){
//     let userName="anik"
//     console.log(this.userName);
    
// }

const chai=()=>{

    let userName="anik"
    console.log();
    
}