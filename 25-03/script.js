/*
let data_1,data_2;
data_1=prompt("Введите год рождения");
data_2=prompt("Введите нынешний год");

const data =(a,b)=>{
    let age =a-b;
    return age;
}
console.log(data(data_2,data_1));*/

const showMessage = () => {
    let counter = 0;
    let idInterval = setInterval(function () {
        console.log('Hello world');
        counter++;
        if (counter == 5) {
            clearInterval(idInterval);
            console.log('Done');
        }
    }, 1000)
}

showMessage();