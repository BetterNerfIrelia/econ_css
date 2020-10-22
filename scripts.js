var buttons = document.getElementsByClassName('econ-button btn  btn-primary');

function startQuiz() {
buttons[0].click();
}

function radioListener() {
  	var blue = document.getElementById('jammer_blue');
	var red = document.getElementById('jammer_red');
	var label4 = document.getElementById('label4');
	label4.style.backgroundColor = "#2eb82e";
	blue.style.display = "flex";
	red.style.display = "flex";
}

document.getElementById("radio1").addEventListener("click", radioListener);
document.getElementById("radio2").addEventListener("click", radioListener);
document.getElementById("radio3").addEventListener("click", radioListener);
document.getElementById("radio4").addEventListener("click", radioListener);
