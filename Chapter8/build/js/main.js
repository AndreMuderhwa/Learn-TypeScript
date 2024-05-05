"use strict";
//Utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const score = {
    studentID: "Kc32",
    grade: 89
};
const preview = {
    studentID: "Kc32",
    title: "Final Project"
};
//Return type
//type newAssign ={title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((user) => console.log(user));
