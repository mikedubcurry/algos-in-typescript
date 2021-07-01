export function linearSearch<Type>(val: Type, arr: Type[]): number {
	for (let i = 0; i < arr.length; i++) {
		if (val === arr[i]) return i;
	}
	return -1;
}

// console.log(linearSearch(6, [2,4,6,7,8,9])) // 2
