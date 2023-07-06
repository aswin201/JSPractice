let sent = "The quick brown fox jumps over the lazy dog";

const panagram = (str) => {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    alf = alphabets.split("");
    str = str.toLowerCase();

    for (const element of str) {
        if (alf.indexOf(element !== 0)) {
            let x = alf.splice(alf.indexOf(element, x));
        }
    }

    return alf.length === 0 ? true : false;
};

console.log(panagram(sent));