function printMessage(msg, style, el = "#messages"){
	box = document.querySelector(el);
	box.innerHTML = msg;
	if(el == "#messages"){
		box.setAttribute("class", "");
		box.classList.add("" + style + "");
	}
	
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}