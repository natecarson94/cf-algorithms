function reverseParentheses(s) {
    let counter = 0;
    s.split('').forEach(char=>{
      if(char === '('){
       counter++;
      }
     });
     
     console.log(counter);
     
     for(i=0; i<counter; i++){
        //find lastIndex of '('
       let innerMostPar = s.lastIndexOf('(');
       //find firstIndex of ')' starting at innerMost '('
       let innerMatchPar = s.indexOf(')',innerMostPar);
    
       //reverse and return
       let slice = s.slice(innerMostPar+1,innerMatchPar).split('').reverse();
       let split = s.split('');
       split.splice(innerMostPar,slice.length+2,slice.join(''));
       s = split.join(''); 
     }
     return s;
    }