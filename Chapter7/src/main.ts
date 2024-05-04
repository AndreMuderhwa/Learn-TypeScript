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
const userArray=[
    {
      "id": 1,
      "email": "test@test.com",
      "name": "test@test.com",
      "given_name": "Hello",
      "family_name": "Test",
      "nickname": "test",
      "last_ip": "94.121.163.63",
      "logins_count": 15,
      "created_at": "2016-11-28T14:10:11.338Z",
      "updated_at": "2016-12-02T01:17:29.310Z",
      "last_login": "2016-12-02T01:17:29.310Z",
      "email_verified": true
    },
    {
      "id": 2,
      "email": "test1@test.com",
      "name": "test1@test.com",
      "given_name": "Hello1",
      "family_name": "Test1",
      "nickname": "test1",
      "last_ip": "94.121.168.53",
      "logins_count": 1,
      "created_at": "2016-11-28T16:00:04.209Z",
      "updated_at": "2016-11-28T16:00:47.203Z",
      "last_login": "2016-11-28T16:00:47.203Z",
      "email_verified": true
    },
    {
      "id": 3,
      "email": "aaa@aaa.com",
      "name": "aaa@aaa.com",
      "given_name": "John",
      "family_name": "Dough",
      "nickname": "aaa",
      "last_ip": "94.121.168.53",
      "logins_count": 2,
      "created_at": "2016-11-28T16:12:23.777Z",
      "updated_at": "2016-11-28T16:12:52.353Z",
      "last_login": "2016-11-28T16:12:52.353Z",
      "email_verified": true
    },
    {
      "id": 4,
      "email": "a@a.com",
      "name": "a@a.com",
      "given_name": "Jane",
      "family_name": "Dough",
      "nickname": "a",
      "last_ip": "94.121.163.63",
      "logins_count": 3,
      "created_at": "2016-12-01T23:59:16.473Z",
      "updated_at": "2016-12-01T23:59:53.474Z",
      "last_login": "2016-12-01T23:59:53.474Z",
      "email_verified": true
    },
    {
      "id": 5,
      "email": "test9999@test.com",
      "given_name": "Dummy",
      "family_name": "User",
      "created_at": "2016-12-09T12:01:23.787Z",
      "updated_at": "2016-12-09T12:01:23.787Z",
      "email_verified": false
    }
  ]

console.log(getUserProperty(userArray,"family_name"))

class StateObject <T>{
    private data: T
    constructor(value : T){
        this.data=value
    }
    get state():T{
        return this.data
    }
    set state(value : T){
        this.data=value
    }
}

const store=new StateObject("Andrew A.") //here we the said that the type of the class will be the string type and we can't assign other type
console.log(store.state)

const mystore = new StateObject<(string | number | boolean)[]>([]) //it is the way to specify the type of the class
mystore.state=(["Andrew","hello",true])
console.log(mystore)