import React from 'react'
import { Dashboard } from './Dashboard'

export default function Login() {
    var user = {
        name:"samir",
        age:15
    }

    return (
        <div>
            <Dashboard loggedInData ={user}/>
        </div>
    )
}
