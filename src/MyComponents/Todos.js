import React from 'react'
import TodoItem from "./TodoItem";
const Todos = (props) => {
  let myStyle = {
    minHeight: "100vh",
  }
  return (
    <div className="container" style= {myStyle}>
        <h3 className='my-3'>Todos List</h3>
        {props.todos.length === 0? <p>No Todo to Display</p>:
          props.todos.map((todo)=>{
            return(
              <>
               <TodoItem todo ={todo} key={todo.sno} onDelete = {props.onDelete}/>
              <hr />
              </>
            )
          })
        }
        
    </div>
  )
}

export default Todos
