document.addEventListener("DOMContentLoaded", function(event){
	// for table interactivity
	var specialities = document.getElementById("specialties");
	var partialBoxes = document.getElementsByClassName("box");

	var chartTitles = document.querySelectorAll(".col-sm-3");
	var instruction = document.getElementById("instruction");
	if (isMobileDevice()) {
		chartTitles.forEach(function(title) {
			title.addEventListener('click', function(event){
				var box = title.parentElement.querySelector(".box")

				if (box) {
					box.style.display = "block";
				}
			})
		})
		// var i
		// for (var i = 0; i < chartTitles.length; i++){
		// 	chartTitles[i].addEventListener('click', function(event){
		// 		partialBoxes[i].style.display = 'block';
		// 		// console.log(partialBoxes)
		// 		// for (i= 0; i < partialBoxes.length; i++){
		// 		// 	partialBoxes[i].style.display = 'block';
		// 		// }
		// 	})
		// }
	}

	function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);

	};
	


	setInterval(function(){
		instruction.style.display = 'none'
	}, 650)


});