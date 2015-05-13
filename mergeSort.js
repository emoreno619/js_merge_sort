
// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers
// from left and right.
exports.merge = function(left, right) {
	var leftI = 0;
	var rightI = 0;
	var res = [];
	while(leftI < left.length || rightI < right.length){
		if(leftI === left.length){
			res.push(right[rightI]);
			rightI++;
		}
		 else if(rightI === right.length){
			res.push(left[leftI]);
			leftI++;
		} else {
			if(left[leftI] <= right[rightI]){
				res.push(left[leftI]);
				leftI++;
			} else if(right[rightI] < left[leftI]){
				res.push(right[rightI]);
				rightI++;
			}
		}
		
	}
	return res;
}

// Merge sort uses the merge function in order to
// sort an array. Given an array of numbers in any
// order, merge sort should return an array that is
// sorted.
exports.mergeSort = function(arr) {
	//base case
	if(arr.length < 2){
		return arr;
	} else {
		var mid = Math.floor(arr.length/2);
		var left = arr.slice(0,mid);
		var right = arr.slice(mid, arr.length);
		var sortL = exports.mergeSort(left);
		var sortR = exports.mergeSort(right);
		return exports.merge(sortL, sortR);
	}

}

