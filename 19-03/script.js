const arr = [0, -3, -7, -12, 2, -8, 3, 8];
let result;
function task2(arr) {
    return arr.find(elem => elem > 0);
}
result=task2(arr);
console.log(result);


let sum = 0;
function task3(arr) {
    for (let i = 0; i <arr.length ; i++) {
        if (arr[i]%2==0 && arr[i]>0){
            sum+=arr[i]
        }
    }
    return sum;
}
console.log(task3(arr));