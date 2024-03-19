import React ,{useState} from 'react'
import Square from './Square'
import './Board.css'

const Board = () => {
   const [state, setState] = useState(Array(9).fill(null));
   const [isXTurn, setIsXTurn] = useState(true);

   const checkWinner = () => {
       const logicWinner = [
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],
           [1, 4, 7],
           [2, 5, 8],
           [0, 4, 8],
           [2, 4, 6]
       ];

       for (let logic of logicWinner) {
           const [a, b, c] = logic;
           if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
               return state[a]; // Return the winning player's symbol
           }
       }

       return null;
   };

   const checkDraw = () => {
       for (let i = 0; i < state.length; i++) {
           if (state[i] === null) {
               return false; // There are still empty squares, not a draw
           }
       }
       return true; // All squares are filled, it's a draw
   };

   const handleClick = (index) => {
       if (state[index] !== null) {
           return;
       }
       let copyState = [...state];
       copyState[index] = isXTurn ? 'X' : '0';
       setState(copyState);
       setIsXTurn(!isXTurn);
   };

   const winner = checkWinner();
   const isDraw = checkDraw();

   const handleReset = () => {
       setState(Array(9).fill(null));
       setIsXTurn(true);
   };

   return (
       <div>
           {winner ? (
               <div>
                   <h1 style={{color:"black"}}>{winner} is the winner</h1>
                   <button onClick={handleReset}>Play Again</button>
               </div>
           ) : isDraw ? (
               <div>
                   <h1 style={{color:"black"}}>It's a draw</h1>
                   <button onClick={handleReset}>Play Again</button>
               </div>
           ) : (
               <div>
                   <div className='main'>
                       <Square value={state[0]} onClick={() => handleClick(0)} />
                       <Square value={state[1]} onClick={() => handleClick(1)} />
                       <Square value={state[2]} onClick={() => handleClick(2)} />
                   </div>
                   <div className='main'>
                       <Square value={state[3]} onClick={() => handleClick(3)} />
                       <Square value={state[4]} onClick={() => handleClick(4)} />
                       <Square value={state[5]} onClick={() => handleClick(5)} />
                   </div>
                   <div className='main'>
                       <Square value={state[6]} onClick={() => handleClick(6)} />
                       <Square value={state[7]} onClick={() => handleClick(7)} />
                       <Square value={state[8]} onClick={() => handleClick(8)} />
                   </div>
               </div>
           )}
       </div>
   );
};

export default Board;