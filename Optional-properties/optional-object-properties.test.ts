
import {describe, expect, test} from '@jest/globals';
import { getDetails } from './optional-object-properties';

describe("Optional Properties",()=>{
    test("accept object as param ",()=>{
        expect(getDetails({firstName:"Nilesh",lastName:"Kachare"})).toEqual("Nilesh Kachare");
    });
})