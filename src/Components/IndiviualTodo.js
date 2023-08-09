import React, { useEffect, useState } from "react";
import "./Indiviual.scss";
import { connect } from "react-redux";
import { CHECK, REMOVE_TODO, UNCHECK } from "../context/action.types";

const IndiviualTodo = ({todo, removeTodo , check , uncheck}) => {
    const [checked , setChecked] = useState(false);
    const style = {
        textDecoration : checked ? "line-through" : "none"
    }
    useEffect(()=>{
        setChecked(todo.isChecked);
    },[todo])

    const handleDelete = () => {
      console.log("Yup Delete " + todo.title);
      removeTodo(todo.id)
    }
  return (
    <div className="todo">
      <input type="checkbox" onClick={(e)=>{
            setChecked(e.target.checked);
            if(e.target.checked){
              check(todo.id);
            }else{
              uncheck(todo.id);
            }
            
      }} 
      checked={checked}
      />
      <p style={style}>{todo.title}</p>
      <img src="./close.png" alt="" onClick={(e)=>{
        handleDelete();
      }}/>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (id) => {
    dispatch({
        type:REMOVE_TODO,
        payload:id
    });
  },
  check: (id) => {
    dispatch({
      type : CHECK,
      payload: id
    })
  },
  uncheck: (id) => {
    dispatch({
      type : UNCHECK,
      payload: id
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(IndiviualTodo);
