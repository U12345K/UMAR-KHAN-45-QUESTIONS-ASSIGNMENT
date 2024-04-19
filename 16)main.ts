let guest_list: string[]=[`ali`,`farhan`,`raza`,`samad`,`adnan`];
//  for(let i=0; i<guest_list.length; i++){
//     console.log(`respected sir/madom :`+guest_list[i]+ `,\nwe invited you for dinner tomorrow.\n\nthank you`);
//  }
//  let notPresent: string = `farhan`;
 let newguest: string = `IMRAN KHAN`;
//  guest_list[1]=newguest;
 for(let i=0; i<guest_list.length; i++){
    console.log(`respected sir/madom :`+guest_list[i]+ `,\nwe invited you for dinner tomorrow.\n\nthank you`);
   //  console.log(`Mr. ${notPresent} will not coming tomorrow dinner`);
 }
 guest_list.unshift(`Babar`,`Rizwan`,`Saim`);
 for(let i=0; i<guest_list.length; i++){
   console.log(`respected sir/madom :`+guest_list[i]+ `,\nwe found a bigger dinner table so now more space is availabe and we think to invite you.\n\nthank you`);
 }