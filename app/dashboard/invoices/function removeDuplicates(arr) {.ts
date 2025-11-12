function removeDuplicates(arr: any) {
  return [...new Set(...arr)]
}

// Примеры:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
// Должно вернуть: [1, 2, 3, 4, 5]

console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b']));
// Должно вернуть: ['a', 'b', 'c']