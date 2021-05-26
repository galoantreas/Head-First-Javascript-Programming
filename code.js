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

let informations = prompt("Write down your informations and sepraraty by comas." + 
" First you user name,name,last name , age , team ,city");
console.log(informations);

function playerInput(trakkingNumber,firstName,lastName,age,team,city) {
	 	return  { firstName:`${firstName}`,
			lastName:`${lastName}`,
			age:`${age}`,
			team:`${team}`,
			city:`${city}`			
			};

		 
}
