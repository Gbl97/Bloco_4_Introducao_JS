let n;


n = 5;

for (let n = 5; n > 1; n-=1) {
    
    if(n === 5){
        console.log(" *");
    } else if (n === 4) {
        console.log(" **");
    } else if (n === 3) {
        console.log(" ***");
    } else if (n === 2) {
        console.log(" ****");
        console.log("*****");
    } 
}