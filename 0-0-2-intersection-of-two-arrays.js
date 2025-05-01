const intersection = (nums1, nums2) => {
  if (nums1.length === 0 || nums2.length === 0) return []; // Пустые массивы → нет пересечения
  
  // Выбираем меньший массив для `Set`, чтобы сэкономить память
  const [smallerNums, largerNums] = 
    nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];
  
  const smallerSet = new Set(smallerNums);
  const resultSet = new Set();

  for (const num of largerNums) {
    if (smallerSet.has(num)) {
      resultSet.add(num);
    }
  }

  return Array.from(resultSet);
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
console.log(intersection([], [1, 2, 3])); // []
console.log(intersection(['a', 'b', 'c'], ['b', 'c', 'd'])); // ['b', 'c']
