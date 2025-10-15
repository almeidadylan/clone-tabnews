//"use strict";
console.log("Hello World!");

function run() {
    for (let i = 0; i < 10; i++ ) {
        console.log(i);
        if ( i >= 100 || i <= -100) {
            break;
        };
    }
}

run();