const howSum = (targetSum,numbers,memo = {})=>{
    if (targetSum in memo) return memo[targetSum];
    if(targetSum ===0) return [];
    if(targetSum <0) return null;
    for(let num of numbers){
        const remainder = targetSum - num;
        const remianderResult = howSum(remainder,numbers,memo);
        if(remianderResult !== null){
            memo[targetSum] = [...remianderResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum]= null;
    return memo[targetSum];
}
console.log(howSum(7,[3,4,5,7]));
console.log(howSum(300,[7,14]));