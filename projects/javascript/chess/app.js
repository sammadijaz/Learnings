const chessBoard = document.querySelector(".chessBoard")
const playerDisplay = document.querySelector(".playerDisplay")
const infoDisplay = document.querySelector(".infoDisplay")
const width = 8

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
]

function displayBoard(){
    startPieces.forEach(function(startPiece){
        const square = document.createElement('div')
        square.classList.add('square')
        square.classList.add('beige')
        chessBoard.append(square)
    })
}

displayBoard()