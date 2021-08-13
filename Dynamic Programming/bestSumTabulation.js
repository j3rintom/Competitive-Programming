const bestSum = (target,numbers) =>{
    const table = Array(target +1).fill(null);
    table[0]=[];
    for(let i=0;i<=target;i++){
        if(table[i]!==null){
            for(let num of numbers){
                const curr=[...table[i],num];
                if(!table[i+num] || table[i+num].length > curr.length){
                    table[i+num] = curr;
                }
            }
        }
    }
    return table[target];
}





console.log(bestSum(7,[2,3]));
console.log(bestSum(7,[4,3,5,7]));
console.log(bestSum(7,[2,4]));
console.log(bestSum(8,[2,3,5]));
console.log(bestSum(300,[7,14]));