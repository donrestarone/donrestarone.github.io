document.addEventListener("DOMContentLoaded", function(event){
	var specialities = document.getElementById("specialties");
	var partialBoxes = document.getElementsByClassName("box");
	var counter = 0;

	var looper = setInterval(function(){
		counter++;
		for (var i=0; i < partialBoxes.length; i++){
			aBox = partialBoxes[i]
			aBox.style.display = 'block';
		}

		if (counter == 2){
			clearInterval(looper)
		}
	}, 850)

	setInterval(function(){
		for (var i=0; i < partialBoxes.length; i++){
			aBox = partialBoxes[i]
			aBox.style.display = 'none';
		}
	}, 1200)

});