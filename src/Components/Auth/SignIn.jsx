import React, {useState} from 'react'
import {connect} from 'react-redux';
import * as action from '../../Redux/actions'

const SignIn = (props) => {
    // next step is to move this into redux 

    const [credentials, setCredentials] = useState({})

    const handleOnSubmit = (event) => {
        const {email, password} = credentials;
        setCredentials({email: "", password: ""})
        props.signInUser(email, password)
        event.preventDefault()
    }

    const handleOnChange = (event) => {
        setCredentials({...credentials, [event.name]: event.value})
        
    }

  return (
    <form onSubmit={handleOnSubmit}>
        <input onChange={(e)=>{handleOnChange(e.target)}} name="email" type="email" value={credentials.email}/>
        <input onChange={(e)=>handleOnChange(e.target)} name="password" type="password" value={credentials.password}/>
        <button type="submit">Sign In</button> 
    </form>
    )
}

export default connect(null, action)(SignIn)
