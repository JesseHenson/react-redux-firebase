
import {USER_AUTHENTICATED, USER_SIGNOUT} from '../actions/types'


export default (state=null, action) => {
    switch (action.type) {
        case USER_AUTHENTICATED: 
            return {...state, User: action.payload}
        case USER_SIGNOUT: 
            return null
        default: 
            return state;
    }
    
}