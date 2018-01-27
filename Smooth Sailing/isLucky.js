function isLucky(n) {
    halfValue = n.toString().length / 2;
        
        let firstHalf = n.toString().split('').slice(0,halfValue);
        let secondHalf = n.toString().split('').slice(halfValue);
        
        let firstSum = firstHalf.reduce((sum,num)=>{
          let actualNum = Number(num);
          console.log(actualNum);
            return sum + actualNum;
        },0);
        
        let secondSum = secondHalf.reduce((sum,num)=>{
            let actualNum = Number(num);
            return sum + actualNum;
        },0);
        if (firstSum === secondSum){
            return true;
        }
        return false;
       
    }