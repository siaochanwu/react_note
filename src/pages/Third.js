import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './partials/Nav';
import Hello from './Hello';
import Task from './Task';
import { addTodo } from '../action/todolist';


const Third = (props) => {

    const names = ['peter', 'sophia', 'winnie']
    
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todoList)
    const [newTodo, setNewTodo] = useState('')

    return (
        <div>
            <Nav />
            <h1>Third</h1>
            <Hello names={names} />
            <div value={todoList}>
                <span>{`待辦事項數: ${todoList.length}`}</span>
                <div>
                    <input value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}} />
                    <button type="button" onClick={() => {dispatch(addTodo(newTodo))}}>新增事件</button>
                </div>
                {todoList.map(task => (
                    <Task key={task} task={task} />
                ))}
            </div>
        </div>
    )
}


export default Third;