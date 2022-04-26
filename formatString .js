// Дано: массив, содержащий хэши имен
// Возврат: строка, отформатированная как список имен, разделенных запятыми,
// за исключением двух последних имен, которые должны быть разделены амперсандом.

function list(names) {
    let str = '';
    names.forEach((item, index) => {
        if (index == names.length - 2) {
            return str += `${names[index].name} & `
        } else if (index == names.length - 1) {
            return str += `${names[index].name}`
        } else {
            return str += `${names[index].name}, `
        }
    });


    return str;
}