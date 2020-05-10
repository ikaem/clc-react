import React from "react";
import styled from "styled-components";

const GameQuickInfo = () => {
    return (
    <GameQuickInfoStyled>
        <div className="quick-info__player-white">
            <span className="player-white__label">
            </span>
            <h2 className="player-white__username">Player White</h2>
        </div>
        <ul className="quick-info__previous-games-results">
            <li className="quick-info__previous-games-result">
                <p>0</p>
                <p>1</p>
            </li>
            <li className="quick-info__previous-games-result">
                <p>0</p>
                <p>1</p>
            </li>
            <li className="quick-info__previous-games-result">
                <p>0</p>
                <p>1</p>
            </li>
        </ul>
        <div className="quick-info__player-black">
            <span className="player-black__label">
            </span>
            <h2 className="player-black__username">Player Black</h2>
        </div>
    </GameQuickInfoStyled>
    );
}

const GameQuickInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--widget-background);
    padding: 0.5rem;

    .player-white__label {
        display: inline-block;
        height: 0.65rem;
        width: 0.65rem;
        background-color: white;
        /* border: 1px solid black; */
        border-radius: 100%;
        vertical-align: baseline;
        margin-right: 5px;
    }
    .player-white__username {
        display: inline;
        font-size: 0.8rem;
        text-transform: uppercase;
        vertical-align: baseline;
        color: rgb(90, 90, 90);
    }

    .player-black__label {
        display: inline-block;
        height: 0.65rem;
        width: 0.65rem;
        background-color: black;
        /* border: 1px solid black; */
        border-radius: 100%;
        vertical-align: baseline;
        margin-right: 5px;
    }
    .player-black__username {
        display: inline;
        font-size: 0.8rem;
        text-transform: uppercase;
        vertical-align: baseline;
        color: rgb(90, 90, 90);
    }

    .quick-info__previous-games-results {
        display: flex;
        justify-content: flex-start;
        padding: 0.5rem 0.85rem;
    }
    .quick-info__previous-games-result {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 0.15rem;
        margin-right: 1px;
        /* border-right: 1px solid white; */
        background-color: rgb(238, 238, 238);
    }

`;

export default GameQuickInfo;