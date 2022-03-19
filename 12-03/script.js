//Задание1

/*
let name;

let getName = (name) => {
    if (name === undefined){
        name = 'гость';
    }
    alert('Привет, ' + name);
}

getName(name);
*/

//Задание2

let array = [1, 2, 3, 4];
array = array.map(counter => counter + counter);
console.log(array);