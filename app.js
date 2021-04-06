var gameStart = 0;

var whiteLocation;
var blackLocation;
var turn = 0;
var destinationxy;
var x2 = 0;
var options = ["","","","","","","",""];

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

                document.getElementById("" +i+j).innerHTML = '♞';
                document.getElementById("" +i+j).classList.add('currentB');
                document.getElementById("" +i+j).addEventListener("click", function(){displayOptions(blackLocation)});
                blackLocation = "" +i+j;

            }else if(board[i][j]==2){
                document.getElementById("" +i+j).innerHTML = '♘';
                document.getElementById("" +i+j).classList.add('currentW');
                document.getElementById("" +i+j).addEventListener("click", function(){displayOptions(whiteLocation)});
                whiteLocation = "" +i+j;
            }else if(board[i][j]==5){
                document.getElementById("" +i+j).innerHTML = '';
                document.getElementById("" +i+j).classList.add('taken');
                document.getElementById("" +i+j).classList.remove('currentW');
                document.getElementById("" +i+j).classList.remove('currentB');
                //document.getElementById("" +i+j).removeEventListener("click", function(){displayOptions("" +i+j)});
                //document.getElementById("" +i+j).removeEventListener("click", function(){displayOptions("" +i+j)});

            }else if(board[i][j]==0){
                document.getElementById("" +i+j).innerHTML = '';
                //document.getElementById("" +i+j).removeEventListener("click", function(){displayOptions("" +i+j)});
                //document.getElementById("" +i+j).removeEventListener("click", function(){displayOptions("" +i+j)});
            }
        }
    }   
}

updateBoard(board);

function displayOptions(currentPsition){

    var y = Math.trunc(currentPsition%10);
    var x = Math.trunc((currentPsition/10)%10);


    options[0] = '' +(x+1) + (y+2) ;
    options[1] = '' +(x+2) + (y+1) ;
    options[2] = '' +(x+1) + (y-2) ;
    options[3] = '' +(x+2) + (y-1) ;
    options[4] = '' +(x-1) + (y+2) ;
    options[5] = '' +(x-2) + (y+1) ;
    options[6] = '' +(x-1) + (y-2) ;
    options[7] = '' +(x-2) + (y-1) ;


    for(i=0;i<8;i++){

        y2 = Math.trunc(options[i]%10);
        x2 = Math.trunc((options[i]/10)%10);

        if(0<=x2&&x2<8&&0<=y2&&y2<8){


            document.getElementById("" +x2+y2).classList.add('option');
            options[i] = "" +x2+y2;
            console.log("we are trying to display " + options[i])

            if(turn==0){
                document.getElementById(options[i]).addEventListener("click", function(){moveWhite(options[i])});
                console.log("the destination for white is " + options[i] + " on location " + x2 + y2 );
            }else if(turn==1){
                console.log("the destination for black is " + options[i] );
                document.getElementById("" +x2+y2).addEventListener("click", function(){moveBlack(options[i])});
            }
        }

    }
    

}


function moveBlack(destination) {
    if(turn==0){
        alert("this is white Turn");
    }else if(turn==1){
        for(i=0; i<8 ; i++){
            for(j=0; j<8 ; j++){
    
                if(board[i][j]==1){
                    board[i][j]=5;
                }if(''+i+j == destination){
                    board[i][j]=1;
                }
            }
        }
    
        turn = 0;
        updateBoard(board);
    }
}

function moveWhite(destination) {
    console.log(destination);
    if(turn==1){
        alert("this is black Turn");
    }else if(turn==0){

        for(i=0; i<8 ; i++){
            for(j=0; j<8 ; j++){
    
                if(board[i][j]==2){
                    board[i][j]=5;
                }if(''+i+j == destination){
                    
                    console.log("moving white to " + destination);
                    board[i][j]=2;
                }
            }
        }
        
        turn = 1;
        updateBoard(board);
    }

    
}






