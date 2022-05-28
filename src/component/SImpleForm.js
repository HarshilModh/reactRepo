import React from 'react'
import UseInput from '../hooks/UserInput'

export const SImpleForm = () => {

    const {value:enteredValue,valueChangeHandler}  = UseInput();
    const submit = (e)=>{

        e.preventDefault()
        console.log("submit called......",enteredValue)
    }
    return (
        <div>

            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="name">name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter name" onChange={(e) => { valueChangeHandler(e) }} />
                    {enteredValue}
                </div>
                <div class="form-group">
                    <label for="name">age</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter AGE" onChange={(e) => { valueChangeHandler(e) }} />
                    {enteredValue}
                </div>

                <button type="submit" class="btn btn-primary">ADD USER</button>

            </form>
        </div>
    )
}
