
// if ( condition ) {

// }
// var age = prompt("What is your age?");
// var cash = prompt("How much money do you have?");
// var drinks = prompt("How many drinks have you had already?");

// if (age >= 18) {
// 	if (drinks >= 5) {

// 		if (cash > 7) {
// 			console.log("You can drink!");
// 		}

// 		else if (cash > 5) {
// 			console.log("You can buy some crisps!");
// 		}

// 		else {
// 			console.log("Sorry, you don't have enough money. :(");
// 		}
// 	} else {
// 		console.log("You've had too many to drink!");
// 	}
// } else {
// 	console.log("You're underage!");
// }


// var name = "Timmy";

// switch(name) {
// 	case 'Tina':
// 		console.log("Hello Tina");

// 	break;

// 	case 'Bob':
// 		console.log("Hello Bob!")
// 	break;

// 	case 'Sammy':
// 		console.log("Hello Sammy!")
// 	break;

// 	default:
// 		console.log("Sorry, don't know who you are.")
// }

// var name = prompt("What is your name?") || "Captain no-name!";
// console.log(name);


// For Loop

// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// }

// var people = ["Tina", "Bob", "Simon", "Jeff"];

// function greetPeople(listOfPeople) {

// 	for (var i = 0; i < listOfPeople.length; i++) {
// 		greet(listOfPeople[i]);
// 	}
// }

// function greet (name) {
// 	console.log("Hello " + name);
	
// }

// greetPeople(people);



// var people = ["Tina", "Bob", "Simon", "Jeff"];


// for (var i = 0; i < people.length; i++) {
// 	function greet (people[i]); {
// 		console.log("Hello " + name);
// 	}
// }




// while loop


// var i = 0;

// while (i < 5) {
// 	console.log("Conditions have been met.");
// 	console.log(i);
// 	i++
// }

// var isDrunk = false;
// var drinks = 0;

// while (!isDrunk) {
// 	console.log("There you go, enjoy your drink.")
// 	drinks++
// 	if (drinks === 5) {
// 		isDrunk = true;
// 	}
// }

// interate over a object

// var people = {
// 	"Niall": "Richmond",
// 	"Tim": "Newcastle",
// 	"Bob": "Birmingham"
// };

// for (var key in people) {
// 	greet(key, people[key]);
// }

// function greet(name, place) {
// 	console.log("Hello, " + name + ". You live in " + place)
// }

// function personGreet(people, place) {
// 	for (var key in people) {
// 		greet(people, place);
// 	}
// }
// function greet(name, home) {
// 	console.log("Hello, " + name + ". You live in " + home)
// }

// personGreet(people, place);



// for (var i=1; i <= 100; i++) {
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log("FizzBuzz");
// 	}
// 	else if (i % 5 === 0) {
// 		console.log("Buzz");
// 	}
// 	else if (i % 3 === 0) {
// 		console.log("Fizz");
// 	}
// 	else {
// 		console.log(i);
// 	}
// }



// for (var i=0; i<=100; i++) {
// 	i%15 === 0 ? console.log(“FizzBuzz”) : i%5===0 ? console.log(“Buzz”) : i%3 === 0 ? console.log(“Fizz”) : console.log(i)
// }


var age = 18;

var canDrink = (age >= 18) ? 
	("Yes, this person is over 18") : 
	(age <10 ? "No, this person isn't." : "You've got a couple of years to go")

console.log(canDrink);