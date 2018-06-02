document.addEventListener("DOMContentLoaded", function(){
	// for listing dog breeds
	var ul = document.createElement('ul');
	var url = "https://dog.ceo/api/breeds/list/all";
	var body = document.getElementById('body');

	body.append(ul);
	
	var request = $.ajax({
		url: url, 
		method: 'GET',
		dataType: 'json',
	});

	// ** this will show a list of the possible breeds and their sub categories
	// request.done(function(data){
	// 	var dogsHash = data["message"];
		
	// 	//take the hashes and list the breeds
	// 	(Object.keys(dogsHash)).forEach(function(breed){
	// 		var breedLi = document.createElement('li');
	// 		breedLi.innerText = breed;
	// 		if (dogsHash[breed].length > 0) {
	// 			console.log(dogsHash[breed]);
	// 			subBreedUl = document.createElement('ul');
				
	// 			dogsHash[breed].forEach(function(subbreed){
	// 				subBreedLi = document.createElement('li');
	// 				subBreedLi.innerText =	subbreed ;
	// 				subBreedUl.append(subBreedLi);
	// 			});

	// 			breedLi.append(subBreedUl);
	// 		}

	// 		ul.append(breedLi);
	// 	});
	// });

	// add the breeds to the select tag list
	var breedList = document.querySelector(".dogbreeds");
	request.done(function(data){
		var dogsHash = data["message"];
		
		//take the hashes and list the breeds
		(Object.keys(dogsHash)).forEach(function(breed){
			var breedOption = document.createElement('option');
			breedOption.text = breed;
			breedList.add(breedOption);
		});
	});
	// **

	// event listener to generate name
	var getName = document.getElementById("getdogname");
	var temperament = document.getElementsByName("temperament");
	var color = document.getElementsByName("color");
	var gender = document.getElementsByName("gender");

	var dogErrors = []

	var inputTemperament
	var inputColor;
	var inputBreed;
	var inputGender;
	getName.addEventListener('click', function(event){
		// getting the gender
		for (var i =0; i < gender.length; i++) {
			if (gender[i].checked) {
				inputGender = gender[i].value;
			} else {
				dogErrors.push('define gender')
			}
		}		
		// getting the temperament
		for (var i =0; i < temperament.length; i++) {
			if (temperament[i].checked) {
				inputTemperament = temperament[i].value;
			} else {
				dogErrors.push('define temperament')
			}
		}
		// getting the color
		for (var i =0; i < color.length; i++) {
			if (color[i].checked) {
				inputColor = color[i].value;
			} else {
				dogErrors.push('define color')
			}
		}
		// getting the breed
		inputBreed = breedList.options[breedList.selectedIndex].value;
		console.log(dogErrors)
		// generating the name
		var region
		var dogName
		if (inputBreed === "affenpinscher" || inputBreed === "germanshepherd" || inputBreed === "pinscher" || inputBreed === "boxer" || inputBreed === "dane" || inputBreed === "rottweiler" || inputBreed === "doberman" || inputBreed === "dachshund" || inputBreed === "schnauzer" || inputBreed === "poodle" || inputBreed === "weimaraner" || inputBreed === "pomeranian" || inputBreed === "leonberg" || inputBreed === "keeshond" || inputBreed === "pinscher") {
			region = 'germany';
		} else if (inputBreed === "airedale" || inputBreed === "beagle" || inputBreed === "bulldog" || inputBreed === "bullterrier" || inputBreed === "cairn" || inputBreed === "clumber" || inputBreed === "collie" || inputBreed === "corgi" || inputBreed === "deerhound" || inputBreed === "greyhound") {
			region = 'england';
		} else if (inputBreed === "akita") {
			region = 'japan';
		} else if (inputBreed === "appenzeller") {
			region = 'switzerland';
		} else if (inputBreed === "basenji") {
			region = 'nigeria';
		} else if (inputBreed === "borzoi") {
			region = 'russia';
		} else if (inputBreed === "bouvier" || inputBreed === "brabancon") {
			region = 'belgium';
		} else if (inputBreed === "briard") {
			region = 'france';
		} else if (inputBreed === "chihuahua") {
			region = 'mexico';
		} else if (inputBreed === "chow") {
			region = 'china';
		} else if (inputBreed === "dalmatian") {
			region = 'slovakia';
		} else if (inputBreed === "dhole") {
			region = 'india';
		} else if (inputBreed === "dingo") {
			region = 'australia';
		} else {
			region = 'united states';
		}
		$.ajax({
			type: 'GET',
			url: 'https://uinames.com/api/?gender=' + inputGender + '&region=' + (region),
			dataType: 'json',
		}).done(function(response){
			dogName = (response.name + " " + response.surname);
			namePtag.innerText = dogName;
		});
		// get a picture
		var namePtag = document.getElementById("name");
		var picImgTag = document.getElementById("image");
		var nameBox = document.getElementById("resultName");
		var picBox = document.getElementById("dogpic");

		$.ajax({
			type: 'GET',
			url: 'https://dog.ceo/api/breed/' + inputBreed + '/images',
			dataType: 'json',
		}).done(function(response){
			var numPics = response.message.length
			var rand = Math.floor(Math.random() * numPics)
			var picture = response.message[rand];
			picImgTag.src = picture; 
			nameBox.style.display = "block";
			picBox.style.display = "block";
		});
	});
});