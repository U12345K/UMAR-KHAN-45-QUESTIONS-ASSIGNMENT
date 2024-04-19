let car:string=`subaru`;
let age:number=25;
let number=[]=[1,2,3,4];

//equality true
console.log("is car = `subaru`? i predict true.");
console.log(car = `subaru`);

//equality false
console.log("is car === `subar`? i predict false.");
console.log(car === `subaru`);

//inequqlity true
console.log("is car != `toyota`? i predict true.");
console.log(car !=`toyota`);


//inequality false
console.log("is car !== `subaru`? i predict false.");
console.log(car !==`subaru`);

//lower case true
console.log("is car.toLowercase() == `subaru`? i predict true.");
console.log(car.toLowerCase()==`subaru`);

//lowercase false
console.log("is car.toLowercase() === `subaru`? i predict false.");
console.log(car===car.toLowerCase());

//numerical
console.log("is age = 25? i predict true");
console.log(age = 25);

console.log("is age != 30? i predict true");
console.log(age != 30);
