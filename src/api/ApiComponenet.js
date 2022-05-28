import axios from 'axios';
import React from 'react';

export const ApiComponenet = () => {

    const  postDemo =()=>{

        var signupdata = {
            firstName:"Samir",
            email:"samir@gmail.com",
            password:"sam123"
        }
        axios.post("https://nodeexam0.herokuapp.com/api/signup",signupdata).then((res)=>{

        console.log(res.data)
        console.log(res.data.status)
        console.log(res.data.msg)
        })
    }
    async function getData(){

        try{
            var data = await axios.get("http://dummy.restapiexample.com/api/v1/employees")
            console.log(data.data.data)
        }catch(err){
             
            console.log(err)
        }
       

    }

    const headerPost = ()=>{

        var obj = {
            name:"Tenali123 Ramakrishna", gender:"male", email:"tenali123.ramakrishna@15ce.com", status:"active"
        }
        axios.post("https://gorest.co.in/public/v1/users",obj,
        {
            headers:{
                'Authorization':'Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5'
            }
        }
        ).then((res=>{
            console.log(res.data)
            console.log(res.data.data)
        }))
    }

    

  return <div>
        <button onClick ={postDemo} >POST</button>
        <button onClick ={getData} >GET</button>
        <button onClick ={headerPost} >post header</button>

  </div>;
};
