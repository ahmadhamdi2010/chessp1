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
                document.getElementById("" +i+j).classList.add('currentB');

            }else if(board[i][j]==2){
                console.log("" +i+j);
                document.getElementById("" +i+j).innerHTML = '♘';
                document.getElementById("" +i+j).classList.add('currentW');
            }else if(board[i][j]==5){
                document.getElementById("" +i+j).innerHTML = '';
                document.getElementById("" +i+j).classList.add('taken');
                document.getElementById("" +i+j).classList.remove('currentW');
                document.getElementById("" +i+j).classList.remove('currentB');
            }else if(board[i][j]==0){
                document.getElementById("" +i+j).innerHTML = '';
            }
        }
    }   
}

updateBoard(board);

function moveBlack(destination) {

    for(i=0; i<8 ; i++){
        for(j=0; j<8 ; j++){

            if(board[i][j]==1){
                board[i][j]=5;
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
                board[i][j]=5;
            }if(''+i+j == destination){
                board[i][j]=2;
            }
        }
    }
    
    updateBoard(board);

}

function displayOptions(currentPsition){

    var y = Math.trunc(currentPsition%10);
    var x = Math.trunc((currentPsition/10)%10);

    var options = [-1,-1,-1,-1,-1,-1,-1,-1];

    options[0] = '' +(x+1) + (y+2) ;
    options[1] = '' +(x+2) + (y+1) ;
    options[2] = '' +(x+1) + (y-2) ;
    options[3] = '' +(x+2) + (y-1) ;
    options[4] = '' +(x-1) + (y+2) ;
    options[5] = '' +(x-2) + (y+1) ;
    options[6] = '' +(x-1) + (y-2) ;
    options[7] = '' +(x-2) + (y-1) ;


    for(i=0;i<8;i++){
        var y = Math.trunc(options[i]%10);
        var x = Math.trunc((options[i]/10)%10);
        if(0<=x&&x<8&&0<=y&&y<8){
            document.getElementById("" +x+y).classList.add('option');
        }
    }
    

}





//document.getElementById("h1").addEventListener("click", displayDate);

