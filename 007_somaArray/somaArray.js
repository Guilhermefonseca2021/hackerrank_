function aVeryBigSum(array) {
    // Write your code here
    let soma = 0;
    for(let index = 0; index < array.length; index++) {
        soma = soma + array[index];
    }

    return soma;
}

console.log(aVeryBigSum([10, 20, 30, 40, 50]))
