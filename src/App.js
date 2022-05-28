import logo from './logo.svg';
import './App.css';
import { Signup } from './component/signup';
import Login from './component/login';
import { LoginForm } from './component/LoginForm';
import { useState } from 'react';
import { Task } from './component/Task';
import { AddTask } from './component/AddTask';
import { Menu } from './pages/Menu';
import { Routes,Route } from 'react-router-dom';
import { AddProduct } from './pages/AddProduct';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product';
import { SImpleForm } from './component/SImpleForm';
import { ApiComponenet } from './api/ApiComponenet';
import { GetApi } from './apibackup/GetApi';
import { UserDetails } from './apibackup/UserDetails';
import { UserDelete } from './apibackup/UserDelete';
import { Userupdate } from './apibackup/Userupdate';


function App() {

  const [tasks, settasks] = useState([
    {
      tId: 101,
      tName: "java"
    },
    {
      tId: 102,
      tName: "python"
    },
    {
      tId: 103,
      tName: "c++"
    }
  ])
  const addTicket = (ticektObj) => {

    console.log("add ticket called...", ticektObj)

    settasks([...tasks, ticektObj])
  }
  const deleteTask = (task) => {

    console.log("deleteing.....", task)


    settasks(tasks.filter((t) => {

      return t !== task;
    }))

    console.log(tasks)

  }
  return (
    <div>

      {/* <AddTask addTicket = {addTicket}/>
      <Task tasks ={tasks} deleteTask = {deleteTask}/> */}

      
      {/* <SImpleForm/>
      <Menu />
      <ApiComponenet/>
     
      <Route path = "addproduct" element={<AddProduct/>}/>
      <Route path = "productlist" element={<ProductList/>}/>
      <Route path = "product" element={<ProductList/>}/>
      <Route path = "product/:id" element={<Product/>}/>  */}
      <Routes>
       <Route path = "/" element={<GetApi/>}/> 
      <Route path = "userdetails/:id" element={<UserDetails/>}/>
      <Route path = "userdelete/:id" element={<UserDelete/>}/>
      <Route path = "userupdate/:id" element={<Userupdate/>}/>
      </Routes>

    </div>
  );
}

export default App;
