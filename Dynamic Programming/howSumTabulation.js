const howSum = (target,numbers)=>{
    const table = Array(target+1).fill(null);
    console.log(table);
    table[0]= [];
    // for(let i = 0;i<=target;i++){
    //     if(table[i] !== null){
    //         for(let num of numbers){
    //             const combination = [ ...table[i],num ];
    //             if(!table[i+num] || table[i+num].length > combination.length){
    //                 table[i+num] = combination;
    //             }
    //         }
    //     }
    // }
    // return table[target];
}

console.log(howSum(7,[2,3]));
console.log(howSum(7,[4,3,5,7]));
console.log(howSum(7,[2,4]));
console.log(howSum(8,[2,3,5]));
console.log(howSum(300,[7,14]));