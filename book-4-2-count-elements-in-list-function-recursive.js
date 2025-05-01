const count = (arr) => {
	if (arr.length === 0) {
		return 0;
	} else {
		return 1 + count(arr.slice(1));
	}
}

console.log(count([8,3,4,5,6]));
