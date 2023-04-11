import React, { useState } from 'react'
import Signup from './Child/Signup';
import Login from './Child/Login';

function Auth() {
    const [authAction, setAuthAction] = useState<string>("signup");

    return (
        <>
            {
                authAction !== "login" ? <Signup setAuthAction={setAuthAction} /> : <Login setAuthAction={setAuthAction} />
            }
        </>
    )
}

export default Auth