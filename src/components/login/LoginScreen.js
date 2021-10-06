import React from 'react';
export const LoginScreen = ({history}) => {

    const doLogin = () => {
        history.replace('/');
    }
    return (
    <>
        <h1>Login</h1>
        <br/>
        <button className="btn btn-primary"onClick={ doLogin }>Ingresar</button>
    </>);
}