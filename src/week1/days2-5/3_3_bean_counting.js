/*
function countBs(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] == "B") {
        count += 1;
      }
    }
    return count;
}
*/

function countChar(text, character) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] == character) {
        count += 1;
      }
    }
    return count;
  }
  
  function countBs(text) {
    return countChar(text, "B");
  }
  
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));