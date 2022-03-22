let a = 4000;

for (let i = 4000; i <= 8000 ; i+=4000) {
    setTimeout(showMassage=()=>{
        console.log(`Hello after ${i/1000} seconds`);
    },i);
}


/*
let elem_1=prompt("Введите число :");
let elem_2=prompt("Введите число :");

mul(elem_1,elem_2);

function mul(n,m) {
        console.log(n*m);
}
*/

/*
let elem=prompt("Введите число , факториал которого вы хотите знать")

factorial(elem);

function factorial(a) {
    let sum=1;
    for (let i = 1; i <= a; i++) {
        console.log(`${i} *`)
        sum*=i;
    }
    console.log(`= ${sum}`)
}
*/
