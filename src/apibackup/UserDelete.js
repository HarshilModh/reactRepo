import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const UserDelete = () => {
    var params=useParams()
    async function fetchData(){
        console.log("in fetchData",params.id);
        await axios.delete(`https://reqres.in/api/users/${params.id}`).then((res)=>{
            console.log(res.data.data)
            console.log(res.status);
            
           
        })
    }
  return <div></div>;
};
