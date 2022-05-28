import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const UserDetails = () => {
    var params=useParams()
    //console.log(params.id);
    const [user, setuser] = useState({});
    useEffect(() => {
      fetchData();
    }, []);
    
    async function fetchData(){
        console.log("in fetchData",params.id);
        await axios.get(`https://reqres.in/api/users/${params.id}`).then((res)=>{
            console.log(res.data.data)
            setuser(res.data.data)
           
        })
    }
  return <div >
       {/* <button onClick={fetchData}>CALL</button> */}
             <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last name</th>
                </tr>
            </thead>
            <tbody>
               
                
                        <tr>
                            <th scope="row" >{user.id}</th>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td><img src ={user.avatar}></img></td>
                        </tr>

                    
                


            </tbody>
        </table>

  </div>;
};
