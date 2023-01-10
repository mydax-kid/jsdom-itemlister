//ACCESSING THE DOM ELEMENTS 
let button= document.querySelector('.add');
let list= document.querySelector('.items');
let cancelBtn= document.querySelectorAll('.fas');
let inputValue= document.querySelector('.input');
let search= document.getElementById('search');
let clear= document.querySelector('.clear');
let listItems= document.querySelectorAll('.item-list');


//ADDING EVENT LISTENERS
button.addEventListener('click', addItem);
cancelBtn.forEach(x =>  x.addEventListener('click', removeItem));

search.addEventListener('keyup', searchItems);
clear.addEventListener('click', searchItems);

 
//ADD ITEM
function addItem(e) {
  e.preventDefault();
  
  if (inputValue.value) {
      let li= document.createElement('li');
      let cancel= document.createElement('i');

      li.className= 'item-list';
      cancel.className= "fas fa-times-circle";
      cancel.addEventListener('click', removeItem);

      li.appendChild(document.createTextNode(inputValue.value));
      li.appendChild(cancel);
    
      list.appendChild(li);
      inputValue.value= '';
  }
  else {
    alert('Please add item first!')
  }
}


//REMOVE ITEM
function removeItem(e){
  console.log(cancelBtn)
  
 if(e.target.classList.contains('fas')){
  let x= e.target.parentElement;
  x.remove()
 }
}

//SEARCH ITEMS
function searchItems(e){
  
  if(e.target.id != 'clear'){
    
    let input= e.target.value.toLowerCase();
    listItems.forEach((item) => {
      if(item.textContent.toLowerCase().indexOf(input) != -1){
         item.style.display= 'block';
       }
      else{
        item.style.display= 'none';
      }
    })
  }
  else{
    search.value= ''
    listItems.forEach((item) => {
       item.style.display= 'block';
       })
  }
}












/*
//ex1
function removeItem(e){
  if(e.target.classList.contains('fas')){
    let li= e.target.parentElement
    list.removeChild(li)
  }
}

//ex2
function removePanel(e){
  
  if( e.target.classList[0] === 'bttn-trash'){
    const x= e.target.parentElement;
    x.remove();
  }

*/