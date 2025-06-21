export function add(numbers: string): number {
  //if the input is an empty string, return 0
  if(numbers==="") return 0; 
  
  //if the input is a single number, return that number
  //if input is comma-separated numbers, return sum, works for both multiple and single numbers

  const delimiters=/[,\n]/; //regex to split by comma or newline
  const nums=numbers.split(delimiters).map(num=>parseInt(num))

  return nums.reduce((sum,curr)=>sum+curr,0)
}