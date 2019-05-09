import {todosRef, doSignIn, doSignOut} from '../../Firebase/firebase';
import { FETCH_TODOS, USER_AUTHENTICATED, USER_SIGNOUT } from './types';

export const addTodo = newToDo => async dispatch => {
    console.log(newToDo);
    todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
    console.log('toactions')
    todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
    todosRef.on("value", snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};

export const signInUser = (email, password) => async dispatch => {
    const authUser = doSignIn(email, password)
    dispatch({
        type: USER_AUTHENTICATED,
        payload: authUser
    })
}

export const signOutUser = () => async dispatch => {
    doSignOut()
    dispatch({
        type: USER_SIGNOUT
    })
}