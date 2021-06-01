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



function a() {
	return 	playerInput(inputName.value,inputLastName.value,inputAge.value,inputTeam.value,inputCity.value);
};
let players = [];

btnSubmit.addEventListener("click", (event) => {
	event.preventDefault();
	let count = 0;
	    count ++;
	console.log(count);
		for (let i = 0;i < count;i++) {
			let obj = a();	
			players.push(obj);	

		console.log("a");	
		}
	})

function playerInput(firstName,lastName,age,team,city) {
	 	return  { firstName:`${firstName}`,
			    lastName:`${lastName}`,
			    age:`${age}`,
			    team:`${team}`,
			    city:`${city}`			
				}
										
		 
}


// make a function that takes an input and find the player

let findUserInput = id("findUser");
let btnFindUser = id("btnFindUser");
let displayResuld = id("displayUser");

btnFindUser.addEventListener("click",findPlayer);

function findPlayer() {
	event.preventDefault();
	let userLooksForThisAcount = findUserInput.value
	for  (let i = 0; i < players.length; i++) {
	let searchForTheAccount = players[i].firstName
		if (userLooksForThisAcount == players[i].firstName ) {
				console.log("d");
				displayResuld.innerHTML = `<h4>First Name:${players[i].firstName}</h4>
						 <h4>Last Name:${players[i].lastName}</h4>
						 <h4>Age:${players[i].age}</h4>
						 <h4>Team:${players[i].team}</h4>
						 <h4>City:${players[i].city}</h4>`;			
			}
	}


}






















