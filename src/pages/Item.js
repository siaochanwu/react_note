import React from 'react';


const Item = ({note, type, date, time, id, deleteData, submitStatus}) => {

    function deleteItem() {
        submitStatus.current = true
        deleteData(function(prev) {
            console.log(prev)
            return prev.filter((item) => item.id !== id)
        })
    }

    return <div style={divStyle}>
        <p>{note} - {type} - {date} - {time}</p>
        <button style={btnStyle} onClick={deleteItem}>delete</button>
        </div>
}

const divStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
}

const btnStyle = {
    padding: "5px",
    height: "30px",
    background: "red",
    color: "#fff",
}

export default Item;