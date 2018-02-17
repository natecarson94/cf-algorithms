function areSimilar(a, b) {
    let counter = 0;
    let pair = [];
    let ind = [];
    
a.forEach((char,index)=>{
    if(char != b[index]){
        counter++;
        pair.push(char);
        ind.push(index);
    }
});
    // if a[index] != b[index] more than 2 times return false 
    if(counter > 2){
        return false;
    }
    // if counter = 2 further testing
    else if(counter === 2){
        pair.reverse();
        a.splice(ind[0],1,pair[0]);
        a.splice(ind[1],1,pair[1]);
       let newCounter = 0;
        a.forEach((char,index)=>{
            if(char != b[index]){
                newCounter++;
            }
        });
        
    return newCounter > 0 ? false : true;
        
    }
    // else return true;
    else return true;
    
}
