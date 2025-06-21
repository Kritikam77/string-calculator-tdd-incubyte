function parseNumbers(input:string):number[]{
  const delimiters=/[,\n]/;
  return input.split(delimiters).map(num=>parseInt(num))
}

export function add(numbers:string):number{
  if(numbers==="") return 0;

  const nums=parseNumbers(numbers)
  return nums.reduce((sum,curr)=>sum+curr,0)
}