import  { ReactNode } from 'react'
type countProps={
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
    
}
const Counter = ({children, setCount}: countProps) => {
   
  return (
    <div>
        <h2>Counter is {children}</h2>
        <button onClick={()=>setCount(prev => prev+1)}>+</button>
        <button onClick={()=>setCount(prev => prev-1)}>-</button>
    </div>
  )
}

export default Counter