function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for(let index = 0; index  < arr.length; index++) {
        leftDiagonal += arr[index][index];
        rightDiagonal += arr[index][arr.length - 1 - index];

    }
    // faco valor menos o outro se for no negativo absolut retorna ele
    return Math.abs([leftDiagonal - rightDiagonal]);
}

console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, -9]]));