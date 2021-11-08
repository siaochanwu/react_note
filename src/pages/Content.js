import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataBegin } from "../action/todolist";

const Content = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    return(
        <div>
            <div>
                {data ? JSON.stringify(data): 'no data'}
            </div>
            <button type="button" onClick={() => {dispatch(fetchDataBegin())}}>
                get data btn
            </button>
        </div>
        
    )
}

export default Content;