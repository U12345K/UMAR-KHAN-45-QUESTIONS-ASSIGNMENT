"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create_car(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const myCar = create_car("toyota", "corola", { colour: "silver", year: "2024" });
console.log(myCar);
