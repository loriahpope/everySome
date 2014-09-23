var numbers = [9, 48, 204, 528942];
var words = ["aardvark", "abbreviate", "abacuses", "abandoners", "abalones"];

function every(numbers){
	console.log("Running every...");
	for(var i = 0; i < numbers.length; i++){
		if(numbers[i] % 3 != 0){
			return false;
			break;
		} 
	}
	return true;
}

function some(words){
	console.log("Running some...");
	for(var i = 0; i < words.length; i++){
		if(words[i].length === 9){
			return true;
			break;
		}
	}
	return false;
}

console.log(every(numbers));

console.log(some(words));