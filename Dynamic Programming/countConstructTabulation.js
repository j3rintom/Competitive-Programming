const countConstruct = (target,wordBank)=>{
    const table = new Array(target.length + 1).fill(0);
    table[0] = 1;
    for(let i=0;i<table.length;i++){
        if(table[i]>0){
            for(let word of wordBank){
                if(target.slice(i,i+word.length)===word){
                    table[i + word.length] += table[i];
                }
            }
        }
    }
    return table[target.length];
}



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