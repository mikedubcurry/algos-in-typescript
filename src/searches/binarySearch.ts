export function binarySearch<Type>(val: Type, arr: Type[]): number {
	let lo = 0;
	let hi = arr.length - 1;
	let next;
	while (lo <= hi) {
		let mid = Math.floor((lo + hi) / 2);
		let guess = arr[mid];
		if (guess === val) {
			return mid;
		}
		if (guess > val) {
			hi = mid - 1;
		} else {
			lo = mid + 1;
		}
	}
	return -1;
}

// console.log(binarySearch(5, [0,1,2,3,4,5,6,7])) // 5
