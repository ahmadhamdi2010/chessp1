var gameStart = 0;

var whiteLocation=[0][7];
var blackLocation=[7][0];

var board = [
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0],
  ];

function updateBoard(board) {
    for(i=0; i<8 ; i++){
        for(j=0; j<8 ; j++){
            if(board[i][j]==1){
                console.log("" +i+j);
                document.getElementById("" +i+j).innerHTML = '♞';
            }else if(board[i][j]==2){
                console.log("" +i+j);
                document.getElementById("" +i+j).innerHTML = '♘';
            }else if(board[i][j]==5){
                document.getElementById("" +i+j).classList.toggle('taken');
            }else if(board[i][j]==0){
                document.getElementById("" +i+j).innerHTML = '';
            }
        }
    }   
}


function moveBlack(destination) {

    for(i=0; i<8 ; i++){
        for(j=0; j<8 ; j++){

            if(board[i][j]==1){
                board[i][j]=0;
            }if(''+i+j == destination){
                board[i][j]=1;
            }
        }
    }

    updateBoard(board);

}

function moveWhite(destination) {

       for(i=0; i<8 ; i++){
        for(j=0; j<8 ; j++){

            if(board[i][j]==2){
                board[i][j]=0;
            }if(''+i+j == destination){
                board[i][j]=2;
            }
        }
    }
    
    updateBoard(board);

}


function displayOptions(currentPsition){

}

function markUsedPosition(position) {
    
}

function name(params) {
    
}



//document.getElementById("h1").addEventListener("click", displayDate);

