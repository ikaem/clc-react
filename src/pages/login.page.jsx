import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory as history } from "react-router-dom";

import { UserContext } from "../context/user.context";

const Login = () => {
    const { push } = history();
    const { setUser } = useContext(UserContext);

    const [ username, setUsername ] = useState("");
    const [ gameAction, setGameAction ] = useState("");

    const handleUsernameChange = (e) => {
        const { value } = e.target;
        setUsername(value);
        console.log(username)
    }

    const handleGameChange = (e) => {
        const { name, value } = e.target;
        setGameAction({
            [name]: value
        });

        console.log(gameAction);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(username);
        // checking type of game action...
        const chosenGameAction = Object.keys(gameAction)[0];
        console.log(chosenGameAction);

        // now logic here to check user
        // also to check if join game exists, or if observe game exists..., or if game can be created...
        // if so, backend will prepare the game 
        // it will send back game id
        // users name will get stored somewhere, maybe user context?
        // or i should probably have game context as well, in case the user goes off around the app...
        // so once the the game component mounts, it will just send this id
        // or even better, we can immediately put the game setup to the game context...
        // and once the game component mounts, it can just read game setup from the context...

        // for now, tho, we just push user to game by using query string...
        push(`/game/${gameAction[chosenGameAction]}`);


    }



    return (
    <LoginStyled className="main__login">

        <div className="login-container">
            <form 
                onSubmit={handleSubmit}
                className="login-container__form">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" id="username" 
                    className="form__username-input mb-1rem"
                    onChange={handleUsernameChange}
                    />
                <label htmlFor="join-game">Join Game</label>
                <input 
                    type="text" id="join-game" 
                    className="form__join-game-input mb-1rem"
                    name="joinGame"
                    value={gameAction.joinGame || ""}
                    onChange={handleGameChange}
                />
                <span 
                    className="form__or-separator mb-1rem">- or - </span>
                <label htmlFor="create-game">Create Game</label>
                <input 
                    type="text" id="create-game" 
                    className="form__create-game-input mb-1rem"
                    name="createGame"
                    value={gameAction.createGame || ""}
                    onChange={handleGameChange} 
                />

                <span 
                    className="form__or-separator mb-1rem">- or - </span>
                <label htmlFor="observe-game">Observe Game</label>
                <input 
                    type="text" id="observe-game" 
                    className="form__observe-game-input mb-1rem"
                    name="observeGame"
                    value={gameAction.observeGame || ""}
                    onChange={handleGameChange} 
                />
                <button 
                    className="form__login-button" 
                    type="submit"
                    disabled={!(username && Object.values(gameAction)[0])}>
                    Login
                </button>
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