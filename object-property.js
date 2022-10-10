const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannaaaaaa'},
    {id: 41, name: 'Moyori'},
    {id: 71, name: 'Deepjol'},

]; 

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.find( s => s.id>40);

console.log(bigger);
