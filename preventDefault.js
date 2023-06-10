let link=document.querySelectorAll('a');
let thirdLink=link[2];

thirdLink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('prevented default action')
});
