let guest_list: string[]=[`ali`,`farhan`,`raza`,`samad`,`adnan`];
//  for(let i=0; i<guest_list.length; i++){
//     console.log(`respected sir/madom :`+guest_list[i]+ `,\nwe invited you for dinner tomorrow.\n\nthank you`);
//  }
//  let notPresent: string = `farhan`;
 let newguest: string = `IMRAN KHAN`;
// //  guest_list[1]=newguest;
// //  for(let i=0; i<guest_list.length; i++){
// //     console.log(`respected sir/madom :`+guest_list[i]+ `,\nwe invited you for dinner tomorrow.\n\nthank you`);
//    //  console.log(`Mr. ${notPresent} will not coming tomorrow dinner`);
// }
 guest_list.unshift(`Babar`,`Imran khan`,`Saim`);
//  for(let i=0; i<guest_list.length; i++){
//    console.log(`respected sir/madom :`+guest_list[i]+ `,\nwe found a bigger dinner table so now more space is availabe and we think to invite you.\n\nthank you`);
//  }
console.log(`\nUnfortunately we can not arrange big table , Only two people allow `);
while(guest_list.length>2){
  let remove_guest=guest_list.pop();
  console.log(`sorry sir/madom. ${remove_guest} you are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i++){
  console.log(`respected sir/madom :`+guest_list[i]+ `,\nyes you are still invited on tomorrow dinner.\n\nthank you`);
}
guest_list.splice(0,2);
console.log(guest_list);