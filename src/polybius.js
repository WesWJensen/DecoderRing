// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    
    //polybius key, set numbers to each corresponding letter
    const alphabet = { a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22", h: "32", i: "42", j: "42", k: "52", l: "13", m: "23", n: "33", o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54", v: "15", w: "25", x: "35", y: "45", z: "55", };
    
    //if there isnt any input, return false as test asks
    if (!input) return false;
    
    //ignore caps immediately 
    input.toLowerCase();
    
    //set up empty string 
    let finalMessage = "";
    
    //encode
    if (encode) {
      
      for (let i = 0; i < input.length; i++) {
        
        let ticker = input[i];
        
        if (ticker === " ") {
          
          finalMessage += " ";
          
        } else {
          
          let match = Object.entries(alphabet).find(
            
            (letter) => ticker === letter[0]
            
          );
          
          finalMessage +=  match[1];
          
        }
        
      }
      
    } else {
      
      //should return false if the length of the final numerical message is odd
      let noSpaces = input.replace(/ /g, "");
      
      if (noSpaces.length % 2 !== 0) {
        
        return false;
        
      }
      
    }
    
    //specific method for i and j as they sit, from numbers to letters only 
    for (let i = 0; i < input.length; i += 2) {
      
      let decode = `${input[i]}${input[i + 1]}`;
      
      if (decode.includes(" ")) {
        
        finalMessage += " ";
        
        i -= 1;
        
      } else if (decode === "42") {
        
        finalMessage += "(i/j)";
        
      } else {
        
        let found = Object.entries(alphabet).find(
          
          (letter) => decode === letter[1]
          
        );
        
        if (found) {
          
          finalMessage += found[0];
          
        }
        
      }
      
    }
    
    return finalMessage.trimEnd();
    
  }

  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };
