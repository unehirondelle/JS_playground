export const map = (arr: any[], fn: (a: any, b: number) => any) => {
    const newArr: any[] = new Array(arr.length);

    arr.forEach((el, i) => newArr.push(fn(el, i)));

    return newArr;
}