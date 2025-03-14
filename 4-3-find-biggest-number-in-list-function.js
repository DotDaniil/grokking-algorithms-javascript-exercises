const findBiggest = (arr) => {
	if (arr.length === 0) return null;

	if (arr.length === 1) return arr[0];

 
	if (arr.length === 2 ) {
		return arr[0] > arr[1] ? arr[0] : arr[1];
	} else {
		const biggest = findBiggest(arr.slice(1));	
		return arr[0] > biggest ? arr[0] : biggest;
	}
}

console.log(findBiggest([5,7,13,3,12]));
