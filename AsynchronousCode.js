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
