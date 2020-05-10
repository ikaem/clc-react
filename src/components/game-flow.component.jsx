import React from "react";
import styled from "styled-components";

const GameFlow = () => {
    return (
    <GameFlowStyled>
        <h2 className="flow__username player">Player Username</h2>
        <h2 className="flow__username opponent">Opponent Username</h2>
        <span className="flow__clock player">05:00</span>
        <span className="flow__clock opponent">05:00</span>
        <ul className="flow__captured-pieces player">
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
        </ul>
        <ul className="flow__captured-pieces opponent">
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
            <li className="captured-piece">>></li>
        </ul>

        <div className="flow__game-actions">
            <div className="game-actions__moves-controls">
                <span>|&lt;&lt;</span>
                <span>&lt;&lt;</span>
                <span>></span>
                <span>>></span>
                <span>>>|</span>
            </div>
            <ul className="game-actions__moves-record">
                <li className="move-record">
                    <span className="move-record__move-number">1</span>
                    <span className="move-record__player-move">Nd3</span>
                    <span className="move-record__opponent-move">Pd4</span>
                </li>
                <li className="move-record">
                    <span className="move-record__move-number">2</span>
                    <span className="move-record__player-move">Nd3</span>
                    <span className="move-record__opponent-move">Pd4</span>
                </li>
                <li className="move-record">
                    <span className="move-record__move-number">30</span>
                    <span className="move-record__player-move">Nd3</span>
                    <span className="move-record__opponent-move">Pd4</span>
                </li>
            </ul>
            <div className="game-actions__game-controls">
                <span>Takeback</span>
                <span>Forfeit</span>
                <span>Draw</span>
            </div>
        </div>
    </GameFlowStyled>
    );
}

const GameFlowStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgb(192, 192, 192);


    .flow__username {
        padding: 0.5rem;
        font-size: 0.85rem;
        align-self: end;
        text-transform: uppercase;
    }
    .flow__clock { 
        padding: 0 0.5rem 0.5rem;
        font-size: 1.5rem;
    }

    .flow__captured-pieces {
        background-color: rgb(231, 231, 231);
        padding: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }

    .captured-piece {
        padding: 0.2rem;
        background-color: red;
        margin: 2px;
    }

    .flow__game-actions {
        grid-column: span 2;
        display: flex;
        flex-direction: column;
    }

    .game-actions__moves-controls,
    .game-actions__game-controls {
        background-color: rgb(29, 26, 26);
        color: white;
        display: flex;
        justify-content: center;
        padding: 0.2rem 0.5rem;
    }

    .game-actions__moves-controls > span,
    .game-actions__game-controls > span {
        padding: 0 0.2rem;
    }

    .game-actions__moves-record {
        background-color: rgb(240, 240, 240);
        padding: 0 0.5rem;
    }
    .move-record {
        display: grid;
        grid-template-columns: 10% 1fr 1fr;
        padding: 0.2rem 0;
        gap: 0 0.5rem;
    }
    .move-record__move-number {
        justify-self: center;
        /* margin-right: auto; */
    }

    .move-record__player-move {
        margin-left: auto;
    }
`;

export default GameFlow;