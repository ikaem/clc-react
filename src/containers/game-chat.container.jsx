import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import { useParams as params } from "react-router-dom";


const GameChat = () => {

    const socket = io("localhost:8000");
    const { gameid } = params();

    const [ playersCommunication, setPlayersCommunication ] = useState([]);
    const [ playerMessage, setPlayerMessage ] = useState("");
    const [ playerMessageToObservers, setPlayerMessageToObservers ] = useState("");
    const [ observersCommunication, setObserversCommunication ] = useState([]);
    const [ playersGameRoom, setPlayersGameRoom ] = useState("");
    const [ observersGameRoom, setObserversGameRoom ] = useState("");


    useEffect(() => {
        const { id: socketId } = socket;
        socket.emit("join", { socketId, user: "karlo", room: gameid }, (data) => {
            console.log(data);
        });
        socket.on("backendPlayersMessage", (data, callback) => {
            console.log(data);
            setPlayersCommunication(prevComm => [ ...prevComm, data ]);
        })
        return () => {
            socket.emit("disconnect", {}, (data) => {
                console.log(data);
            });
            socket.off();
        }
    }, []);

    useEffect(() => {


    }, []);

    const sendMessage = () => {
        socket.emit("playersMessage", { user: "Karlo", message: "This is test message"}, (data) => {
            console.log(data);
        }) 
    }

    return (
        <GameChatStyled>
            <div className="chat__selectors">
                <div className="chat__selector-players">
                    <span 
                        onClick={sendMessage}
                        className="chat__label">Players Chat</span>
                    <span className="chat__new-msg-number"> (3)</span>
                    <span className="chat__mobile-expand">>></span>
                </div>
                <div className="chat__selector-global">
                    <span className="chat__label">Global Chat</span>
                    <span className="chat__new-msg-number"> (3)</span>
                    <span className="chat__mobile-expand">>></span>
                </div>
            </div>

            <div className="chat__communication">
                <div className="communication__players">
                    <ul className="messages">

                    {
                        playersCommunication.map(({ user, message }) => {
                            return (
                            <li className="message player">
                                <span className="message__author">{user}</span>
                                <span className="message__text">{message}</span>
                            </li>
                            )
                        })
                    }
                    </ul>
                    <form className="message-form">
                        <label htmlFor="new-message" hidden>New message</label>
                        <textarea className="message-form__message-input" placeholder="message"
                        rows="1"/>
                        <button className="message-form__message-send" type="submit">Send</button>
                    </form>
                </div>

                <div className="communication__global">
                    <ul className="messages">
                        <li className="message">
                            <span className="message__author">Karlo</span>
                            <span className="message__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam in quas cumque, quidem odit libero enim earum quae.</span>
                        </li>
                        <li className="message player">
                            <span className="message__author">Karlo</span>
                            <span className="message__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam in quas cumque, quidem odit libero enim earum quae.</span>
                        </li>
                        <li className="message">
                            <span className="message__author">Karlo</span>
                            <span className="message__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam in quas cumque, quidem odit libero enim earum quae.</span>
                        </li>
                        <li className="message">
                            <span className="message__author">Karlo</span>
                            <span className="message__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam in quas cumque, quidem odit libero enim earum quae.</span>
                        </li>
                    </ul>
                    <form className="message-form">
                        <label htmlFor="new-message" hidden>New message</label>
                        <textarea className="message-form__message-input" 
                        placeholder="message"
                        rows="1"/>
                        <button className="message-form__message-send" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </GameChatStyled>
    );
}

const GameChatStyled = styled.div`
    background-color: var(--widget-background);

    .chat__selectors {
        display: flex;
        justify-content: space-between;
    }
    .chat__selectors > div {
        padding: 0.5rem;
        text-transform: uppercase;
        font-size: 0.85rem;
    }

    .chat__selector-global {
        background-color: var(--selector-background);
        color: white;
    }

    .chat__communication {
        margin: 0.5rem;
        /* padding: 0.5rem; */
    }

    .communication__players {
        padding: 0.5rem;
        background-color: rgb(206, 206, 206);
    }
    .communication__global {
        padding: 0.5rem;
        background-color: rgb(206, 206, 206);
        background-color: var(--selector-background);

        /*  */
        display: none;
    }

    .messages {
        display: flex;
        flex-direction: column;
    }

    .message {
        /* width: 75%; */
        width: auto;
        max-width: 75%;
        margin: 0.5rem 0;
    }
    .message__author {
        color: white;
        margin: 0.2rem;
    }
    .message__text {
        display: block;
        background-color: rgb(114, 114, 114);
        color: white;
        padding: 0.5rem;
        text-align: left;
    }
    .message.player {
        align-self: flex-end;
        text-align: right;
    }

    .message-form {
        display: flex;
    }
    .message-form__message-input {
        flex-grow: 1;
    }

`;

export default GameChat;