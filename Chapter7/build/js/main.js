"use strict";
//generics
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg != null);
};
console.log(isObj(true));
console.log(isObj('Jimmy'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'jimmy' }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
console.log(processUser({ id: 2, name: "David" }));
const getUserProperty = (users, key) => {
    return users.map((user) => user[key]);
};
