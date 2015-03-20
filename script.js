var btnNew = document.getElementById("btn");
var inItemText = document.getElementById("inItemText");

function addNewItem(list, itemText) {
	var listItem = document.createElement("li");	
	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	var span = document.createElement("span");
	span.innerText = itemText;

	listItem.appendChild(checkBox);
	listItem.appendChild(span);
	list.appendChild(listItem);
}

inItemText.onkeyup = function(event) {
	if(event.which == 13) {
		itemTextFunction();
	}
}
function itemTextFunction() {
	var itemText = inItemText.value;
	addNewItem(document.getElementById("todoList"), itemText);
}

btnNew.onclick = itemTextFunction;