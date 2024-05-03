type One =string
type Two = string | number
type Three = 'hello'

//convert to more or less specific
let a : One = 'hello'
let b= a as Two  //less specific
let c = a as Three  //more specific

let d =<One> 'hello' //other way

const addOrConcat=(a: number,b: number, c: 'add' | 'concat'): number | string=>{
    if(c === 'add') return a+b
    return ''+a+b
}

let myVal : string =addOrConcat(2,5,'concat') as string
let nextVal : number = addOrConcat(2,5,'concat') as number

(11 as unknown) as string
//the DOM
const image=document.querySelector("idImage")as HTMLImageElement
const img =document.getElementById("#idImg") as HTMLImageElement
let nextImg = <HTMLImageElement> document.getElementById('#img')

image.src
img.src