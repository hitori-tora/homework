function sum (a) {
    let a1 = a;
    return function (b) {
        return a1 + b;
    }
}
let temp = sum(5);
console.log(temp(3));

console.log(sum(4)(19))