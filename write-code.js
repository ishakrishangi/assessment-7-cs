//ADD TO ZERO 
// O(n^2)

const addToZero = (arr) => {
    for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j<arr.length; j++){
        if (arr[i]+arr[j] === 0){
         return true
        }
      }
      } return false        
    } 

//UNIQUE CHARS
// 0(n)
    const hasUniqueChars = (word) => {
        let hasUniqueChar = true;
        const array = [];
        for (let i = 0; i < word.length; i++) {
          if (!array.includes(word[i])) {
            array.push(word[i])
          } else {
            hasUniqueChar = false
          }
        }
        return hasUniqueChar;
      }

            console.log(hasUniqueChars('billion'))
            console.log(hasUniqueChars('orange'))
            console.log(hasUniqueChars('apple'))
            console.log(hasUniqueChars('Bob'))


//PANGRAM
// O(1)
const pangram = (string) => {
    const letters = string.toLowerCase().match(/[a-z]/g);
    const alphabet = [...new Set(letters)]
    return alphabet.length === 26;
}

console.log(pangram("The quick brown fox jumps over the lazy dog!"))
console.log(pangram("I like cats, but not mice"))



//LONGEST WORD 
//O(n)
const longestWord = (arr) => {
    let longth = arr[0].length
    for(let i = 1; i < arr.length; i++){
        if (arr[i].length > longth){
            longth = arr[i].length;
        }
        
    } return longth
}

console.log(longestWord(["asdfasdf", "fsdffd", "as"]));
console.log(longestWord(["ggg", "ddd", "lll"]));
console.log(longestWord(["hi", "hello"]));