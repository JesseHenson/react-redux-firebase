import app from 'firebase/app';
import database from 'firebase/database'
import auth from 'firebase/auth'

import { FirebaseConfig } from '../config/keys'

app.initializeApp(FirebaseConfig);

const databaseRef = app.database().ref();

export const todosRef = databaseRef.child("todos");

export const doCreateUser = (email, password) => 
    app.auth().createUserWithEmailAndPassword(email, password)

export const doSignIn = (email, password) => 
    app.auth().signInWithEmailAndPassword(email, password);

export const doSignOut = () => app.auth().signOut();

