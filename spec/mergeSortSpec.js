var mergeSort = require("../mergeSort.js");

describe('Merge', function() {
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1],[2])).toEqual([1,2]);
  });

});

describe('Merge', function() {
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([2],[1])).toEqual([1,2]);
  });
});

describe('Merge', function() {
  it('should merge two sorted arrays of each size 2', function() {
     expect(mergeSort.merge([1,2],[1,3])).toEqual([1,1,2,3]);
  });
});

describe('Merge', function() {
  it('should sort two sorted arrays of different sizes', function() {
     expect(mergeSort.merge([2],[1,3])).toEqual([1,2,3]);
  });
});

describe('Merge', function() {
  it('should sort two sorted arrays of different sizes', function() {
     expect(mergeSort.merge([2],[1,3,5])).toEqual([1,2,3,5]);
  });
});

describe('Merge', function() {
  it('should sort two sorted arrays of different sizes', function() {
     expect(mergeSort.merge([2,6,10],[1,3])).toEqual([1,2,3,6,10]);
  });
});

describe('Merge', function() {
  it('should sort two sorted arrays of different sizes', function() {
     expect(mergeSort.merge([2,6,10],[3])).toEqual([2,3,6,10]);
  });
});

describe('Merge Sort', function() {
  it('should sort an unsorted array', function() {
     expect(mergeSort.mergeSort([12,6,10,3])).toEqual([3,6,10,12]);
     expect(mergeSort.mergeSort([12,6,10,3,1])).toEqual([1,3,6,10,12]);
  });
});