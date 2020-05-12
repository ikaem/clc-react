import React, { useState, useEffect } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import { useLocation as location } from "react-router-dom";
import queryString from "querystring";

import GameQuickInfo from "../components/game-quick-info.component";
import GameChat from "../containers/game-chat.container";
import GameCheats from "../components/game-cheats.component";
import GameChessboard from "../components/game-chessboard.component";
import GameFlow from "../components/game-flow.component";
import BoardTest from "../components/board-test.component";



const Game = () => {

    return (
    <GamePageStyled>
        {/* <div className="main-game__game-quick-info-wrapper">
            <GameQuickInfo />
        </div>
        <div className="main-game__game-cheats-wrapper">
            <GameCheats />
        </div> */}

{/*         <div className="main-game__game-chessboard-wrapper">
            <GameChessboard />
        </div> */}

        {/* <div className="main-game__game-chessboard-wrapper">
            <BoardTest />
        </div> */}

        {/* <div className="main-game__game-flow-wrapper">
            <GameFlow />
        </div> */}


        <div className="main-game__game-chat-wrapper">
            <GameChat />
        </div>

    </GamePageStyled>
    );
}

const GamePageStyled = styled.main`
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
`;

export default Game;