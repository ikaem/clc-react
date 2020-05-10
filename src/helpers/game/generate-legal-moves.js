// in all of twhese, i dont have to filter each direction individually for out of bounds movement --- i can do it later all together on the return...?!

// maybe those .flats() are not needed.... they are, tho... or are they... maybe they are not because i am spreading it later inside the return of legalMoves...?


export const bishopLegalMoves = ([row, column]) => {
    const base = 1;

    const goUpward = Array(row).fill().map((_, index, array) => {
        const upperRow = row - index - base;
        // console.log("upper row", upperRow);
        const leftColumn = column - index - base;
        const rightColumn = column + index + base;

        return [[upperRow, leftColumn], [upperRow, rightColumn]];
    }).flat().filter(move => move[1] < 8 && move[1] >= 0);

    // console.log("upward inside bishop", goUpward);

    const goDownward = Array(7 - row).fill().map((_, index, array) => {
        // console.log("row", row);
        const lowerRow = row + index + base;
        const leftColumn = column - index - base;
        const rightColumn = column + index + base;
        
        return [[lowerRow, leftColumn], [lowerRow, rightColumn]]
    }).flat().filter(move => move[1] < 8 && move[1] >= 0);

    // console.log("bishops go backward...", goDownward);
    return [...goUpward, ...goDownward];

}

export const knightLegalMoves = ([row, column]) => {
    const baseRow = 1;
    const baseColumn = 2;


    const goUpward = [];
    const goDownward = [];

    const up = Array(row > 2? 2: row).fill().map((_, index, array) => {
        const upperRow = row - baseRow - index;
        const leftColumn = column - baseColumn + index;
        const rightColumn = column + baseColumn - index;

        return [[upperRow, leftColumn], [upperRow, rightColumn]];
    }).flat().filter(move => move[1] < 8 && move[1] >= 0);

    // console.log("knight moves up", up);
/* 
    7
    7 - 7 = 0
    7 - 6 = 1
    7 - 5 = 2
    7 - 4 = 3 
    
    7 - row > 2? 2: 7 - row
    
    */

    const down = Array(7 - row > 2? 2: 7 - row).fill().map((_, index, array) => {
        const lowerRow = row + baseRow + index;
        const leftColumn = column - baseColumn + index;
        const rightColumn = column + baseColumn - index;

        return [[lowerRow, leftColumn], [lowerRow, rightColumn]];
    }).flat().filter(move => move[1] < 8 && move[1] >= 0);

    // console.log("knight moves up", up);
    // console.log("knight moves down", down);

    // possibly i could immediately create correctER number of arrays array is length - needed steps up by the night to perform a jump...

    // const down = Array(2).fill().map((_, index, array) => {

    // })

    return [...up, ...down];

}

export const rookLegalMoves = ([row, column]) => {
    const baseRow = 1;
    const baseColumn = 1;

    const goUp = Array(row).fill().map((_, index, array) => {
        const upperRow = row - baseRow - index;
        return [upperRow, column];
    });
    const goDown = Array(7 - row).fill().map((_, index, array) => {
        const lowerRow = row + baseRow + index;
        return [lowerRow, column];
    });

    const goLeft = Array(column).fill().map((_, index, array) => {
        const leftColumn = column - baseColumn - index;
        return [row, leftColumn];
    });

    const goRight = Array(7 - column).fill().map((_, index, array) => {
        const rightColumn = column + baseColumn + index;
        return [row, rightColumn];
    });

    // console.log("goUp", goUp)
    // console.log("goDown", goDown)
    // console.log("goLeft", goLeft);
    // console.log("goRight", goRight);

    return [...goUp, ...goDown, ...goLeft, ...goRight];
}

export const queenLegalMoves = ([row, column]) => {

    const baseRow = 1;
    const baseColumn = 1;

    const goUp = Array(row).fill().map((_, index, array) => {
        const upperRow = row - baseRow - index;
        return [upperRow, column];
    });
    const goDown = Array(7 - row).fill().map((_, index, array) => {
        const lowerRow = row + baseRow + index;
        return [lowerRow, column];
    });

    const goLeft = Array(column).fill().map((_, index, array) => {
        const leftColumn = column - baseColumn - index;
        return [row, leftColumn];
    });

    const goRight = Array(7 - column).fill().map((_, index, array) => {
        const rightColumn = column + baseColumn + index;
        return [row, rightColumn];
    });

    const goUpward = Array(row).fill().map((_, index, array) => {
        const upperRow = row - index - baseRow;
        // console.log("upper row", upperRow);
        const leftColumn = column - index - baseColumn;
        const rightColumn = column + index + baseColumn;

        return [[upperRow, leftColumn], [upperRow, rightColumn]];
    }).flat().filter(move => move[1] < 8 && move[1] >= 0);

    // console.log("upward inside bishop", goUpward);

    const goDownward = Array(7 - row).fill().map((_, index, array) => {
        // console.log("row", row);
        const lowerRow = row + index + baseRow;
        const leftColumn = column - index - baseColumn;
        const rightColumn = column + index + baseColumn;
        
        return [[lowerRow, leftColumn], [lowerRow, rightColumn]]
    }).flat().filter(move => move[1] < 8 && move[1] >= 0);

    // console.log("goUp", goUp)
    // console.log("goDown", goDown)
    // console.log("goLeft", goLeft);
    // console.log("goRight", goRight);

    // console.log("go downward", goDownward);

    return [...goUp, ...goDown, ...goLeft, ...goRight, ...goUpward, ...goDownward];
}

export const kingLegalMoves = ([row, column]) => {
    const baseRow = 1;
    const baseColumn = 1;

    const goUp = [row - baseRow, column];
    const goDown = [row + baseRow, column];
    const goLeft = [row, column - baseColumn];
    const goRight = [row, column + baseColumn];

    const goDownward = [[row + baseRow, column - baseColumn], [row + baseRow, column + baseRow]];
    const goUpward = [[row - baseRow, column - baseColumn], [row - baseRow, column + baseRow]];

    // console.log("go downward...", goDownward);

    // console.log("king goes up...", goUp);
    const movement = [
        goUp,
        goDown,
        goLeft,
        goRight,
        ...goDownward,
        ...goUpward

    ]
    .filter((move) => {
        // const [row, column] = move;
        return move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8
    });

    return movement;
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