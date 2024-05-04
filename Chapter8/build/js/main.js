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
