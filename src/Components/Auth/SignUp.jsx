import React, {useState, useEffect} from 'react'
import {doCreateUser} from '../../Firebase/firebase'

const SignUp = () => {
    useEffect(() => {
    })

    // next step is to move this into redux 

    const [credentials, setCredentials] = useState({})

    const handleOnSubmit = (event) => {
        const {email, password} = credentials;
        const user = doCreateUser(email,password)
        console.log(user);
        event.preventDefault()
    }

    const handleOnChange = (event) => {
        setCredentials({...credentials, [event.name]: event.value})
    }

  return (
    <form onSubmit={handleOnSubmit}>
        <input onChange={(e)=>{handleOnChange(e.target)}} name="email" type="email" value={credentials.email}/>
        <input onChange={(e)=>handleOnChange(e.target)} name="password" type="password" value={credentials.password}/>
        <button type="submit">create User</button> 
    </form>
    )
}

export default SignUp
