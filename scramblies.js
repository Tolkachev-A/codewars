//Завершите функцию scramble(str1, str2), которая возвращает, trueесли
// часть str1символов можно переставить, чтобы они соответствовали str2,
// иначе возвращает false.

function scramble(str1, str2) {
    let count = Object.create(null);

    Array.prototype.forEach.call(str1, function (a) {
        count[a] = (count[a] || 0) + 1;
    });

    return Array.prototype.every.call(str2, function (a) {
        return count[a]--;
    });
}