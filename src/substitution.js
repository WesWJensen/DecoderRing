// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    
    //ignore uppercase
    input.toLowerCase(); 
    
    //set up final message
    let finalMessage = ""; 
    
    //if alphabet does not contain unique characters

    if(!uniqueCheck(alphabet))
       return false;
    
    //give false if the length is not specifically 26 letters or if the alphabet or input does not exist
    if (!input || !alphabet || alphabet.length !== 26) {
       return false;
                                                   }
      
    
    //set up standard alphabet 
    let standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
   
    //check to make sure each letter is unique, that none are duplicated
    function uniqueCheck(str) {
   
      //if string doesnt exist, go ahead and return false
      if(str === undefined)
        return false
      
      const duplicate = {}; 
    
      //for loop, inst i as variable
      
      for (var i = 0; i < str.length; i++) {
        
       //not unique
       if (duplicate[str[i]] != null){
         duplicate[str[i]] = 1;
         return false; 
       } else {
         
         //unique
         duplicate[str[i]] = 0; 
         
       }
      
      }
      
      return true; 
      
    }
  
    try {
      
      //encode section 
      if (encode === true){
        
        for(let i = 0; i < input.length; i++){
          
          let index = standardAlphabet.indexOf(input[i]);
          console.log(index); 
          if (index === -1 && input[i] === " "){
            
            finalMessage += " ";
            
          } else {
            
            finalMessage += alphabet[index]; 
            
          }
          
        }
        
        //decode
      } else if (!encode) {
        
        for (let i = 0; i < input.length; i++){
          
          let index = alphabet.indexOf(input[i]);
          console.log(index); 
          if (index === -1 && input[i] === " "){
            
            finalMessage += " ";
            
          } else {
            
            finalMessage += standardAlphabet[index]; 
            
          }
          
        }
        
      } 
      
      return finalMessage;
           
    } catch (error) {
      
      return error; 
      
    }
       
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
