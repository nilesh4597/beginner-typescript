

import {describe, expect, test} from '@jest/globals';

import { additionNumber } from "../number-type-as-parameter";

test("Add two numbers 2,3",()=>{
    expect(additionNumber(2,3)).toBe(5)
})
