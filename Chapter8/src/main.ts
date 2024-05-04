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
//continue at 3:36:49