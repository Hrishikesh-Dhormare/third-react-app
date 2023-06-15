

function App() {
  return (
    <>
      <h1></h1>
      <ListDemo/>
    </>
  );
}

function ListDemo() {
  let data = "List in react";
  let list = ["react", "HTML", "CSS"];

  return (
    <>
     <h1>{data}</h1>
     {list.map((item) => item)} {/* reactHTMLCSS */}
     
     <hr />
     {list.map((item) => "Hello" + item)} {/*HelloreactHelloHTMLHelloCSS*/}
     <hr />
     {list.map((item) => (<><p>Hello {list[0]}</p></>))}
     <hr />
    </>
  );
} 

export default App;