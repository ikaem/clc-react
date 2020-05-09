import React from "react";

const GameQuickInfo = () => {
    return (
    <div className="game__quick-info">
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
    </div>
    );
}

export default GameQuickInfo;