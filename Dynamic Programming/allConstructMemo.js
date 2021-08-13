const allConstruct = (target , wordBank,memo={})=>{
    const result = [];
    if(target === "") return [[]];
    if(target in memo) return memo[target];
    for(let word of wordBank){
        if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix,wordBank,memo);
            const targetWays = suffixWays.map(way => [word,...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
}






console.log(allConstruct("purple",["purp","p","ur","le","purpl"]));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeeee",
  ])
);
