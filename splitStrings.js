//Завершите решение так, чтобы оно разбило строку на пары из двух символов.
// Если строка содержит нечетное количество символов, то отсутствующий второй
// символ последней пары должен быть заменен символом подчеркивания ('_').


function solution(str) {
    let liter = '';
    let arr = [];
    if (str == false) {
        return arr;
    }
    for (let item of str) {
        if (liter.length != 2) {
            liter += item;
        } else if (liter.length = 2) {
            arr.push(liter);
            liter = '';
            liter += item;
        }
    }
    if (liter.length == 1) {
        liter += '_';
        arr.push(liter);
    } else {
        arr.push(liter)
    }
    return arr;
}