
import {describe, expect, test} from '@jest/globals';
import { getSum } from './function-optional-params';


describe("Optional params",()=>{
    test("sum with two param",()=>{
        expect(getSum(100,10)).toEqual(110);
    });

    test("sum with 1 param ",()=>{
        expect(getSum(100)).toEqual(100);
    });
})