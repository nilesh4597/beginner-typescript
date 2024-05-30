type UserDetails = {
    id:number,
    name:string,
    age:number,
    contact:number,
    address:string
}


const defaultValue={};

export const getUserDetails=(user:UserDetails)=>{
    if(user.age>18)
        return user.name + " is eligible for voting";
    return user.name + " is not eligible for voting";
}

