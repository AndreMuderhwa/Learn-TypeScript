// let username="Lydia"
// console.log(username)

// let a : number=12
// let b : number=6
// let c : number=2

// console.log(a/b)
// console.log(c*b)

//ABOUT TYPES
//IMPLICIT
let myName="Gla"
//EXPLCIT
let names : string;
let meaningOflife:number;
let isLoading: boolean;
let album : any; //peut recevoir les donnees de tout types(number, string, boolean, arrays,objects)
//union type
let musics: number | string;

names="GLA"
meaningOflife=129
isLoading=false

const sum=(a: number, b: string)=>{
    return a+b
}
let postId: number | string
let re:RegExp    //type regular expressions
re=/\w+/g