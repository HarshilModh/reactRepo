import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const GetApi = () => {

    const [user, setuser] = useState([]);

    async function fetchd(){

        await axios.get("https://reqres.in/api/users?page=2").then((res)=>{

            setuser(res.data.data)
        })
    }

    // async function fetchUsers() {


    //     try {
    //         const res = await fetch('https://reqres.in/api/users?page=2')
    //         const data = await res.json();
    //         setuser(data.data)
    //         console.log(data.data)
    //         console.log(user)
    //         console.log(res.status)
    //         if (!res.ok) {

    //             throw new Error('Something went wrong !!!!')
    //         }

    //     } catch (error) {
    //     }
    // }


    return <div>

        <button onClick={fetchd}>cALL</button>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last name</th>
                </tr>
            </thead>
            <tbody>
                {user.map((u) => {
                    return (
                        <tr>
                         <Link to={`../userdetails/${u.id}`}>  <th scope="row" >{u.id}</th></Link>
                            <td>{u.first_name}</td>
                            <td>{u.last_name}</td>
                            <td><img src ={u.avatar}></img></td>
                            <Link to={`../userdelete/${u.id}`}><td>Delete</td></Link>
                            <Link to={`../userupdate/${u.id}`}><td>Update</td></Link>
                        </tr>

                    )
                })

                } 


            </tbody>
        </table>

    </div>;
};
