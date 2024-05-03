type stringOrnumber = string | number

type stringOrnumberArray= (string | number)[]

type Guitarist ={
    name ? : string,
    active : boolean,
    albums : stringOrnumberArray

}
type UserId =stringOrnumber

//LITTERAL TYPES
let myName : "Glo"
let useName : "Dave" | "Gray" | "Yellow"
//functions

const sumNumbers=(a: number, b: number):number =>{
    return a+b
}

const logMessage =(message: any): void=>{
    console.log(message)
}

logMessage("Hello")
// logMessage(436)
logMessage(sumNumbers(12,18))

let substract = function(a: number, b: number): number{
    return a-b
}
 type mathFunction =(a: number, b: number)=> number
// interface mathFunction{
//     (a: number, b: number): number
// }

let multiply : mathFunction =function(a,b){
    return a*b
}

logMessage(multiply(4,3))

//optional parameters
const addAll=(a: number, b: number, c?:number): number=>{
   if(typeof c !== 'undefined'){
    return a+b+c
   }
   return a+b
}
//default parameter value
const sumAll=(a: number=12, b: number, c:number): number=>{
     return a+b+c
 }
logMessage(addAll(3,3))
logMessage(sumAll(undefined,2,5))
//Rest paramters
