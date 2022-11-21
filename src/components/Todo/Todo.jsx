import React from 'react'
import {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tile from '../Tiles/Tile';
import "./Todo.css";

const Input = () => {
  const[currentItem,setcurrentItem] = useState("");
  const[itemList,setItemList] = useState([]);
  useEffect(()=>{
    let arr = localStorage.getItem("tasklist");
    if(arr){
      let obj =JSON.parse(arr);
      setItemList(obj);
    }
  },[])

  const handleChange = (e)=>{
    setcurrentItem(e.target.value);
  }
  const addItem = ()=>{
    setItemList([...itemList,{item:currentItem,key:Date.now()}]);
    localStorage.setItem("tasklist", JSON.stringify(itemList));
    setcurrentItem("");
    handleClose();
  }
  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 420,
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color:'white',
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return(
     <div>
      <div className='main'>
        <h1>Todo List</h1>
        <div className='todo'>
          <button id='button2' onClick={handleOpen}>Add Tasks</button>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <p>Task Name</p>
        <input id='modalinput' type="text" value={currentItem} onChange={handleChange}/>
        <div className="buttons">
          <button id='button2' onClick={handleClose}>Cancel</button>
          <button id='button' onClick={addItem}>Add Task</button>
        </div>
        </Box>
      </Modal>
        </div>
      </div>
        <Tile itemList={itemList} setItemList={setItemList}/>
     </div>
  )
}

export default Input