function sortByHeight(a) {
    let a2=[...a];
    
    for (let i = 0; i < a2.length; i++){
         if (a2[i] === -1){
            a2.splice(i,1);
            i --;
        }
    };
    
    let sortedArray = a2.sort((a,b)=>{
         return a-b;
    }); 
    
    let counter = 0;
    
    for (let i = 0; i < a.length; i++){
        
        if(a[i] === -1 && a[i+1] != -1){
            if (sortedArray.length > 0){
                  a.splice(i+1,1,sortedArray[i - counter]);
                counter++;
            }
        }
        else if(a[i] === -1 && a[i+1] === -1){
            counter++;
        }
        else if(a[i] != -1){
            a.splice(i,1,sortedArray[i - counter])
        }
        
    };

    return(a);
}