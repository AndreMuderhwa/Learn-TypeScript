"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; //less specific
let c = a; //more specific
let d = 'hello'; //other way
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 5, 'concat');
let nextVal = addOrConcat(2, 5, 'concat');
11;
//the DOM
const image = document.querySelector("idImage");
const img = document.getElementById("#idImg");
let nextImg = document.getElementById('#img');
image.src;
img.src;
