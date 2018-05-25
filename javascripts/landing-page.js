var button = document.querySelector('.signin');
var signin = document.querySelector('.modal');
var closeButton = document.querySelector('.close');
var submitButton = document.querySelector('.submit');
var userBox = document.querySelector('#user');
var passBox = document.querySelector('#pass');
var inputs = document.querySelectorAll('input');

button.addEventListener('click', function(e){
	signin.style.display = 'block';
})

closeButton.addEventListener('click', function(e){
	signin.style.display = 'none';
})

submitButton.addEventListener('click', function(e){
//if(userfield is empty) then vvv
	if(!userBox.value) {
		userBox.classList.add('error')
		
	} else {
		userBox.classList.remove('error')
		
	}

	if(!passBox.value){
		passBox.classList.add('error')
	} else {
		
		passBox.classList.remove('error')
	}
})

inputs.forEach(function(input){
	input.addEventListener('input', function(event){
		if(input.value){
			input.classList.remove('error')
		} else {
			input.classList.add('error')
		}
	})
})