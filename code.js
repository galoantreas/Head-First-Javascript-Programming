/*var word = "bottles";
			var count = 99;
			while (count > 0) {
				console.log(count + " " + word + " of 					bear on the wall");
				
				console.log(count + " " + word + " of 					bear");

				console.log("Take one down, pass it 					around,");
		
				count = count - 1;
		
			if (count > 0) {
				console.log(count + " " + word + " of 					bear on the wall.");			
						
			} else {
				console.log("No more " + word + " of 					bear on the wall.");
			}

			
			}*/




function id(a) {
	return document.getElementById(a);
	};

let inputUserName = id("inputUserName");
let inputName = id("inputName");
let inputLastName = id("inputLastName");
let inputAge = id("inputAge");
let inputTeam = id("inputTeam");
let inputCity = id("inputCity");
let btnSubmit = id("btnSubmit");


console.log(inputUserName,inputName,inputLastName,inputAge,inputTeam,inputCity);



function a(i) {
	return 	playerInput(i,inputName.value,inputLastName.value,inputAge.value,inputTeam.value,inputCity.value);
};
let players = {}

btnSubmit.addEventListener("click", (event) => {
	let count = 0;
	    count ++;

		for (let i = 0;i > count;i++) {
			 players = a([i]);		
		}
	})

function playerInput(firstName,lastName,age,team,city) {
	 	return  players { player[i]: { firstName:`${firstName}`,
					     lastName:`${lastName}`,
					     age:`${age}`,
					     team:`${team}`,
					     city:`${city}`			
				};
										
				}

		 
}
