function myAlbum(artistName:string, albumTitle:string){
    return{artistName,albumTitle}
}

let album1 = myAlbum("ali","rang-e-mohabbat");
let album2 = myAlbum("madad","roshan-e-andhera");
let album3 = myAlbum("ayaz","mausam-e-dil");

console.log(album1);
console.log(album2);
console.log(album3);

function myAlbum2(artistName:string, albumTitle:string,numberOfTracks?:number){
    return{artistName,albumTitle,numberOfTracks}
}

let album4 = myAlbum2("ali","dil hai", 30);
let album5 = myAlbum2("babar","mohabbat", 55);
let album6 = myAlbum2("khan","ajeeb kahani",56);


console.log(album4);
console.log(album5);
console.log(album6);
