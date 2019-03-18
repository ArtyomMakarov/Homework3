function drawTriangle(a,b) {
    let result = "";

    if (b >= 1 && b < 3) {
        for (let i = 0; i < 3; i++) {
            result += a;
            console.log(result);
        }
    } else {
        for (let i = 0; result.length < b; i++) {
            result += a;
            console.log(result);
        }
    }

}
drawTriangle('$',6);