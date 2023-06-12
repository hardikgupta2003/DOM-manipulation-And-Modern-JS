// adding 100 paragaraph
let t1=performance.now();
for(let i=1;i<=100;i++){
    newElement=document.createElement('p');
    newElement.textContent='this is para '+ i;
    document.body.appendChild(newElement);
}
let t2=performance.now();
console.log("this took : " + (t2-t1) + " ms") //this took : 0.8999999761581421 ms

//optimized a bit
let t3=performance.now();
let myDiv=document.createElement('div');
for(let i= 1;i<=100;i++){
    let element=document.createElement('p');
    element.textContent='this is para '+i;
    myDiv.appendChild(element);

}

document.body.appendChild(myDiv);

let t4=performance.now();
console.log("this took : " + (t4-t3) + " ms")
// this took : 0.2999999523162842 ms
