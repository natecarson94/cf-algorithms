function alternatingSums(a) {
    let team1 = [];
    let team2 = [];
    
    a.forEach((num,index)=> {
        if (index % 2 === 0) {
        team1.push(num);
        }else team2.push(num);
    });
    
    let weight1 = team1.reduce((sum,num)=> sum+num,0);
    let weight2 = team2.reduce((sum,num)=> sum+num,0);
    
    return [weight1,weight2];
    
}