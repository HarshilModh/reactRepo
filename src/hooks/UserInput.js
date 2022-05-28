import { useState } from "react"


const UseInput = () => {

    const [enteredValue, setenteredValue] = useState('')
    const [enteredValues, setenteredValues] = useState([])
   
    const valueChangeHandler = (e) => {

        setenteredValue(e.target.value)
        console.log(e.target.value)
        console.log("-->",enteredValue)
    }
  
    
    return{
        value: enteredValue, valueChangeHandler   }
}

export default UseInput;