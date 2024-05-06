
import Counter from './Counter'
import './App.css'

function App() {


  return (
    <div> 
      <Counter>{(num: number)=> <div>Current Count: {num}</div>}</Counter>
    </div>
    
  )
}

export default App
