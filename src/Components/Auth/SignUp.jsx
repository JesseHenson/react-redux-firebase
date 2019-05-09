import React, {useState, useEffect} from 'react'
import {doCreateUser} from '../../Firebase/firebase'
import {connect} from 'react-redux';
import * as action from '../../Redux/actions'

const SignUp = (props) => {
    useEffect(() => {
    })

    const [credentials, setCredentials] = useState({})

    const handleOnSubmit = (event) => {
        const {email, password} = credentials;
        doCreateUser(email,password)
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

export default connect(null, action)(SignUp)
