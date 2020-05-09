import React from "react";

import GameQuickInfo from "../components/game-quick-info.component";
import GameChat from "../components/game-chat.component";
import GameCheats from "../components/game-cheats.component";
import GameChessboard from "../components/game-chessboard.component";
import BoardTest from "../components/board-test.component";

const Game = () => {
    return (
    <main>
        {/* <div className="main-game__game-quick-info-wrapper">
            <GameQuickInfo />
        </div>
        <div className="main-game__game-cheats-wrapper">
            <GameCheats />
        </div> */}
{/* 
        <div className="main-game__game-chessboard-wrapper">
            <GameChessboard />
        </div> */}

        <div className="main-game__game-chessboard-wrapper">
            <BoardTest />
        </div>


        {/* <div className="main-game__game-chat-wrapper">
            <GameChat />
        </div> */}

    </main>
    );
}

export default Game;