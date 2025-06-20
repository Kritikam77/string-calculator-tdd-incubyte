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
})