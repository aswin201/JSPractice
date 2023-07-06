function uniqueItem(arr) {
    let uniqueObj = {};

    for (let item of arr) {
        uniqueObj[item] = ++uniqueObj[item] || 1;
    }

    let uniqueNumber = Object.keys(uniqueObj);
    let apperOnceNumber = [];
    for (let item in uniqueObj) {
        if (uniqueObj[item] == 1) {
            apperOnceNumber.push(item);
        }
    }
    console.log(uniqueObj);
    return { uniqueNumber, apperOnceNumber };
}
