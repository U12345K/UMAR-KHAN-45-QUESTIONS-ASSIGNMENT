"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", message = "I love typescript") {
    console.log(`making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "dive into coding");
