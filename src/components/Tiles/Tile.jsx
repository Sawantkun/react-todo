import React from 'react'
import "./Tile.css"
import trash from "./assets/trash.svg"

const Tile = (props) => {
    const deleteItem=key=>{
     const newlist = props.itemList.filter(itemObj=>{
        return itemObj.key !== key;
      });
      props.setItemList(newlist);
    };
  return (
      <div className='tasks-sec'>
        <h1>All Tasks</h1>
        <div className='tasks'>
          {props.itemList.map(itemObj=>{
            return <p className='tile'>{itemObj.item} <button onClick={()=>deleteItem(itemObj.key)}><img className='trash' src={trash} alt="" /></button></p>
          })}
        </div>
      </div>
  )
}

export default Tile