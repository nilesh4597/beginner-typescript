
export const getDetails= (params:{firstName:string,lastName:string}) =>{
    return params.firstName+" "+params.lastName
}

export const getName = (params: { first: string; last: string }) => {
    if (params.last) {
      return `${params.first} ${params.last}`;
    }
    return params.first;
  };
  