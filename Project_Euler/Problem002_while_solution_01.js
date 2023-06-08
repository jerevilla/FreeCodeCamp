function fiboEvenSum(n){
    let sum = 0;
    let fiboArr = [1,2];
    let last_element = fiboArr[fiboArr.length-1];
    let before_last_element;
    
    while(last_element <= n) {
        console.log(last_element);
        if (last_element %2 == 0) {
            sum += last_element;
        }

        before_last_element = fiboArr[fiboArr.length - 2];
        fiboArr.push(before_last_element + last_element);

        last_element = fiboArr[fiboArr.length - 1];
    }
    console.log("=========================")
    return sum;

}


console.log("Total = " +fiboEvenSum(44));