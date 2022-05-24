const todoInput = document.querySelector("#todo-input");
const todoAdd = document.querySelector("#add");
const todoList = document.querySelector("#todo-list-group");
const clear = document.querySelector("#clear");

todoAdd.addEventListener("click",addItem);
clear.addEventListener("click",function(){
    todoInput.value="";
    todoList.remove();
});

function addItem(e){
    if(todoInput.value===""){
        alert("İnput boş kalamaz");     
        }else{
            const todoHtml =document.createElement("li");
            todoHtml.className="list-group-item bg-light"
            todoHtml.innerHTML =`
            <div class="d-flex justify-content-between bg-dark text-white rounded-1">
            <div class="p-2 fw-bolder fs-6 text-capitalize">
            <input class="check-item mt-2 me-2 rounded-circle "type="checkbox">
            ${todoInput.value}
            </div>
            <span class="p-2 flex-shrink-1 bd-highlight">
            <button onclick="removeItem()" type="button" class="btn-close btn-close-white" aria-label="Close"></button>
            </span>
            </div>`;
    e.preventDefault();
    todoInput.value="";
    todoList.appendChild(todoHtml);
        };
};
function removeItem(){
    const todoItem = document.querySelector(".list-group-item");
    setTimeout(function () {
        todoItem.remove();
    },80)    
};









