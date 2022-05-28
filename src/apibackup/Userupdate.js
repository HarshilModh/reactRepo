import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Updatehook } from '../hooks/Updatehook';

export const Userupdate = () => {
    var params = useParams()
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [job, setJob] = useState('');
    const {value: userdata, valueChangehandler: valueChangehandler} = Updatehook();
    
    const [user, setuser] = useState({});
    useEffect(() => {
        fetchData();
    }, []);
  
    async function fetchData() {
        console.log("in fetchData", params.id);
        await axios.get(`https://reqres.in/api/users/${params.id}`).then((res) => {
            console.log(res.data.data)
            setuser(res.data.data)
            setFirstName(res.data.data.first_name)

        })
    }
        async function updateData() {  
        // console.log("in updateData", params.id);
        // console.log("EnteredValue-->", enteredValue);
        const data = {
            "name": firstName,
            "job": job
        }
        await axios.put(`https://reqres.in/api/users/${params.id}`, data).then((res) => {
            console.log(res.data)
            setuser(res.data)
            navigate('/');
            
        })
    } 
    const submitHandler = (event) => {
        event.preventDefault();
        updateData();
        
      }  
    return (
        <div>
            <form onSubmit={submitHandler}>
               
                <div class="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='job'  onChange={(e)=> setJob(e.target.value)}></input>
                
                </div>
                <button type="submit" class="btn btn-primary" >Update</button>
            </form>
        </div>
    )
}
