function test() {
  alert("TEST");
}

$('input[type="radio"]').on('click change', function(e) {
    console.log(e.type);
	var blue = document.getElementById('jammer_blue');
	var red = document.getElementById('jammer_red');
	blue.style.display = "flex";
	red.style.display = "flex";

});
