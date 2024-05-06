import { useState } from "react"
import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

function App() {
  const [count, setCount]=useState<number>(1)
  
  const title : string ="Hello World"
  return (
    <div>
      <Heading title={title}/>
      <Section title={"Another title"}>This is the children</Section>
      <Counter setCount={setCount}>{count}</Counter>
      <List items={['Coffe','Tacos','code']} render={(item: string)=><span className="gold">{item}</span>}/>
     
    </div>
  )
}

export default App
