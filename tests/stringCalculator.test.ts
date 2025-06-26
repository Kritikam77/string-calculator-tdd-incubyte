import {add} from '../src/stringCalculator';

describe('String Calculator',()=>{

    //Test for empty string input
    test('returns 0 for empty string input',()=>{
        expect(add("")).toBe(0)
    })

    //test for single number input
    test('returns number for single input value',()=>{
        expect(add("5")).toBe(5)
    })

    //test for 2 comma-separated numbers
    test('returns sum for two comma-separated numbers',()=>{
        expect(add("1,2")).toBe(3)
    })

    //test for multiple comma-separated numbers
    test('returns sum for multiple comma-separated numbers',()=>{
        expect(add("1,2,3,4,5")).toBe(15)
        expect(add("10,20,30")).toBe(60)
    })

    //test for handling new lines between numbers
    test('returns sum when new lines are used as delimiters',()=>{
        expect(add("1\n2,3")).toBe(6);
        expect(add("4\n5\n6")).toBe(15)
    })

    //test for custom delimiters
    test('support custom delimiter syntax',()=>{
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//|\n4|5|6")).toBe(15)
    })

    //test for throwing error on negative number
    test('throws error for single negative number',()=>{
        expect(()=>add("-1")).toThrow("negatives not allowed: -1")
    })

    ///test for multiple negative numbers
    test('throws error listing all negative numbers',()=>{
        expect(()=>add("2,-4,3,-9")).toThrow("negatives not allowed: -4,-9")
    })

    //test for * , and if we have a * as a delimiter, we multiply instead of adding
    test("uses multiplaction when custom delimiter is *",()=>{
        expect(add("//*\n2*3*4")).toBe(24);
    })
})