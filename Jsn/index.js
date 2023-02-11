const student = {
    name: "Chamoli",
    age: "20",
    college: "JNU",
};

console.log(student);

// Important method to stringify the object into json format (object -> JSON)
const jsnData = JSON.stringify(student);

// (Json -> object)
const obj = JSON.parse(jsnData);

console.log(jsnData);
console.log(obj);
