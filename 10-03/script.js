let a, b;
a = prompt('Введите значение "a"');
b = prompt('Введите значение "b"');
show(elem(a, b))

function elem(a, b) {
    let text = "Оба элемента одинаковы"
    if (a == b) {
        return text;
    } else if (a > b) {
        return b;
    } else {
        return a;
    }
}

function show(a) {
    alert(a)
}