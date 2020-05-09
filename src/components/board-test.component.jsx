import React, { useState, useEffect } from "react";
import styled from "styled-components";

const simpleBoard = [
    ["", "", "", "", "", "", "", ""],
    ["", "bishop", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
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
        movingPiece.length && setLegalMoves(bishopLegalMoves(movingPiece));

    }, [movingPiece]);


    const movePiece = ([row, column]) => {
        bishopLegalMoves([row, column])
        // if there is no piece on the tile, return
        const isPiecePresent = board[row][column];
        if(!isPiecePresent && !movingPiece.length) return;

        // if there is no set movingPiece, then set it
        // also, generate legal moves...
        if(!movingPiece.length) {
            setMovingPiece([row, column]);
            // generateLegalMoves([row, column]);
            console.log("moving piece was not set previously...")
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

    const knightLegalMoves = ([row, column]) => {
        const baseLong = 2;
        const baseShort = 1;

        const goUpward = 3;
    }


    const bishopLegalMoves = ([row, column]) => {
        const base = 1;

        const goUpward = Array(row).fill().map((_, index, array) => {
            const upperRow = row - index - base;
            console.log("upper row", upperRow);
            const leftColumn = column - index - base;
            const rightColumn = column + index + base;

            return [[upperRow, leftColumn], [upperRow, rightColumn]];
        }).flat().filter(move => move[1] < 8 && move[1] >= 0);

        console.log("upward inside bishop", goUpward);

        const goDownward = Array(7 - row).fill().map((_, index, array) => {
            console.log("row", row);
            const lowerRow = row + index + base;
            const leftColumn = column - index - base;
            const rightColumn = column + index + base;
            
            return [[lowerRow, leftColumn], [lowerRow, rightColumn]]
        }).flat().filter(move => move[1] < 8 && move[1] >= 0);

        console.log("bishops go backward...", goDownward);
        return [...goUpward, ...goDownward];

    }


    // const generateLegalMoves = (currentPosition) => {
    //     const [currentRow, currentColumn] = currentPosition;
    //     let base = 1;
    //     let upperRow = currentRow, lowerRow = currentRow;
    //     let upperLeftColumn = currentColumn, upperRightColumn = currentColumn;
    //     let lowerLeftColumn = currentColumn, lowerRightColumn = currentColumn;

    //     let goUpward = [];
    //     let goDownward = [];

    //     while ( upperRow > 0 ) {
    //         upperRow = upperRow - base;
    //         upperLeftColumn = upperLeftColumn - base;
    //         upperRightColumn = upperRightColumn + base;
    //         goUpward.push([upperRow, upperLeftColumn], [upperRow, upperRightColumn]);
    //     }

    //     while ( lowerRow < 7 ) {
    //         lowerRow = lowerRow + base;
    //         lowerLeftColumn = lowerLeftColumn - base;
    //         lowerRightColumn = lowerRightColumn + base;
    //         goDownward.push([lowerRow, lowerLeftColumn], [lowerRow, lowerRightColumn]);
    //     }

    //     console.log("downward inside generate", goDownward.filter(move => move[1] < 8 && move[1] >= 0));

    //     setLegalMoves([
    //         ...goUpward.filter(move => {
    //             return move[1] >= 0;
    //         }),
    //         ...goDownward.filter(move => {
    //             return move[1] >= 0;
    //         })
    //     ]);
    // }

    const checkIfMoveLegal = () => {}

    const styleLegalMove = ([row, column]) => {
        const isLegalMove = legalMoves.some(move => {
            return (row === move[0] && column === move[1]);
        });

        if(isLegalMove) return "legal-tile";
    }

    return (
    <GameChessboardStyled className="game-chessboard">

        {
            board.map((row, rowIndex) => {
                return row.map((tile, columnIndex) => {
                    return (
                    <div 
                        id={[rowIndex, columnIndex]} key={`${rowIndex}-${columnIndex}`} 
                        // className="tile legal-tile"
                        
                        
                        onClick={() => movePiece([rowIndex, columnIndex])}


                        className={`tile ${legalMoves.length && styleLegalMove([rowIndex, columnIndex])}`}>
                        {tile}
                    </div>)
                })
            })
        }

        {/* {
            legalMoves.map(move => {
                return <li>
                    <p>{move[0]}</p>
                    <p>{move[1]}</p>
                </li>
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

    .tile {
        padding: 5px;
        background-color: red;
        text-align: center;
    }
    .legal-tile {
        background-color: yellow;
    }
`;

export default BoardTest;