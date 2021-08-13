const canSum = (targetSum , numbers,memo = {})=>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum ===0) return true;
    if(targetSum< 0) return false;
    for(let num of numbers){
        let remainder = targetSum - num;
        if(canSum(remainder,numbers,memo) === true) {
            memo[targetSum] = true;
            return true;
        };
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSum(900,[6,3]));