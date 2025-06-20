import {add} from '../src/stringCalculator';

describe('String Calculator',()=>{
    test('returns 0 for empty string input',()=>{
        expect(add("")).toBe(0)
    })
})