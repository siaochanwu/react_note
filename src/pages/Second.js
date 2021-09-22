import React from "react";
import { useState, useEffect } from "react";
import Nav from './partials/Nav';
import { useSelector } from 'react-redux';
import Task from "./Task";

const Second = () => {
    
    const [count, setCount] = useState(0)
    const todoList = useSelector(state => state.todoList)

    useEffect(() => {
        console.log('after render')
        return () => {
            console.log('cancel exec')
        };
    }, []);

    useEffect(() => {
        console.log('now count is'+ count)
    }, [count]);

    const [stop, setStop] = useState(false)

    useEffect(() => {
        console.log(stop)
        return () => {
            
        };
    }, [stop]);

    return (
        <div>
            <Nav />
            <h1>Second Page</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setStop(!stop)}>stop/continue</button>
            {todoList.map(todo => (
                <Task key={todo} task={todo} />
            ))}
        </div>
    )
}

export default Second;