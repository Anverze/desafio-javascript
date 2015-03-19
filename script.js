function addNewItem(list, itemText) {
	totalItems++;

	var listItem = document.createElement("li");
	
	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.id = "cb_" + totalItems;

	var span = document.createElement("span");
	span.id = "item_" + totalItems;
	span.innerText = itemText;

	listItem.appendChild(checkBox);
	listItem.appendChild(span);
	list.appendChild(listItem);
}

var totalItems = 0;
var inItemText = document.getElementById("inItemText");

var btnNew = document.getElementById("btn");
btnNew.onclick = function() {
	var itemText = inItemText.value;
	addNewItem(document.getElementById("todoList"), itemText);
};


inItemText.onkeyup = function(event) {
	if(event.which == 13) {
		var itemText = inItemText.value;
		addNewItem(document.getElementById("todoList"), itemText);
	}

}