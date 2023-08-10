import React from 'react'
import SearchBar from './SearchBar'
import TodoList from './TodoList'
import "./Card.scss"
import { connect } from 'react-redux'

const Card = ({todos}) => {
    let temp = todos.length * 40;
    console.log(temp + "size");
  return (
    <div className="container" style={{
        height: (110 + todos.length * 40) + "px"
    }}>
      <h3>To-Do List 🏦</h3>
      <SearchBar />
      <TodoList />
    </div>
  )
}

const mapStateToProps = (state) => ({
    todos: state.reducer,
    
  });

  const mapDispatchToProps = (dispatch) => ({
    
  });

export default connect(mapStateToProps, mapDispatchToProps)(Card)