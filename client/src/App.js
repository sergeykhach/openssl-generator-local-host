
import {useEffect} from "react";
//import {useEffect} from "react";
import './App.css';
import Form from "./Form";
//import KeyForm from "./KeyForm";

function App() {  

/*
  useEffect(() => {
    fetch("/data").then((resp) => resp.json()).then((resp) => {
      console.log(JSON.stringify(resp, undefined, 2));
    });
  }, []); // kapna
  
*/

  return (
    <div className="App">
      <h1 className="Vernagir" >OpenSSL private key, CSR and Certificate generator</h1>
      <h2 className="VernagriTak">Certificate's thumbprint and serial number extractor</h2>
      <h2 className="VernagriTak">Metamask connector and transactions sender</h2>
      <Form />

    </div>
  );
}
export default App;