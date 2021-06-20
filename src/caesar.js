// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  function caesar(input, shift = 0, encode = true) { 
    
    //conditions + early return 
    if (shift == 0 || shift > 25 || shift < -25) return false; 
    
    //ignore uppercase 
    input = input.toLowerCase();
    
    //empty array for reception 
    const encodedMessage = [];
    
    //set up regular alphabet to draw from in for...of
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    
    //repeat three times to absolve necessity to search over
    const fullArray = [...alphabet,...alphabet,...alphabet];
    
    //set up shift equation 
    shift = (encode == true) ? shift : shift*(-1); 

    //for...of to pick through individual letters
    for(letter of input){ 
      
      //index alphabet to allow us to hone in on one specific letter at a time
      const position = alphabet.indexOf(letter);
      
      //if it does not include the letter 
      if (!alphabet.includes(letter)){
        
        //push to result array 
        encodedMessage.push(letter);
        
      } else {
        
        //otherwise, push with shifted position 
        encodedMessage.push(fullArray[position + 26 + shift]);
        
      }
      
    }
    
    //return WITH spaces, using join 
    return encodedMessage.join("");
    
  }
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
