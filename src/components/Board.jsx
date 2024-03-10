import React ,{useState} from 'react'
import Square from './Square'
import './Board.css'

const Board = () => {
  
    const [state,setState] = useState(Array(9).fill(null))
    const [isXTurn,setIsXTurn] = useState(true)
    console.log(state)
    
    const handleClick = (index)=>{
       let copyState = [...state]
       copyState[index] = isXTurn?'X':'0'
       setState(copyState)
       setIsXTurn(!isXTurn)
        

    }
  return (
    <div>
        <div className='main'>
           <Square  value = {state[0]} onClick={()=>handleClick(0)} />
           <Square value = {state[1]} onClick={()=>handleClick(1)}/>
           <Square value = {state[2]} onClick={()=>handleClick(2)}/>
        </div>
        <div className='main'>
           <Square value = {state[3]} onClick={()=>handleClick(3)}/>
           <Square value = {state[4]} onClick={()=>handleClick(4)}/>
           <Square value = {state[5]} onClick={()=>handleClick(5)}/>
        </div>
        <div className='main'>
           <Square value = {state[6]} onClick={()=>handleClick(6)}/>
           <Square value = {state[7]} onClick={()=>handleClick(7)}/>
           <Square value = {state[8]} onClick={()=>handleClick(8)}/>
        </div>

    </div>
  )
}

export default Board