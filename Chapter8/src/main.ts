//Utility types

//Partial
interface Assignment{
  studentID:string,
  title: string,
  grade: number,
  verified?:boolean
}

const updateAssignment=(assignment: Assignment, propsToUpdate : Partial<Assignment>):Assignment=>{
  return {...assignment,...propsToUpdate}
}

const assign1: Assignment={
  studentID:"compsc124389",
  title:"Final Project",
  grade:0
}

//console.log(updateAssignment(assign1,{grade:98}))
const assignGraded: Assignment = updateAssignment(assign1,{grade:98})

//Required and Read only

const recordAssignment=(assign: Required<Assignment>): Assignment=>{
  return assign
}

const assignVerified: Readonly<Assignment> = {...assignGraded, verified: true}

recordAssignment({...assignGraded,verified:true})

//Record
const HexColorMap: Record<string, string>={
  red: "#FF0000",
  green:"#00FF00",
  blue:"#0000FF"
}
type Students="Sarah" | "Kelly"
type LetterGrades="A" | "B" | "C" | "D" | "U"

const finalGrades : Record<Students,LetterGrades>={
  Sarah:"B",
  Kelly:"U"
}
interface Grades{
  assign1: number,
  assign2: number
}

const gradeData: Record<Students, Grades>={
  Sarah:{assign1:80, assign2:98},
  Kelly:{assign1:76, assign2:15}
}

//Pick and Omit
type AssignResult=Pick<Assignment, "studentID" | "grade">

const score: AssignResult={
  studentID:"Kc32",
  grade:89
}
type AssignPreview=Omit<Assignment, "grade"| "verified">

const preview : AssignPreview={
    studentID:"Kc32",
    title:"Final Project"

}

//Extract and Exclude
type adjustedGrade = Exclude<LetterGrades, "U">
type highGrade = Extract<LetterGrades, "A" | "B">

//Nonnullable

type AllPossibleGrades ="Dave" | "John" | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

//Return type

//type newAssign ={title: string, points: number}
const createNewAssign =(title: string, points: number)=>{
  return {title, points}
}
type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign=createNewAssign("Utility Types",100)
console.log(tsAssign)

//Parameters
type AssignParameters=Parameters<typeof createNewAssign>

const assignArgs: AssignParameters =["Generics",100]
const tsAssign2: NewAssign =createNewAssign(...assignArgs)
console.log(tsAssign2)

//Awaited : help us to know the returntype of a promise

interface User{
  id: number,
  name: string,
  username: string,
  email: string
}

const fetchUsers =async (): Promise<User[]> =>{
  const data =await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then( res => {
    return res.json()
  }).catch(err =>{
    if(err instanceof Error) console.log(err.message)
  })
  return data
}

type fetchUserReturntype = Awaited<ReturnType<typeof  fetchUsers>>

fetchUsers().then((user)=> console.log(user))