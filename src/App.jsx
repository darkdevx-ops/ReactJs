import { useState, useRef } from "react";
import AppHeader from "./components/AppHeading";
import AppListItem from "./components/AppList";
import ListItems from "./components/ListItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
function App(){
  
  
const [todoTask , setTodoTask]=useState([]);
// const handlebtnClick=(itemName,itemDate)=>{
//   if(todoTask.includes(itemName)){
//     alert("Task already exist");
//   }else{
//   const newTodoTask =[...todoTask,{name:itemName,date:itemDate}];
//   setTodoTask(newTodoTask);
//   }
  
  
// }
const handlebtnClick=(itemName,itemDate)=>{
  if(!itemName.trim() || !itemDate.trim()){
    alert("Task name and date cannot be blank");
    return;
  }
  if(todoTask.some(task => task.name === itemName)){
    alert("Task already exist");
    return;
  }
  const newTodoTask =[...todoTask,{name:itemName,date:itemDate}];
  setTodoTask(newTodoTask);
}




const handledltbtnClick = (todoTaskName)=>{
  const newTodoTask = todoTask.filter((item)=> item.name !== todoTaskName);
  setTodoTask(newTodoTask);

  

}
  return <>
  <Wrapper>
  <Container>
  <AppHeader></AppHeader>
  <AppListItem addItems={handlebtnClick}></AppListItem>
  {/* {todoTask.length ===0 && <center><ErrorMsg></ErrorMsg></center> } */}
  {/* <ListItems listItems={todoTask} ondltbtnClick={handledltbtnClick} ></ListItems> */}
  {todoTask.length ===0 ? <center><ErrorMsg></ErrorMsg></center> : <ListItems listItems={todoTask} ondltbtnClick={handledltbtnClick} ></ListItems>}
  
  </Container>
  </Wrapper>
  </> 
}

export default App;