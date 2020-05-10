import React from "react";
import styled from "styled-components";

const GameCheats = () => {
    return (
    <GameCheatsStyled>
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
    </GameCheatsStyled>
    );
}

const GameCheatsStyled = styled.div`
    background-color: var(--widget-background);

    .cheats__selectors {
        display: flex;
        justify-content: space-between;
    }
    .cheats__selectors > span {
        padding: 0.5rem;
        text-transform: uppercase;
        font-size: 0.85rem;
    }

    .cheats__selectors-opponent {
        background-color: var(--selector-background);
        color: white;
        margin-bottom: 0.5rem;
    }

    .players__cheats-list,
    .opponent__cheats-list {
        margin: 0 0.5rem 0;
        display: flex;
        flex-direction: column;
    }
    .cheat {
        padding: 0.5rem;
        background-color: rgb(212, 212, 212);
        margin-bottom: 0.5rem;
    }

    .opponent__cheats-list > .cheat {
        background-color: var(--selector-background);
        color: white;
    }
    .opponent__cheats-list {
        display: none;
    }
`;


export default GameCheats;