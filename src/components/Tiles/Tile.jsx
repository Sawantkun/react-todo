import React from 'react'
import { useState } from 'react'
import "./Tile.css"
import trash from "./assets/trash.svg"

const Tile = (props) => {
  const[searchValue,setsearchValue] = useState("Search Tasks");
  const handleChange=(e)=>{
    setsearchValue(e.target.value);
    itemList.filter((item)=>{
      if (item ===  e.target.value){
        console.log(item);
      }
    })
  }
  const clear=()=>{
    setsearchValue("");
  }
    const deleteItem=key=>{
     const newlist = props.itemList.filter(itemObj=>{
        return itemObj.key !== key;
      });
      props.setItemList(newlist);
    };

  return (
      <div className='tasks-sec'>
        <h1>All Tasks</h1>
        <input type="Search" value={searchValue} onChange={handleChange} onClick={clear}/>
        <div className='tasks'>
          {props.itemList.map(itemObj=>{
            return <div className='tile'>
                     {itemObj.item} 
                     <button onClick={()=>deleteItem(itemObj.key)}>
                       <img className='trash' src={trash} alt="" />
                     </button>
                   </div>
          })}
        </div>
      </div>
  )
}

export default Tile