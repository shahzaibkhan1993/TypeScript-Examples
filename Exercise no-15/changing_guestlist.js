"use strict";
let change_guests = ["Anber", "Nuzba", "Babar", "Sumaria", "Qadir Badshah"];
for (let i = 0; i < change_guests.length; i++) {
    console.log("Dear, " + change_guests[i] + " I would like to invite you to dinner at my home on Saturday night, Please let me know if you can attend.");
}
let splice = change_guests.splice(3, 1, "Ashraf Hussain"); //Sumaria can't make the dinner
console.log(splice + " can't make the dinner let invite Ashraf Hussain in replace of Sumaira");
//change_guests.push("Ashraf")
change_guests.forEach(guest => {
    console.log("Hi, " + guest + " I would like to invite you to dinner at my home on saturday night, please");
});
