"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(nameOfCity, country = "Pakistan") {
    return `${nameOfCity} is in ${country}`;
}
;
let city1 = describe_city("Karachi");
let city2 = describe_city("Larkana");
let city3 = describe_city("Hyderabad");
let city4 = describe_city("Dubai", "UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
