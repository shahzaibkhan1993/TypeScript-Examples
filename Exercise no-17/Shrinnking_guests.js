"use strict";
let shrink_guests = ["Anber", "Nuzba", "Babar", "Sumaria", "Qadir Badshah"];
for (let i = 0; i < shrink_guests.length; i++) {
    console.log("Dear, " + shrink_guests[i] + " I would like to invite you to dinner at my home on Saturday night, Please let me know if you can attend.");
}
let spliceguest = shrink_guests.splice(3, 1, "Ashraf Hussain"); //Sumaria can't make the dinner
console.log(spliceguest + " can't make the dinner let invite Ashraf Hussain in replace of Sumaira");
//change_guests.push("Ashraf")
shrink_guests.forEach(guest => {
    console.log("Hi, " + guest + " I would like to invite you to dinner at my home on saturday night, please");
});
console.log("I found a bigger dinner table lets invite more friends");
shrink_guests.unshift("Asher John");
shrink_guests.splice(3, 0, "Asad");
shrink_guests.push("Shehroz");
shrink_guests.forEach(guest => {
    console.log("My Dear, " + guest + " I would like to invite you to dinner");
});
console.log("Our new dinner table won’t arrive in time for the dinner, and we have space for only two guests.");
while (shrink_guests.length > 2) {
    let removed_guest = shrink_guests.pop();
    console.log("Sorry " + removed_guest + " you are no longer invited to dinner!");
}
console.log(shrink_guests[0] + " and " + shrink_guests[1] + " you're still invited to dinner!");
shrink_guests.pop();
shrink_guests.pop();
console.log("End of the dinner program there is no guest left: " + shrink_guests);
