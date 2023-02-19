let p_name:string="shahzeb khan";
console.log("Person Name in lower Case: "+p_name.toLowerCase());
console.log('Person Name in Upper Case: '+p_name.toUpperCase());

const mySentence = p_name;
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}


console.log('Person Name in Title Case: '+words);