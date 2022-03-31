//Завершите решение, чтобы функция разбивала верблюжий регистр, используя пробелы между словами.

//Пример
//"camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    let srr = [...string]
    let   strongUpper = [...string.toUpperCase()];
    let result = []
    let numArry = 0;
    strongUpper.forEach((item, index)=>{
        if(srr[index] === strongUpper[index]){
            if(numArry == 0){
                numArry = index;
                result = srr.slice(0,index)
                result.push(' ')
            }
            else {
                result = [...result,...srr.slice(numArry,index)]
                numArry = index;
                result.push(' ')
            }
        }
    })
    let a =  srr.slice(numArry)

    return [...result, ...a].join("")
}