const todoItemTemplate = document.getElementById('todo-item');

const newItemInput = document.getElementById('new-item-text');
const todoList = document.getElementById('todo-list');


let itemIdCounter = 0;

const save = (items) => {
 localStorage.setItem('todoItems', JSON.stringify(items));
};

const createTodoElem = (text) => {
 const newItem = todoItemTemplate.content.cloneNode(true);


 newItem.querySelector('#todo-item-text').innerText = text;
 const trashIcon = newItem.querySelector('img');
 const id = 'item_' + itemIdCounter;
 itemIdCounter += 1;
 newItem.querySelector('.row').id = id;
 todoList.appendChild(newItem);

 trashIcon.addEventListener('click', () => {
  const item = document.getElementById(id);
  item.remove();
  localStorage.removeItem('todoItems');
 });
};

const itemsString = localStorage.getItem('todoItems') || '';
let items = [];
if (itemsString) {
 items = JSON.parse(itemsString);
}
if (items.length) {
 items.forEach(item => {
  createTodoElem(item.text);
 });
}

document.getElementById('new-item-btn')
 .addEventListener('click', () => {
  const text = newItemInput.value;
  if (!text) {
   return;
  }
  
  items.push({ text });
  save(items);
  createTodoElem(text);
  newItemInput.value = '';

  document.getElementById('date-n-time').innerText = Date();

 });
 document.getElementById("new-item-text")
  .addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
      
      event.preventDefault();
      
      document.getElementById("new-item-btn").click();
    }

    items.push({ text });
    save(items);
    createTodoElem(text);
    newItemInput.value = '';
    document.getElementById('date-n-time').innerHTML = Date();
  });

  document.getElementById('sear-tod')
  .addEventListener('click',() => {
       
    const vart = document.getElementsByClassName('gits')
   
    const search_text = document.getElementById('search-bar').value

    for(var i=0; i<vart.length; i++) {

      if(vart[i].innerText==search_text) {

      console.log(vart[i].innerText);

    }}
  })