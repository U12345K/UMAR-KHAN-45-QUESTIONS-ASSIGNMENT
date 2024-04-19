let current_users:string[]=["babar","umar","adnan","sdmin"];
let new_users:string[]=["fawad","nisar","user7","admin","user9"];

new_users.forEach((newUser) => {
    if(
        current_users.some(
            (currentUser) =>currentUser.toLowerCase() === newUser.toLowerCase()
        )
){
    console.log(`${newUser} will need to enter a new username`);
}else{
    console.log(`${newUser} is available.`);
}
});