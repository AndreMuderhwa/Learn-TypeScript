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
