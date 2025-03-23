const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
];

// status 추가
const result = users.map(({ name, age }) => ({name,age,status: age >= 19 ? "성인" : "미성년자"}));

console.log(result);


