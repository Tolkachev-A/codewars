// Напишите алгоритм, который будет определять действительные адреса
// IPv4 в десятичном формате с точками. IP-адреса следует считать действительными,
//  если они состоят из четырех октетов со значениями от 0 до 255 включительно.

function isValidIP(str) {
    let regex= /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g.test(str)
    let reg = !(/^0[0-9]|\.0[0-9]/g.test(str))
    if( reg && regex ){
        return true
    }
    else {return  false}

}
console.log(isValidIP("0.0.0.0"), true);
console.log(isValidIP("12.255.56.1"), true);
console.log(isValidIP("137.255.156.100"), true);
console.log(isValidIP(''), false);
console.log(isValidIP('abc.def.ghi.jkl'), false);
console.log(isValidIP('123.456.789.0'), false);
console.log(isValidIP('12.34.56'), false);
console.log(isValidIP('01.02.03.04'), false);
console.log(isValidIP('256.1.2.3'), false);
console.log(isValidIP('1.2.3.4.5'), false);
console.log(isValidIP('123,45,67,89'), false);
console.log(isValidIP('1e0.1e1.1e2.2e2'), false);
console.log(isValidIP(' 1.2.3.4'), false);
console.log(isValidIP('1.2.3.4 '), false);
console.log(isValidIP('12.34.56.-7'), false);
console.log(isValidIP('1.2.3.4\n'), false);
console.log(isValidIP('\n1.2.3.4'), false);
console.log(isValidIP('143.164.2.00'), false);
console.log(isValidIP('152.17.124 .151'), false);
console.log(isValidIP('138..180.248'), false);
console.log(isValidIP('242.239..61'), false);