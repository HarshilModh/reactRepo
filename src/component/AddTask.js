import React, { useState } from 'react'

export const AddTask = (props) => {
    const [ticket, setticket] = useState('')
    const submit =(e)=>{

        e.preventDefault();
        console.log("ticket....",ticket)
        var ticketobj = {

            tName:ticket
        }
        props.addTicket(ticketobj)
        
    }
    return (
        <div>
            <form onSubmit = {submit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Ticket name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ticket" onChange ={(e)=>setticket(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
