import { useState } from "react";
import styles from "./AppList.module.css"


function AppListItem({addItems}) {
  const [todoItem, setTodoItem]= useState("");
  const [todoDate, setTodoDate]= useState("");
  
  const handleNameChange=(event)=>{
    setTodoItem(event.target.value);
  }

  const handleDateChange=(event)=>{
    setTodoDate(event.target.value);
  }

  const handlebtnClick=()=>{
    addItems(todoItem,todoDate);
    setTodoItem("");
    setTodoDate("");  
  }
  return <>
  <div className={`container text-center ${styles.outerDiv}`}>
  <div className={`row ${styles.row}`}>
    <div className={`col-4 ${styles.col1}`}>
      <input  type="text" placeholder="Enter Todo Here" value={todoItem}
       onChange={handleNameChange} />
</div>
    <div className={`col-4 ${styles.col2}`}>
      <input type="date" value={todoDate} onChange={handleDateChange} />
</div>
    <div className="col-2">
     <button className="btn btn-success" 
     onClick={handlebtnClick}>Add</button>
</div>
  </div>
</div>
  </>
}

export default AppListItem;