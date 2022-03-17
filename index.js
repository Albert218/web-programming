const todoInput=document.querySelector('.todo-input')

const todoButton=document.querySelector('.todo_btn')

const todoList=document.querySelector('.todo_list')

const filterBtn=document.querySelector('.filter_todo')

todoInput.addEventListener('click',addToDo)

todoList.addEventListener('click',compDelete)

filterBtn.addEventListener('click',filterTodo)

function addToDo(){
  console.log("Hello Tina")
}

//creating a container
const todoDiv=document.createElement('div')
todoDiv.classList.add('to do')

const newTodo=document.createElement('li')
newTodo.innerText="Hey"
