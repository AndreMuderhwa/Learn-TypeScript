"use strict";
//Utility types
const updateAssignment = (assignment, propsToUpdate) => {
    return Object.assign(Object.assign({}, assignment), propsToUpdate);
};
const assign1 = {
    studentID: "compsc124389",
    title: "Final Project",
    grade: 0
};
//console.log(updateAssignment(assign1,{grade:98}))
const assignGraded = updateAssignment(assign1, { grade: 98 });
//Required and Read only
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//Record
const HexColorMap = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};
const finalGrades = {
    Sarah: "B",
    Kelly: "U"
};
const gradeData = {
    Sarah: { assign1: 80, assign2: 98 },
    Kelly: { assign1: 76, assign2: 15 }
};
//Pick and Omit
//continue at 3:36:49
