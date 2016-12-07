/*
	Christian Buco
	Arrays and Objects
	Dec. 5, 2016
*/

 // variables

var numbers = [1,2,3,4,5,6,7,8,9,10];
var names = ["Senior Tan", "Zakattak", "Yolo", "Ohai", "Jeff"];
var colors = ["black", "salmon", "light blue"];
var adj = ["smart", "special case", "yummy", "tiny whiny", "ferocious"];
var slang = ["scrap", "beef", "da kine", "la dat", "pau hana"];

// objects

var donut = {
	topping : ["sprinkles", "choco frosting", "o'hare air"],
	filling : "jelly",
	shape : "dodecahedron",
	count : 12,
	object : true
}

function numbar(a){
	console.log(numbers[9] + numbers[1])
}
numbar(numbers);

function donut(b){
	if(b == donut.topping[0]){
		console.log(donut.count + " " + donut.filling + " " + donut.shape +)
	}else if(b == donut.topping[1]){
		console.log("")
	}else if(b == donut.topping[2]){
		console.log("")
	}else{
		console.log("your donut don't taste so good!")
	}
}