import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { API_GET_DATA } from '../global/constants';
import Edit from './Edit';
import List from './List';


async function fetchData(setData) {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json() //data要用物件包
    setData(data)
}

async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
    })

}

const Home = () => {

    const [data, setData] = useState([]);
    const submitStatus = useRef(false)

    // useEffect(() => {
    //     //綁定事情
    //     window.alert("新增成功")
    //     return () => {
    //     //取消綁定的事情
    //     };
    // }, [data]);//連第一次也會跳alert

    useEffect(() => {
        if (!submitStatus.current) {
            return
        }
        fetchSetData(data)
        .then(data => submitStatus.current = false)
    }, [data]);

    useEffect(() => {
        fetchData(setData)
    }, []);

    return (
        <div style={divStyle}>
            <Edit add={setData} submitStatus={submitStatus} />
            <List data={data} deleteData={setData} submitStatus={submitStatus} />
        </div>
    )
}

const divStyle = {
    display: 'flex',
    width: '30%',
    flexDirection: 'column',
    fontSize: '16px',
    margin: '10px auto',
    padding: '10px',
    border: '2px solid red',
}

export default Home;