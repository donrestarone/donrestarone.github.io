document.addEventListener("DOMContentLoaded", function(event){
	var tiles = document.querySelectorAll('td');
	var winner = document.querySelector('#winner')
	var count = 0
	var winCounter = 0;
	var xChoiceArray = []
	var oChoiceArray = []
	var gameArray = [[8, 1, 6], [3, 5, 7], [4, 9, 2], [8, 3, 4], [1, 5, 9], [6, 7, 2], [8, 5, 2], [6, 5, 4]]
	
for(i = 0; i < tiles.length; i++){
	aTile = tiles[i]
	aTile.addEventListener('click', function(e){
		
		if(count % 2 === 0){
			e.target.innerText = 'X'
			//console.log(this.className)
			xChoiceArray.push(this.className);
			if(checkArrays(xChoiceArray)){
				winner.innerText = 'X wins'
				reloadPage()
			} else if(xChoiceArray.length > 4){
				winner.innerText = 'Tie'
			}


		} else if (count % 2 != 0){
			e.target.innerText = 'O'
			oChoiceArray.push(this.className);
			if(checkArrays(oChoiceArray)){
				winner.innerText = 'O Wins'
				reloadPage()
			}
		}
		count += 1
	})
}

function reloadPage(){
	setInterval(function(s){
					location.reload();
	}, 4000)
}

function checkArrays(playerArray){

	for(var i=0; i < gameArray.length; i++){
		gameArray[i].forEach(function(num){
			if (playerArray.includes(num.toString())){ //convert to string because strings are in the Xchoicearray and Ochoicearray
				winCounter = winCounter + 1;
				console.log("winCounter")
			}
		})
		
		if(winCounter === 3){
			return true
		} else{
			winCounter = 0;}
	}
}
})
