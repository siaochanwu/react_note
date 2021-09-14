import React from 'react';
import { useState } from 'react';
import { v4 } from 'uuid';

const Edit = ({ add, submitStatus } ) => {

    const [note, setNote] = useState("");
    const changeNote = (e) => {
        setNote(e.target.value)
    }

    const [type, setType] = useState("請選擇");
    const changeType = (e) => {
        setType(e.target.value)
    }

    const [date, setDate] = useState("");
    const changeDate = (e) => {
        setDate(e.target.value)
    }

    const [time, setTime] = useState("");
    const changeTime = (e) => {
        setTime(e.target.value)
    }

    function addItem() {
        submitStatus.current = true
        add(function(prevData) {
            console.log(prevData)
            return [{
                id: v4(),
                note,
                type,
                date,
                time,
            },
            ...prevData
            ]
        })
        setNote("");
        setType("請選擇")
        setDate("");
        setTime("");
    }

    return <div>
        <h3>記事本</h3>
        <p>Note:</p>
        <input style={inputStyle} type="text" name="" id="" value={note} onChange={changeNote} />
        <p>Type:</p>
        <select value={type} onChange={changeType}>
            <option value="請選擇" disabled>請選擇</option>
            <option value="聚餐">聚餐</option>
            <option value="運動">運動</option>
            <option value="玩樂">玩樂</option>
            <option value="其他">其他</option>
        </select>
        <p>Date:</p>
        <input style={inputStyle} type="date" name="" id="" value={date} onChange={changeDate} />
        <p>Time:</p>
        <input style={inputStyle} type="time" name="" id="" value={time} onChange={changeTime}  />
        <input style={submitStyle} type="submit" value="submit" onClick={addItem} />
    </div>
}

const inputStyle = {
    width: '100%',
}

const submitStyle = {
    width: '100%',
    background: 'black',
    color: '#fff',
    padding: '5px',
    margin: '10px 0',
}

export default Edit;