function fiboEvenSum(n) {
    let fibNumSum = 0;
    let fibCurrent = 0;
    let fibNext = 1;
    let fibTotal=0;

    while (fibTotal <= n) {

        fibTotal = fibCurrent + fibNext;
        fibCurrent = fibNext;
        fibNext = fibTotal;

        if (fibTotal % 2 == 0) {
            fibNumSum += fibTotal;
        }
    }
    return fibNumSum;
}

console.log("8 = " + fiboEvenSum(8))
console.log("10 = " + fiboEvenSum(10))
console.log("34 = " + fiboEvenSum(34))
console.log("60 = " + fiboEvenSum(60))
console.log("1000 = " + fiboEvenSum(1000))