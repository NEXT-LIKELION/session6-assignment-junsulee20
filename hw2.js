// (1)
const person = {
    name: "David",
    city: "London",
    age: 30,
};

for (const key in person) {
    const value = person[key];
    const check = typeof value === "string" ? `${value} (확인됨)` : value;
    console.log(`${key}: ${check}`);
}


// (2)
const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];

let long_word = words.filter(value => value.length >= 5);
console.log(long_word)
