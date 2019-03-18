function setCapitalCase(str) {
    let stringArr = str.split(' ');
    let arrCase = [];
    let newString;

    for (let i = 0; i < stringArr.length; i++) {
        arrCase.push(stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1).toLowerCase());
    }

    newString = arrCase.join(' ');
    console.log(newString);
}
setCapitalCase("lorem ipsum stan");