import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  if(count < 0 ){
    setCount(0);
    alert("Counter cannot be negative");
  }else if(count > 10){
    setCount(10);
    alert("Counter cannot be greater than 10");
  }
  return (
    <div style={{backgroundColor:"crimson", color:"white", height:"100vh",width:"100vw", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <h1>Hello jitendra</h1>
      <h2>Counter: {count}</h2>
      <div style={{display:"flex", width:"50%", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <button style={{color:"lightgreen", padding:"10px", borderRadius:"5px",marginRight:"10px",border:"2px solid black"}} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{color:"orangered", padding:"10px", borderRadius:"5px", border:"2px solid black"}} onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  )
}

export default App
