import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = (e) => {
        auth.signInWithPopup(provider).then((result) =>{
           
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user 
            })
        }).catch((error) => {
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://assets.stickpng.com/images/5cb480b85f1b6d3fbadece78.png" alt="" /> 
                <h1>Sign in to the SLack Clone</h1>
                <p></p>
                <Button onClick={signIn}>Sign in with Google</Button>  
            </div>   
            
        </div>
    )
}

export default Login 
