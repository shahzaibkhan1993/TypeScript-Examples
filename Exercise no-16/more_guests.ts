let More_guests=["Anber","Nuzba","Babar","Sumaria","Qadir Badshah"];

for(let i=0; i<More_guests.length;i++){
console.log("Dear, "+More_guests[i]+ " I would like to invite you to dinner at my home on Saturday night, Please let me know if you can attend.");
}

let splice_guest = More_guests.splice(3,1,"Ashraf Hussain");//Sumaria can't make the dinner
console.log(splice_guest+" can't make the dinner let invite Ashraf Hussain in replace of Sumaira");
//change_guests.push("Ashraf")

More_guests.forEach(guest => {
    console.log("Hi, "+guest+" I would like to invite you to dinner at my home on saturday night, please")
})

console.log("I found a bigger dinner table lets invite more friends");
More_guests.unshift("Asher John");
More_guests.splice(3,0,"Asad");
More_guests.push("Shehroz");

More_guests.forEach(guest=>{
console.log("My Dear, "+ guest +" I would like to invite you to dinner");
})