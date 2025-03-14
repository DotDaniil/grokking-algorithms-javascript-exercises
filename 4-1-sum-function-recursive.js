const sum = (arr) => {
	if (arr.length < 1) {
 		return 0;
	} else { 
		return arr[0] + sum(arr.slice(1))
	}	
}

console.log(sum([8,2,1]));

