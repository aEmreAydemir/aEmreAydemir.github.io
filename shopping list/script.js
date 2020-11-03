var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}
function createButtonElement() {
	var button =document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	return button;
}
function createListWithButton() {
	var button=createButtonElement();
	var li=createListElement();
	var div=document.createElement("div");
	li.classList.add("done");
	li.classList.toggle("done");
	li.addEventListener("click",function() {
		li.classList.toggle("done");
	});
	button.addEventListener("click",function(){
		div.parentNode.removeChild(div);
	});
	button.classList.add("delete");
	div.appendChild(li);
	div.appendChild(button);
	ul.appendChild(div);
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	return li;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListWithButton(); //call createListWithButton Here
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListWithButton();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
