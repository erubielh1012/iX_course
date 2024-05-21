// Fibonacci Exercise, write a function to print out the first 10 digits of the Fibonacci sequence
function fibonacci(number) {
    fibArray = []
    num1 = 0;
    num2 = 1;
    for (i=0; i<number; i++){
        num3 = num1+num2;
        fibArray.push(num1);
        num1 = num2;
        num2 = num3;
    };
    return fibArray;
};
console.log(fibonacci(10));