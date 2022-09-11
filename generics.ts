function sumUsingGenerics<T extends number, K extends number>(a: T, b: K): number{
    return a + b;
}

console.log(sumUsingGenerics<number, number>(5, 5));
