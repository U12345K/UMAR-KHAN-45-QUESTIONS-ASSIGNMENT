type car = {
    manufacture: string
    model:string
    [key:string]:any;
}

function create_car(manufacture:string,model:string,optional:Record<string,any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}

const myCar:car=create_car("toyota","corola",{colour:"silver",year:"2024"})
console.log(myCar)