// document Fragmentation is used to minimize the reflows and repaints
let fragment=document.createDocumentFragment();
for(let i=1;i<=100;i++){
    newElement=document.createElement('p');
    newElement.textContent='this is para '+ i;
    fragment.appendChild(newElement);
}
document.body.appendChild(fragment)
// one single reflow and one repaint
