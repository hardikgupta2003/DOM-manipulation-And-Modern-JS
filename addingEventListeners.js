
// adding event Listeners with basic call back function
document.addEventListener('click',function(){
    console.log(' i have clicked on the screen');
});

// adding event listeners where we can style the element

let content= document.querySelector('.classDom');
content.addEventListener('click',function(){
    content.style.background='green';
});
