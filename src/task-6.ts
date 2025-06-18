function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);           // 1
getFirstElement<string>(["a", "b", "c"]);     // "a"
getFirstElement<boolean>([true, false, true]);


console.log(`First element of numbers: ${getFirstElement<number>([1, 2, 3])}`);
console.log(`First element of strings: ${getFirstElement<string>(["a", "b", "c"])}`)
console.log(`First element of booleans: ${getFirstElement<boolean>([true, false, true])}`);
