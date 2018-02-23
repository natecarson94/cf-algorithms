// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

function rotateImage(a){
    let aIndex = a.length -1;
    
    let newArray = [...Array(a.length).keys()].map(i=> Array());
    
    for(let i =0; i<a.length; i++){
        for(let j=aIndex; j>=0; j--){
            newArray[i].unshift(a[aIndex-j][i]);
        }
    }
   
    return newArray;
}