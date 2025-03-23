const jsonString = `
[
    {"id": 1, "name":"Alice", "age":25, "email":"alice@example.com"},
    {"id": 2, "name":"Bob", "age":30, "email":"bob@example.com"},
    {"id": 3, "name":"Charlie", "age":35, "email":"charlie@example.com"}
]
`;

// 변환
const data = JSON.parse(jsonString);

// 추출
const result = data.map(({ id, name, age }) => ({ id, name, age }));

console.log(result);



