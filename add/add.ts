function add(param1: number, param2: number): number {
    return param1+param2;
}

function add2(...params: number[]): number {
    const reducer = (accumulator,value)=> accumulator + value;  
    return params.reduce(reducer);
}
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));

