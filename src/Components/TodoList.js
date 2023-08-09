import React, { useEffect } from 'react'
import "./TodoList.scss"
import IndiviualTodo from './IndiviualTodo'
import { connect } from 'react-redux'
import { ADD_TODOs_FROM_LOCAL_STORAGE } from '../context/action.types'

const TodoList = ({todos , addFromLocalStorage}) => {

  useEffect(()=>{
    const localTodos = localStorage.getItem("maawan");
    if(localTodos !== undefined && localTodos !== null){
        addFromLocalStorage(JSON.parse(localTodos));
        console.log(JSON.parse(localTodos));
    }

},[]);

useEffect(() => {
  if(todos === undefined || todos === null){
  }else{
      localStorage.setItem("maawan" , JSON.stringify(todos));
  }
} , [todos]);

  
  
  return (
    <div className="todo-list">
      {
        
        todos.map(todo => (
          <IndiviualTodo todo={todo} />
        ))
      }
        
    </div>
  )
}
const mapStateToProps = (state) => ({
  todos : state.reducer
});

const mapDispatchToProps = (dispatch) => ({
  addFromLocalStorage: (data) => {
    dispatch({
      type : ADD_TODOs_FROM_LOCAL_STORAGE,
      payload: data
    })
  }
});




export default connect(mapStateToProps, mapDispatchToProps)(TodoList)