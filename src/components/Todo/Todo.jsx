import React from 'react'
import {useState} from 'react';
import Tile from '../Tiles/Tile';
import "./Todo.css";

const Input = () => {
  const[currentItem,setcurrentItem] = useState("");
  const[itemList,setItemList] = useState([]);
  const handleChange = (e)=>{
    setcurrentItem(e.target.value);
  }
  const addItem = ()=>{
    setItemList([...itemList,{item:currentItem,key:Date.now()}]);
    setcurrentItem("");
  }
  return(
     <div>
      <div className='main'>
        <h1>Todo List</h1>
        <div className='todo'>
          <input type="text" value={currentItem} onChange={handleChange}/>
          <button id='button' onClick={addItem}>Add</button>
        </div>
      </div>
        <Tile itemList={itemList} setItemList={setItemList}/>
     </div>
  )
}

export default Input