import { useCallback, useEffect, useState } from "react"
// import Heading from "./components/Heading"
// import { Section } from "./components/Section"
// import Counter from "./components/Counter"
// import List from "./components/List"
interface User{
    id: number,
    username: string
}

function App() {
  // const [count, setCount]=useState<number>(1)
  const [count, setCount]=useState<number>(0)
  const [users, setUsers]=useState<User[] | null>(null)
  
  // const title : string ="Hello World"
  useEffect(()=>{
    console.log("mounted")

    return()=>console.log("Unmounted")

  },[users])
  const addTwo = useCallback((): void=>setCount(prev =>prev+1), []);
  return (
    <div>
      {/* <Heading title={title}/>
      <Section title={"Another title"}>This is the children</Section>
      <Counter setCount={setCount}>{count}</Counter>
      <List items={['Coffe','Tacos','code']} render={(item: string)=><span className="gold">{item}</span>}/>
      */}
      <h2>Count {count}</h2>
      <button onClick={addTwo}>+</button>
    </div>
  )
}

export default App
