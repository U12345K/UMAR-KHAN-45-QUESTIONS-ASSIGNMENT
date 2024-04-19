"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    console.log(`"${city}, ${country}"`);
}
city_country("Karachi", "Pakistan");
let mycities = city_country("Karachi", "Pakistan");
console.log(mycities);
console.log(city_country("Dubai", "UAE"));
console.log(city_country("London", "United Kingdom"));
console.log(city_country("Riaz", "Saudia Arabia"));
