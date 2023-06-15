

function App() {
  return (
    <>
      <h1></h1>
      <MessageDemo name="Hrishi" surname="Dhormare"/>
      <MessageDemo name="Dhormare"/> 
    </>
  );
}

function MessageDemo(props) {
  return (
    <>
     <h1>Hello {props.name} {props.surname}</h1>
    </>
  );
} 

export default App;