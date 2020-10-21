function radioListener() {
  	var blue = document.getElementById('jammer_blue');
	var red = document.getElementById('jammer_red');
	blue.style.display = "flex";
	red.style.display = "flex";
}

document.getElementById("radio1").addEventListener("click", radioListener);
document.getElementById("radio2").addEventListener("click", radioListener);
document.getElementById("radio3").addEventListener("click", radioListener);
document.getElementById("radio4").addEventListener("click", radioListener);

