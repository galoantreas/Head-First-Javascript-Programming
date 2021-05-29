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
