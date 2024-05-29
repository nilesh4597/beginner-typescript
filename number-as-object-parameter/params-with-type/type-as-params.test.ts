import { addTwoNumber } from "./type-as-params";
import {describe, expect, test} from '@jest/globals';
describe("Type as param to function with various operations 2",()=>{

    test("add two numbers with object",()=>{
        expect(addTwoNumber({a:14,b:13})).toBe(27)
    })


    test("add two numbers with object",()=>{
        expect(addTwoNumber({a:14,b:13})).not.toBe(25)
    })

});