// Clone of list 
// let newlist = [...list]; 


const { useState } = require("react");

function App() {
  return(
    <>
      <h1>Stateful List</h1>
      <ListDemo/>
    </>
  );
}

function ListDemo() {
  let[list, setList] = useState(["WPT Module"]);
  let newElement = [...list];
  let addItem =()=>{
    let newList = [...list, "React", "HTML", "CSS"];
    // list.push("CDAC");
    setList(newList);

  }
  return(
    <>
    <h2>{list.map((item)=> item+" ")}</h2>
     <input type="button" value="Add" onClick={addItem} /> 
     <h2>{list.map((item)=> item+" ")}</h2>
    </>
  );
}

export default App;