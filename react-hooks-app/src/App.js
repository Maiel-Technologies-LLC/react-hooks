import './App.css';
import { useState, useEffect } from 'react';
import axios from './apis/axios';


function App() {

  let [result, setResult] = useState(0);
  let [data, setData] = useState(<tr><td colSpan ="3" >...loading</td></tr>);
  let [posts, setPosts] = useState(<tr><td colSpan ="4" >...loading</td></tr>);

  
  async function getUserData(){

    try{
      // const userData = await fetch('https://jsonplaceholder.typicode.com/users/');
      const userData = await axios.get('/users');
      console.log(userData);
      if (userData.status === 200){
        let response = userData.data;
        // let response = await userData.json();
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


  async function getPostData(){

    try{
      // const userData = await fetch('https://jsonplaceholder.typicode.com/users/');
      const postData = await axios.get('/posts');
      console.log(postData);
      if (postData.status === 200){
        let response = postData.data;
        // let response = await userData.json();
        let items = response.map((item)=> {
          return (
          <tr key={item.id}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            </tr>)

        });
        setPosts(items);
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
  useEffect(function(){getUserData(); getPostData();}, []);
  return (
    <div>
      <button onClick={add}>Add</button>
      <span> {result} </span>
      <button onClick={subtract}>Remove</button>
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


 <br/>
 <br/>
 <br/>


 <table border="1">
        <thead>
          <tr>
            <th>User Id</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts}
        </tbody>
      </table>


    </div>
  )
}

export default App;
