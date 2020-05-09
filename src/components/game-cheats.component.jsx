import React from "react";

const GameCheats = () => {
    return (
    <div className="game__cheats">
        <div className="cheats__selectors">
            <span className="cheats__selectors-player">My Cheats</span>
            <span className="cheats__selectors-opponent">Opponent's Cheats</span>
        </div>


        <ul className="players__cheats-list">
            <li className="cheat">
                <span className="cheat__author">Karlo</span>
                <span className="cheat__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam in quas cumque, quidem odit libero enim earum quae.</span>
            </li>
            <li className="cheat">
                <span className="cheat__author">Karlo</span>
                <span className="cheat__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam in quas cumque, quidem odit libero enim earum quae.</span>
            </li>
            <li className="cheat">
                <span className="cheat__author">Karlo</span>
                <span className="cheat__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam in quas cumque, quidem odit libero enim earum quae.</span>
            </li>
        </ul>

        <ul className="opponent__cheats-list">
            <li className="cheat">
                <span className="cheat__author">Karlo</span>
                <span className="cheat__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam in quas cumque, quidem odit libero enim earum quae.</span>
            </li>
            <li className="cheat">
                <span className="cheat__author">Karlo</span>
                <span className="cheat__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam in quas cumque, quidem odit libero enim earum quae.</span>
            </li>
            <li className="cheat">
                <span className="cheat__author">Karlo</span>
                <span className="cheat__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam in quas cumque, quidem odit libero enim earum quae.</span>
            </li>
        </ul>
    </div>
    );
}

export default GameCheats;