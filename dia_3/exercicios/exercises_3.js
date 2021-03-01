let n = 5;
let carac = '*';
let inputline = '';
let inputPosition = n;


for (let indexLine = 0; indexLine <= n; indexLine += 1) {
    for (let indexColumn = 0; indexColumn <= n; indexColumn += 1) {
        if (indexColumn < inputPosition) {
            inputline = inputline + ' ';
        } else {
            inputline = inputline + carac;
        }
    }
    console.log(inputline);
    inputline = '';
    inputPosition -= 1;
}
