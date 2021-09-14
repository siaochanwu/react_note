import React from 'react';
import Item from './Item';


const List = ({ data, deleteData, submitStatus }) => {
    
    return <div>
    {
        data.map((item) => {
            const { note, date, time, id} = item;
            return  <Item note={note} date={date} time={time} key={id} id={id} deleteData={deleteData} submitStatus={submitStatus} />
        })
    }
    </div>
}

export default List;