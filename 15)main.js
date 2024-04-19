"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = [`ali`, `farhan`, `raza`, `samad`, `adnan`];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`respected sir/madom :` + guest_list[i] + `,\nwe invited you for dinner tomorrow.\n\nthank you`);
}
let notPresent = `farhan`;
let newguest = `IMRAN KHAN`;
guest_list[1] = newguest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`respected sir/madom :` + guest_list[i] + `,\nwe invited you for dinner tomorrow.\n\nthank you`);
}
console.log(`Mr. ${notPresent} will not coming tomorrow dinner`);
