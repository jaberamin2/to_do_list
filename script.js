const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");


addTodoBtn.addEventListener("click", addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (!todoText) return;
  
    const todoItem = document.createElement("li");
    todoItem.className = "flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm";
  
    const todoContent = document.createElement("span");
    todoContent.className = "flex-1 text-gray-800";
    todoContent.textContent = todoText;


    const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "text-indigo-500 hover:underline mr-2";
  editBtn.addEventListener("click", () => editTodo(todoItem, todoContent));
  
    
  }