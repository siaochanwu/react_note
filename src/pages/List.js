import React from 'react';
import Item from './Item';


const List = ({ data, deleteData, submitStatus }) => {
    
    return <div>
    {
        data.map((item) => {
            const { note, type, date, time, id} = item;
            return  <Item note={note} type={type} date={date} time={time} key={id} id={id} deleteData={deleteData} submitStatus={submitStatus} />
        })
    }
    </div>
}

export default List;