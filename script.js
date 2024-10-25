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



  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "text-red-500 hover:underline";
  deleteBtn.addEventListener("click", () => deleteTodo(todoItem));



  todoItem.appendChild(todoContent);
  todoItem.appendChild(editBtn);
  todoItem.appendChild(deleteBtn);

  todoList.appendChild(todoItem);
  todoInput.value = "";
}

function editTodo(todoItem, todoContent) {
  const originalText = todoContent.textContent;
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = originalText;
  editInput.className = "border p-1 rounded w-full mr-2 focus:outline-none focus:ring focus:border-indigo-500";
  
    


  const saveEdit = () => {
    todoContent.textContent = editInput.value.trim() || originalText;
    todoItem.replaceChild(todoContent, editInput);
  };


  todoItem.replaceChild(editInput, todoContent);
  editInput.focus();

  // Save edit on Enter key
  editInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") saveEdit();
  });

  // Save edit on blur
  editInput.addEventListener("blur", saveEdit);
  }