class Coder{
    otherLang !: string // on a ajoute le ! pour avoid les erreurs
    constructor(
        public readonly name:string,
        public music: string,
        private age: number,
        protected lang: string ="TypeScript"
    ){
        this.name=name
        this.music=music
        this.age=age
        this.lang=lang
        
    }
    public getAge(){
        return `Hello i'm ${this.age}`
    }
}

const Andrew=new Coder("Andrew","zouk",25,"TypeScript")
// console.log(Andrew.getAge())
const Gla=new Coder("Andrew","zouk",25)
// console.log(Gla.getAge())

class WebDev extends Coder{
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ){
        super(name,music,age)
        this.computer=computer
    }
    public getLang(){
        return `I write ${this.lang}`
    }
}
const Lydia=new WebDev("Asus zenbook 16X","Lydia","zouk",24)
// console.log(Lydia.getLang())
//------------------------------------------------------------------------------------------------------


interface Musician{
    name: string,
    instrument: string,
    play(action: string): string

}

class Guitarist implements Musician{
    name: string
    instrument: string
    constructor(name: string, instrument: string){
        this.name=name
        this.instrument=instrument
    }
    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Chrison=new Guitarist("Chrison","guitar")
console.log(Chrison.play("strums"))

class Peeps{
    static count: number=0
    static getCount(): number{
        return Peeps.count
    }
    public id: number
    constructor(public name: string){
        this.name=name
        this.id=++Peeps.count

    }
}

const John=new Peeps('John')
const Steve=new Peeps('Steve')
const Amy=new Peeps('Amy')
//console.log(Peeps.count)
// console.log(Amy.id)
//------------------------------------------------------------------------------------------------------------------
class Bands{
    private dataState: string[]
    constructor(){
        this.dataState= []
    }

    public get data(): string[]{
        return this.dataState
    }
    public set data(value: string[]){
        if(Array.isArray(value) && value.every((el)=> typeof el === 'string')){
            this.dataState=value
            return
        }else throw new Error("Parameter is not a string array")
    }
}

const mybands=new Bands()
mybands.data=['Hello','Hi','Coucou']
console.log(mybands.data)
mybands.data=[...mybands.data,'Salut','bonjour','bonsoir']
console.log(mybands.data)
