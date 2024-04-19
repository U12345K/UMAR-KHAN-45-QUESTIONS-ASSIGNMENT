"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  lower case
let personname = "Umar";
console.log("lowercase:", personname.toLowerCase());
// uper case
console.log("upercase:", personname.toLocaleUpperCase());
// title case
console.log("titlecase:", personname.replace(/\bw/g, c => c.toUpperCase()));
