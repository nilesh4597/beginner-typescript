import { addTwoNumber } from "./interface-as-params";
import {describe, expect, test} from '@jest/globals';
describe("interface as param to function with various operations",()=>{

    test("add two numbers with object",()=>{
        expect(addTwoNumber({a:14,b:13})).toBe(27)
    })


    test("add two numbers with object",()=>{
        expect(addTwoNumber({a:14,b:13})).not.toBe(25)
    })

});