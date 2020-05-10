import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { bishopLegalMoves, knightLegalMoves, rookLegalMoves, queenLegalMoves, kingLegalMoves } from "../helpers/game/generate-legal-moves";

const simpleBoard = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "pawn", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
]

const BoardTest = () => {

    const [ board, setBoard] = useState(simpleBoard);
    const [ movingPiece, setMovingPiece ] = useState([]);
    const [ legalMoves, setLegalMoves ] = useState([]);
    

    useEffect(() => {
        setBoard(prevBoard => prevBoard);
        // movingPiece.length && setLegalMoves(bishopLegalMoves(movingPiece));
        movingPiece.length && setLegalMoves(pawnLegalMoves(movingPiece));

    }, [movingPiece]);


    const movePiece = ([row, column]) => {
        // knightLegalMoves([row, column])
        // if there is no piece on the tile, return
        const isPiecePresent = board[row][column];
        if(!isPiecePresent && !movingPiece.length) return;

        // if there is no set movingPiece, then set it
        // also, generate legal moves...
        if(!movingPiece.length) {
            setMovingPiece([row, column]);
            // generateLegalMoves([row, column]);
            // console.log("moving piece was not set previously...")
            return;
        }
        // now, at this point we can find board position of the previously stored moving piece...
        // we have it actually...
        // we just need to place the existing moving piece into new coordinates...
        const [rowToMove, columnToMove] = movingPiece;

        const isLegalMove = legalMoves.some(move => {
            return move[0] === row && move[1] === column;
        });

        if(!isLegalMove) {
            setMovingPiece([]);
            setLegalMoves([]);
            return;
        };

        const newBoard = [...board];
        const piece = newBoard[rowToMove][columnToMove];
        newBoard[row][column] = piece;
        newBoard[rowToMove][columnToMove] = "";
        setMovingPiece([]);
        setLegalMoves([]);
        setBoard(newBoard);
    }

    const pawnLegalMoves = ([row, column], isInitial=true, isCapturing=true) => {

        const baseRow = 1;
        const baseColumn = isCapturing? 1: 0;

        const goUp = Array(isInitial? 2: 1).fill().map((_, index, array) => {
            const upperRow = row - baseRow - index;
            return [upperRow, column];
        })

        console.log("go up:", goUp);

        // this will need to be somehow specified whether a piece is on its left or right... 
        // and what about en passant...
        // for now, lets leave it as having 2 possible positions..for sideways...
        const goSideways = Array(isCapturing? 1: 0).fill().map((_, index, array) => {
            const captureLeft = column - baseColumn;
            const captureRight = column + baseColumn;

            return [[row - 1, captureLeft], [row - 1, captureRight]];
        }).flat();

        console.log("capturing sideways...", goSideways);


        return [...goUp, ...goSideways];
    }







    const styleLegalMove = ([row, column]) => {
        const isLegalMove = legalMoves.some(move => {
            return (row === move[0] && column === move[1]);
        });

        if(isLegalMove) return "legal-tile";
    }

    return (
    <GameChessboardStyled className="game-chessboard">
        <ul className="chessboard__chessboard-tiles">

        {board.map((row, rowIndex) => {
            return row.map((tile, columnIndex) => {
                return (
                <li 
                    className={`chessboard__tile ${legalMoves.length && styleLegalMove([rowIndex, columnIndex])}`}
                    id={[rowIndex, columnIndex]} key={`${rowIndex}-${columnIndex}`} 
                    onClick={() => movePiece([rowIndex, columnIndex])}>
                    <div 
                        class="chessboard__actual-piece">


                        {tile}

                    </div>
                </li>)
            })
        })}
        </ul>
    </GameChessboardStyled>
    );
}

const GameChessboardStyled = styled.div`

    .chessboard__chessboard-tiles {
        /* background-color: black; */
        width: 100%;
        max-width: 640px;
        height: calc(100vw - 3.05rem);
        max-height: 640px;
        display: grid;
        /* grid-template-columns: repeat(8, minmax(3rem, calc(100vw/16)));
        grid-template-rows: repeat(8, minmax(3rem, calc(100vw/16))); */
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);
        gap: 2px;
    }
    .chessboard__tile {
        padding: 5px;
        background-color: red;
        width: 100%;
        max-width: 80px;
        height: 100%;
        max-height: 80px;
        /* min-height: 40.13px; */
    }
    .legal-tile {
        background-color: yellow;
    }
    .chessboard__actual-piece {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default BoardTest;