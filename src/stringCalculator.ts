function parseNumbers(input:string):number[]{
  let numbersSection=input;
  let delimiterPattern=/[,\n]/;

  //check for custom delimiter syntax
  if(input.startsWith("//")){
    const parts=input.split("\n")
    const delimiterDeclaration=parts[0];
    numbersSection=parts.slice(1).join('\n')

    const customDelimiter=delimiterDeclaration.substring(2); 
    delimiterPattern = new RegExp(`[${escapeRegExp(customDelimiter)}\n]`);
  }

  return numbersSection
    .split(delimiterPattern)
    .map(num=>parseInt(num))
}

//utility to escape special characters in custom delimiters
function escapeRegExp(str:string):string{
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function add(numbers:string):number{
  if(numbers==="") return 0;

  const nums=parseNumbers(numbers)
  return nums.reduce((sum,curr)=>sum+curr,0)
}