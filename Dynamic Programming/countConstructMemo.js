const countConstruct=(target,wordBank,memo={})=>{
    if(target==='') return 1;
    if(target in memo) return memo[target];
    let totalCount=0;
    for(let word of wordBank){
        if(target.indexOf(word)===0){
            const numWays = countConstruct(target.slice(word.length),wordBank,memo);
            totalCount+=numWays;
        }
    }
    memo[target] = totalCount;
    return totalCount;
};








console.log(countConstruct("purple",["purp","p","ur","le","purpl"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeeee",
  ])
);
