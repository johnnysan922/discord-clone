import { Button } from '@mui/material'
import React from 'react'
import './Login.css'

function Login() {
    const signIn = event => {
        //GOOGLE LOGIN
    }

  return (
    <div className='login'>

        <div className="login_logo">
            <img 
            src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5061df29d55a92d945_full_logo_blurple_RGB.svg'
            alt=''
            />
        </div>

        <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login