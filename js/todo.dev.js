"use strict";

var todoItemTemplate = document.getElementById('todo-item');
var newItemInput = document.getElementById('new-item-text');
var todoList = document.getElementById('todo-list');
var itemIdCounter = 0;

var save = function save(items) {
  localStorage.setItem('todoItems', JSON.stringify(items));
};

var createTodoElem = function createTodoElem(text) {
  var newItem = todoItemTemplate.content.cloneNode(true);
  newItem.querySelector('#todo-item-text').innerText = text;
  var trashIcon = newItem.querySelector('img');
  var id = 'item_' + itemIdCounter;
  itemIdCounter += 1;
  newItem.querySelector('.row').id = id;
  todoList.appendChild(newItem);
  trashIcon.addEventListener('click', function () {
    var item = document.getElementById(id);
    item.remove();
  });
};

var itemsString = localStorage.getItem('todoItems') || '';
var items = [];

if (itemsString) {
  items = JSON.parse(itemsString);
}

if (items.length) {
  items.forEach(function (item) {
    createTodoElem(item.text);
  });
}

document.getElementById('new-item-btn').addEventListener('click', function () {
  var text = newItemInput.value;

  if (!text) {
    return;
  }

  items.push({
    text: text
  });
  save(items);
  createTodoElem(text);
  newItemInput.value = '';
});