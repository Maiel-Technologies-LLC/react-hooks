import './App.css';
import { useState, useEffect } from 'react';


function App() {

  let [result, setResult] = useState(0);
  let [data, setData] = useState('...loading');

  async function getUserData(){

    try{
      const userData = await fetch('https://jsonplaceholder.typicode.com/users/');
      if (userData.status === 200){
        // console.log(await userData.json());
        let response = await userData.json();
        setData(response);
      } 
      else {
        throw "Error fetching data";
      }
    } catch(error){
      console.error(error);
    }
  }

  // getUserData();
  

  function add(){
      result++;
      setResult(result);
  }

  function subtract(){
    result--;
    setResult(result);
    
  }
  useEffect(function(){getUserData()}, []);
  return (
    <div>
      <button onClick={add}>Add</button>
      <span> {result} </span>
      <button onClick={subtract}>Remove</button>
      <br/>
      {data}<br/>
      <table>
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
        </tbody>
      </table>

    </div>
  )
}

export default App;
