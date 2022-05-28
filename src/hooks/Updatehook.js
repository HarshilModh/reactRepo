import { useState } from "react"

export const Updatehook = () => {
    const [userdata, setuserdata] = useState({
        "name": "",
        "job": ""
    })
    const valueChangehandler = (event) => { 
        setuserdata({...userdata, [event.target.name]: event.target.value})
     }
    return{
        value: userdata, valueChangehandler: valueChangehandler
    } 
}
