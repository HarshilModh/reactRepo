import React, { useState } from 'react'

export const LoginForm = () => {

    const [name, setname] = useState('');

    const [users, setusers] = useState([])

    const nameChangeHandler = (e)=>{

        console.log(e.target.value)
        setname(e.target.value)
        
        
    }
    function submit(e){

        e.preventDefault();
        console.log(name)
        console.log("submit called......")
        setusers([...users,name])
        console.log("users....",users)
        
    }
    
    

    return (
        <div>
        <form onSubmit = {submit}>
            <div class="form-group">
                <label for="name">name</label>
                <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter name" onChange ={(e)=>{nameChangeHandler(e)}}/>
                {name}
            </div>
            
            <button type="submit" class="btn btn-primary">ADD USER</button>
            
        </form>
        {
        

            users.map((user)=>{

                return <h1>{user.name}</h1>
            })
        }
        </div>
    )
}
