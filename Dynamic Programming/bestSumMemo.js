const bestSum = (targetSum, numbers,memo={})=>{
    if(targetSum ===0) return [];
    if(targetSum<0) return  null;
    if(targetSum in memo) return memo[targetSum]
    let shortestCombination = null;
    for(let num of numbers){
        const remainder = targetSum- num;
        const remainderCobination = bestSum(remainder,numbers,memo);
        if(remainderCobination !== null){
            const combination = [...remainderCobination,num]
            if(shortestCombination ===null || combination.length <shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;

};





console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(8, [2,3,5]));
console.log(bestSum(8, [1,4,5]));
console.log(bestSum(100, [1,2,5,25]));