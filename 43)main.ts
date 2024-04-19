function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicias:string[]){
    console.log(magicias.map(name =>  `great ${name}`));
}

let magician_names:string[] = ["david","harry","john","mickle"];
let great_magicians = make_great(magician_names)