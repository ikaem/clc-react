import React from "react";
import styled from "styled-components";

const GameChat = () => {
    return (
        <GameChatStyled>
            <div className="chat__selectors">
                <div className="chat__selector-players">
                    <span className="chat__label">Players Chat</span>
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
                        <li className="message player">
                            <span className="message__author">Karlo</span>
                            <span className="message__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam in quas cumque, quidem odit libero enim earum quae.</span>
                        </li>
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
        width: 75%;
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