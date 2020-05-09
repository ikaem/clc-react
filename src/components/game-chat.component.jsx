import React from "react";

const GameChat = () => {
    return (
        <div className="game__chat">
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
                        <label for="new-message" hidden>New message</label>
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
                        <label for="new-message" hidden>New message</label>
                        <textarea className="message-form__message-input" 
                        placeholder="message"
                        rows="1"/>
                        <button className="message-form__message-send" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    
    );
}

export default GameChat;