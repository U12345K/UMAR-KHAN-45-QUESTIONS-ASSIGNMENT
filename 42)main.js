"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicias) {
    console.log(magicias.map(name => `the great ${name}`));
}
let magician_names = ["david", "harry", "john", "mickle"];
let great_magicians = make_great(magician_names);
console.log(show_magicians(magician_names));
