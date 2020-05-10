import React from "react";
import styled from "styled-components";

const Login = () => {
    return (
    <LoginStyled className="main__login">

        <div className="login-container">
            <form className="login-container__form">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" id="username" 
                    className="form__username-input mb-1rem"/>
                <label htmlFor="join-game">Join Game</label>
                <input 
                    type="text" id="join-game" 
                    className="form__join-game-input mb-1rem"/>
                <span 
                    className="form__or-separator mb-1rem">- or - </span>
                <label htmlFor="create-game">Create Game</label>
                <input 
                    type="text" id="create-game" 
                    className="form__create-game-input mb-1rem"/>
                <button 
                    className="form__login-button" 
                    type="button">Login</button>
            </form>
        </div>

    </LoginStyled>
    );
}

const LoginStyled = styled.main`

    padding: 1rem;


    .login-container {
        padding: 0.5rem; 
        background-color: var(--widget-background);
    }
    .login-container__form {
        display: grid;
        grid-template-columns: 1fr;
        /* gap: 1rem; */
    }

    .mb-1rem {
        margin-bottom: 1rem;
    }

    .form__or-separator {
        text-align: center;
        color: grey;
    }

`;

export default Login;