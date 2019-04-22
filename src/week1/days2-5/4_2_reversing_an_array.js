function reverseArray(array ) {
    let reverseArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i]);
      }
      return reverseArray;
} 

function reverseArrayInPlace(array) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      let original = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = original;
    }
    return array;
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
