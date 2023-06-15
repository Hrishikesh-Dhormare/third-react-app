import { useRef, useState } from "react";

function App() {
  return ( 
    <>
      <h1>Use of Ref Hook</h1>
      <ListDemo/>
    </>
  );
}

function ListDemo() {
  let inputRef = useRef();
  let [list, setList] = useState(["WPT Module"]);

  let addItemAction = () => {
    let inputValue = inputRef.current.value;
    let newList = [inputValue, ...list];

    setList(newList);

    inputRef.current.value ="";
  };

  return (
    <>
     <input type="button" value="Add New Item" onClick="addItemAction()"/>
     {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </>
  )
}

export default App;