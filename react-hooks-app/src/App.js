import './App.css';
import { useState, useEffect } from 'react';


function App() {

  let [result, setResult] = useState(0);

  let [data, setData] = useState(<tr><td colSpan ="3" >...loading</td></tr>);

  async function getUserData(){

    try{
      const userData = await fetch('https://jsonplaceholder.typicode.com/users/');
      if (userData.status === 200){
        let response = await userData.json();

        let items = response.map((item)=> {
          return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>)

        });

        
        setData(items);

      } 
      else {
        throw "Error fetching data";
      }
    } catch(error){
      console.error(error);
    }
  }


  function add(){
      result++;
      setResult(result);
  }

  function subtract(){
    result--;
    setResult(result);
    
  }
  
  useEffect(function(){
    getUserData();
  }, []);
  
  return (
    <div>
      <button onClick={add}>Add</button>
      <span> {result} </span>
      <button onClick={subtract}>Remove</button>
      {/* <button onClick={getUserData}>Load</button> */}
      <br/>
      <br/>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jax</td>
            <td>jax@gmail.com</td>
            <td>1327998765</td>
          </tr>
          {data}
        </tbody>
      </table>

    </div>
  )
}

export default App;
