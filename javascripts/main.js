document.addEventListener("DOMContentLoaded", function(event){
	// for table interactivity
	var specialities = document.getElementById("specialties");
	var partialBoxes = document.getElementsByClassName("box");

	var chartTitles = document.getElementsByClassName("col-sm-3");
	var instruction = document.getElementById("instruction");
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		var i
		for (var ii = 0; i < chartTitles.length; i++){
			chartTitles[ii].addEventListener('click', function(event){
				for (i= 0; i < partialBoxes.length; i++){
					partialBoxes[ii].style.display = 'block';
				}
			})
		}
	}

	setInterval(function(){
		instruction.style.display = 'none'
	}, 650)


});