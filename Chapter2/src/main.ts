let stringArr=['one','hello','guys']
let guitars=['Stat','Les Paul',5120]
let mixedData=['Hi',436, true]

stringArr[0]='type'
stringArr.push('try block')
guitars[0]="hey"

guitars.unshift(5766) //add element to the first position

let test=[]
let bands : string[]=[] //create variable bands with type strings array and assign that string array to empty array

//tuples

let myTuple :[string,number,boolean]=['Gloire',25,true]
// console.log(myTuple)

// let mixed =['Hello',32,false]

// mixed=myTuple
// myTuple=mixed

//OBJECTS
let myObj: object
myObj=[]
myObj=bands
myObj={}

const exempleObj={
    name:"Andrew",
    age:25,
    isActive:true
}

exempleObj.name="Gloire"
// console.log(typeof(myObj))

type Guitarist={
    name:string,
    active: boolean,
    isLive?: boolean,  // le point d'interrogation signifie que isLive n'est pas obligatoire
    albums:(string | number)[]
}
// interface Guitarist {
//     name:string,
//     active: boolean,
//     isLive?: boolean,  // le point d'interrogation signifie que isLive n'est pas obligatoire
//     albums:(string | number)[]
// }
//l'utilisation du mot cle type c'est lorsqu'on definit un object mais interface lorsqu'on definit une classe

let evh: Guitarist={
    name: 'Eddie',
    active: false,
    isLive:false,
    albums:[123,134,'oui']

}
let jp: Guitarist={
    name: 'Jimmy',
    active: true,
    albums:['Onboarding',436,'Yes']

}

// console.log(typeof evh)

const greetGuitarist=(guitarist : Guitarist)=>{
    return `Hello ${guitarist.name}`
}

console.log(greetGuitarist(jp))