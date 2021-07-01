type CompareFunction<T> = (a: T, b: T) => boolean;

export function selectionSort<T>(arr: T[], compare: CompareFunction<T>): T[] {
	let newArr: T[] = [];
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		let smallestIdx = findSmallest(arr, compare);
		let [a] = arr.splice(smallestIdx, 1);
		newArr.push(a);
	}
	return newArr;
}

function findSmallest<T>(arr: T[], aIsSmaller: CompareFunction<T>): number {
	let smallest = arr[0];
	let sIdx = 0;
	let len = arr.length;
	for (let i = 1; i < len; i++) {
		if (aIsSmaller(arr[i], smallest)) {
			smallest = arr[i];
			sIdx = i;
		}
	}
	return sIdx;
}

// console.log(selectionSort([3, 6, 7, 4, 2, 3, 6, 7, 4, 2], (a, b) => a < b)); // [2, 2, 3, 3, 4, 4, 6, 6, 7, 7]
