let placesToVisit = ["Japan", "Italy", "Australia", "Peru", "Thailand"];

console.log("Original order:");
console.log(placesToVisit);

console.log("Alphabetical order:");
console.log([...placesToVisit].sort());

console.log("Still in original order:");
console.log(placesToVisit);

console.log("Reverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

console.log("Still in original order:");
console.log(placesToVisit);

console.log("Reversed order:");
console.log(placesToVisit.reverse());

console.log("Back to original order:");
console.log(placesToVisit.reverse());

console.log("Alphabetical order:");
console.log(placesToVisit.sort());

console.log("Reverse alphabetical order:");
console.log(placesToVisit.sort().reverse());
