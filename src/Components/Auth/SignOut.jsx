import React from 'react'
import { connect } from 'react-redux';
import * as actions  from '../../Redux/actions'

const SignOut = (props) => {
    const signOut = () => {
        props.signOutUser();
    }
    return (
    <button
        type="button"
        onClick={signOut}>
        SignOut
    </button>
    )

}


export default connect(null, actions)(SignOut)
