function addBorder(picture) {
    // add * to both sides of each string
    // find length of string
    // make string that length with all *'s
    // add to front and back of array
    
    let newPicture = picture.map(string => {
        let splitString = string.split('');
        splitString.push('*');
        splitString.unshift('*');
        splitString = splitString.join('');
        return splitString;
    });
    
    let aster=[];
        
        newPicture[0].split('').forEach(char => aster.push('*'));
        aster = aster.join('');
        newPicture.push(aster);
        newPicture.unshift(aster);
        
    return newPicture;
    }