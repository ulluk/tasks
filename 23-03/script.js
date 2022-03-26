/*
numCounter();

const numCounter=()=>{
let number=0, counter=0;
while (number<99){
    number = prompt("Введите число");
    if(number<99){
        counter++;
    }
}
console.log(`Кол-во число ${counter}`);
}
*/

const addNums = () => {
    let q=0 ,counter=0,sum=0;
    while(counter < 999){
        q++;
        sum += counter;
        counter = Number(prompt('Введите число'));
    }
    console.log(`Количество чисел = ${q} ; Сумма чисел = ${sum}`) ;
};

addNums();