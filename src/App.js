

function App() {
  return (
    <>
      <h1></h1>
      <MessageDemo name="Hrishi" surname="Dhormare"/>
      <MessageDemo name="Dhormare"/>
      <MessageDemo surname="Surname"/>

    </>
  );
}

function MessageDemo({name ,surname}) {
  return (
    <>
     <h1>Hello {name} {surname}</h1>
    </>
  );
} 

export default App;