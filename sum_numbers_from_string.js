const sumOfNumbers = (str) => {
    let sum = 0;
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i])) {
            temp = temp + str[i];
            if (!Number(str[i + 1])) {
                sum = sum + Number(temp);
                temp = "";
            }
        }
    }
    return sum;
};
let str = "“add123456with376765willgive887686”";
console.log(sumOfNumbers(str)); //output: 1387907