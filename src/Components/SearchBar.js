import React, { useState } from 'react'
import { v4 } from 'uuid';
import "./SearchBar.scss"
import { connect } from 'react-redux';
import { ADD_TODO } from '../context/action.types';
const SearchBar = ({addTodo}) => {
  const [text , changeText] = useState("");

  const handleSubmit = () => {
    if(text === "") return alert("Oops !");
    addTodo({
      id : v4(),
      title : text,
      isChecked : false
    })
    changeText("");
  }
 
  return (
    <div className="search-container">
      <input type="text" placeholder='Add your task' value={text}
      onChange={(e)=>{
        changeText(e.target.value);
      }} onKeyDown={(e)=>{
        if(e.key === "Enter"){
          handleSubmit();
        }
      }} />
      <button onClick={(e)=>{
          handleSubmit();
      }}>ADD</button>
    </div>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch({
        type:ADD_TODO,
        payload:todo
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);