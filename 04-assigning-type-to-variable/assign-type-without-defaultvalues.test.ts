
import {describe, expect, test} from '@jest/globals';
import { getUserDetails } from './assign-type-to-variable';



describe("Optional params",()=>{
    test("sum with two param",()=>{
        expect(getUserDetails({id:1,name:"nilesh kachare",age:27,address:"mumbai",contact:7249181577}))
        .toEqual("nilesh kachare is eligible for voting");
    });

    test("sum with 1 param ",()=>{
        expect(getUserDetails({id:2,name:"rugved kachare",age:4,address:"Wai",contact:9387473783}))
        .toEqual("rugved kachare is not eligible for voting");
    });
})