import styles from "./ListItem.module.css"

function ListItem ({itemName, itemDate , ondltbtnClick}){
  
  
  return <>
  <div className={`row ${styles.listRow}`}>

    <div className="col">
      {itemName}
</div>
    <div className="col">
      {itemDate}
</div>
    <div className="col">
     <button className="btn btn-danger"
     onClick={()=>ondltbtnClick(itemName)}>Delete</button>
</div>


  </div>
  </>
} 

export default ListItem;