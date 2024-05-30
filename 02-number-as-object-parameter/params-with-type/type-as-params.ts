type AddTwoNumbersArgs =
{a:number,b:number}

 export function addTwoNumber(params:AddTwoNumbersArgs){
    return params.a + params.b;
}