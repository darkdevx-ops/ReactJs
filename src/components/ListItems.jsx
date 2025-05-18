import ListItem from "./ListItem";
import styles from "./ListItems.module.css"
function ListItems({listItems, ondltbtnClick}){
  return <>

  <div className={`container text-center ${styles.outerDiv}`}>
   {listItems.map((item)=>(<ListItem key={item.name} itemName={item.name} itemDate={item.date} ondltbtnClick={ondltbtnClick}></ListItem>))}
  
</div>

  </>
}
export default ListItems;