//generics

const echo=<T>(arg: T): T => arg
const isObj=<T>(arg: T): boolean=>{
    return (typeof arg ==="object" && !Array.isArray(arg) && arg!=null)
}

console.log(isObj(true))
console.log(isObj('Jimmy'))
console.log(isObj([1,2,3]))
console.log(isObj({name:'jimmy'}))
console.log(isObj(null))

const isTrue=<T>(arg: T):{arg:T,is:boolean}=>{
    if(Array.isArray(arg) && !arg.length){
        return {arg,is:false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg,is:false}
    }
    return {arg,is:!!arg}
}

interface HasID{
    id: number
}

const processUser=<T extends HasID>(user: T):T =>{
    return user
}
console.log(processUser({id:1, name:"Dave"}))
console.log(processUser({id:2, name:"David"}))

const getUserProperty=<T extends HasID, K extends keyof T>(users: T[], key: K): T[K][]=>{
    return users.map((user)=> user[key])
}