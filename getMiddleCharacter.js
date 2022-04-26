// Вам дадут слово. Ваша задача — вернуть средний символ слова.
// Если длина слова нечетная, вернуть средний символ.
// Если длина слова четная, верните средние 2 символа.


function getMiddle(s)
{
    let str
    if(s.length % 2 == 0){
        let index = s.length / 2;
        str = s[index - 1] + s[index];
    }
    else{
        let index = Math.round(s.length / 2);
        str = s[index - 1 ];
    }
    return str
}