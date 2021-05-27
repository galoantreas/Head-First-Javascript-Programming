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



function a() {
	return 	playerInput(arrayOfInformations[1],arrayOfInformations[2],arrayOfInformations[3],arrayOfInformations[4],arrayOfInformations[5]);
};
var player1 = a();	


function playerInput(firstName,lastName,age,team,city) {
	 	return  { firstName:`${firstName}`,
			lastName:`${lastName}`,
			age:`${age}`,
			team:`${team}`,
			city:`${city}`			
			};

		 
}
