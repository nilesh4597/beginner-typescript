
interface sumArguments{
    a:number,
    b:number;
}


 export function addTwoNumber(params:sumArguments){
    return params.a + params.b;
}