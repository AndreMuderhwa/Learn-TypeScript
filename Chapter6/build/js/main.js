"use strict";
//Index signatures
const todaytransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
// console.log(todaytransactions.Pizza) //same result with the second synthax
// console.log(todaytransactions['Pizza'])
let prop = 'Pizza';
// console.log(todaytransactions[prop])
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
const student = {
    name: "Julien",
    GPA: 3.5,
    classes: [1200, 300]
};
// console.log(student.test)
// for(const key in student){
//     // console.log(`${key}: ${student[key]}`)
//     console.log(`${key}: ${student[key as keyof Student]}`)
// }
// Object.keys(student).map((key)=>{
//     console.log(`${key}: ${student[key as keyof typeof student]}`) // the same result with the first one
// })
// Object.keys(student).map((id)=>{
//     console.log(`${id}: ${student[id as keyof typeof student]}`)
// })
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 200,
    sidehustle: 25
};
Object.keys(monthlyIncomes).map((el) => {
    console.log(`${el}: ${monthlyIncomes[el]}`);
});
