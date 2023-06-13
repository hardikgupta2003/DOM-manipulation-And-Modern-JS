// Asynchronous code
let myPromise= new Promise(function(resolve,reject){
    setTimeout(function timeout(){
        console.log("i am inside promise");
    },5000);
    resolve('resolved');
    // reject(new Error("error is back "))
});

let myPromise1= new Promise(function(resolve,reject){
    setTimeout(function timeout(){
        console.log("i am inside promise1");
    },3000);
    resolve('resolved');
    // reject(new Error("error is back "))
});
console.log("this is the text before promise")


// with then function 
let waada1= new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('setTimeout1 started');
    },2000);
    resolve('resolved')
});

let output=waada1.then(()=>{
    let waada2=new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('setTimeout2 started');
        },3000);
        resolve("waada 2 resolved");
    })
    return waada2;
})
output.then((value)=> console.log(value));
