var todoInput = document.getElementById('todo-input')
var btnAdd = document.getElementById('btn-add')
var listContainer = document.getElementById('list-container')

function addTodo() {
    var value = todoInput.value
    if (value != "" || value != undefined) {
        var item = document.createElement("li")
        item.className = "list-group-item d-flex justify-content-between align-items-center"

        var itemId = "item-" + randomId();

        item.setAttribute("id", itemId);

        var itemText = document.createElement("p");
        itemText.innerText = value;

        var btnContainer = document.createElement("div")
        btnContainer.className = "d-flex"

        let editButton = document.createElement("Button");
        editButton.innerHTML = "Edit";
        editButton.className = "editButton btn";
        editButton.onclick = function() {
            editTodo(itemId);
        };;

        let removeButton = document.createElement("Button");
        removeButton.innerHTML = "Remove"
        removeButton.className = "removeButton btn btn-danger";
        removeButton.onclick = function() {
            deleteTodo(itemId);
        };;

        btnContainer.appendChild(editButton)
        btnContainer.appendChild(removeButton)
        item.appendChild(itemText);
        item.appendChild(btnContainer);
    
        listContainer.appendChild(item);

        todoInput.value = ""
    }
}

function randomId() {
    return Math.floor(Math.random() * 99999)
}
function deleteTodo(id) {
    var itemToRemove = document.getElementById(id)
    listContainer.removeChild(itemToRemove)
}
function editTodo(id) {
    var itemToEdit = document.getElementById(id)
    deleteTodo(id)
    todoInput.value = itemToEdit.getElementsByTagName('p')[0].innerText
    todoInput.focus()
}