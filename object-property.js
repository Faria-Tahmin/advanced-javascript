const student = [
    { id: 1961, name: "ria" },
    { id: 1960, name: "riad" },
    { id: 1963, name: "risan"},
    { id: 1964, name: "pia" }

];

const nameStudent = [];
for ( let i =0 ; i<student.length;i++)
{
    const name = student[i].name;
    nameStudent.push(name);
}
console.log(...nameStudent);

const nameList = student.map(s=> s.name);
console.log(nameList);
const id = student.map(i=> i.id);
console.log(id);

const id1961 = student.filter(i=> i.id>1961);
console.log(id1961);

const id1961Find = student.find(i=> i.id>1961);
console.log(id1961Find);
