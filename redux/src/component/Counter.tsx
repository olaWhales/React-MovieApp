import React from "react";
import { increment , decrement , reset } from "../feature/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";  // this takes in the state
import { RootState } from "../store/store";


const Counter = ()=> {
    
  const count = useSelector((state : RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
        <h1>{count}</h1>
           <button onClick={()=>{dispatch(increment())}}><h1>+</h1></button>
           <button onClick={()=>{dispatch(decrement())}}><h1>-</h1></button>
           <button onClick={()=>{dispatch(reset())}}><p>reset</p></button>
    </div>
  )
}

export default Counter ;