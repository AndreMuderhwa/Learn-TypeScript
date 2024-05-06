import './App.css'
import Counter from './Counter'
import { CounterProvider } from './context/CounterContext'
import { initState } from './context/CounterContext'


function App() {


  return (
    <div> 
      <CounterProvider count={initState.count} text={initState.text}>
            <Counter>{(num: number)=> <div>Current Count: {num}</div>}</Counter>
      </CounterProvider>
    </div>
    
  )
}

export default App
