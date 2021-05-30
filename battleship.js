var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
	guess = prompt("Redy, aim, fire! (Enter a number from 0-6) :");	
	if (guess < 0 || guess > 6) {
			alert("Please enter a valid cell number!")	
		} else {
			guesses ++ 
		
			if (guess == location1 || guess == location2 || guess == 			    location3) {
					alert("HIT!");
					hits ++;				
					if (hits == 3) {
					isSunk = true;
					alert("You sank my batleship!");					
					}
					
					}  else {
					alert("MISS");		
				}
			}
		}
		var stats = "You took " + guesses + " guesses to sink the batleship, " + "which means your shoting accuracy was " + (3/guesses);
		
		alert(stats);

















































































































































