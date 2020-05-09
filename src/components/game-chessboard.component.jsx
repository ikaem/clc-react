import React, { useState } from "react";
import styled from "styled-components";

const chessboardSetup = [
    ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
]

const simpleBoard = [
    ["piece", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
    
]

const GameChessboard = () => {


    const [ chessboard, setChessboard] = useState(chessboardSetup);

    const [ movingPiece, setMovingPiece ] = useState([]);

    const movePiece = (id) => {
        // if moving piece is already true, then place the piece in this cell
        // if moving piece is false, then set it to the id
        if(movingPiece.length) {
            console.log(`placing piece from ${movingPiece} to ${id}`);

            setChessboard(prevBoard => {
                const newBoard = [...prevBoard];
                newBoard[id[0]][id[1]] = prevBoard[movingPiece[0]][movingPiece[1]];
                return newBoard;
            });

            console.log(`I am also clearing state of movingPiece, so no piece is selected...`);
        }
        else {
            console.log(`placing piece ${id} to state...`);
            setMovingPiece(id);
        }
    }

    const takePiece = (id) => {
        console.log("old position:", id);
        setChessboard(prevBoard => {
            const oldBoard = [...prevBoard];
            return oldBoard;
        })
    }

    return (
    <GameChessboardStyled className="game-chessboard">

        {/* {
            chessboard.map((row, rowIndex) => {
                return row.map((tile, columnIndex) => {
                    return (
                    <div 
                        id={[rowIndex, columnIndex]} key={`${rowIndex}-${columnIndex}`} 
                        className="tile"
                        onClick={() => movePiece([rowIndex, columnIndex])}>
                        {tile}
                    </div>)
                })
            })
        } */}

    </GameChessboardStyled>
    );
}

const GameChessboardStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    gap: 5px;
    justify-items: stretch;
    justify-content: center;

    .tile {
        padding: 5px;
        background-color: red;
        text-align: center;
    }
`;

export default GameChessboard;