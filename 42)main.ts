function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicias:string[]){
    console.log(magicias.map(name => `the great ${name}`));
}

let magician_names = ["david","harry","john","mickle"];

let great_magicians = make_great(magician_names)
console.log(show_magicians(magician_names));