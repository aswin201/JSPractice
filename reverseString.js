/* Using ES methods */
let str1="Aswani";
str=str.split('').reverse().join('');
console.log(str);


/* Using Array.slice() */
let str ="Aswani";
str=str.split('');
for(let i=0;i<str.length;i++){
    str.splice(i,0,str.pop());
}

/*Using For loop */
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('Epam');






