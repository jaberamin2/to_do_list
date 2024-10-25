const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");


addTodoBtn.addEventListener("click", addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (!todoText) return;
  
    // Create list item
    const todoItem = document.createElement("li");
    todoItem.className = "flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm";
  
    // Create the text span
    const todoContent = document.createElement("span");
    todoContent.className = "flex-1 text-gray-800";
    todoContent.textContent = todoText;
  
    
  }