function make_sandwiches(...items:string[]):void{
    console.log("sandwich order:");

    for (let i= 0; i< items.length;i++){
        console.log(`-${items[i]}`);
    }
}

make_sandwiches(`capsicum`);
make_sandwiches(`beef`);
make_sandwiches(`garlic`);

console.log("enjoy your sandwich umar khan");               

 