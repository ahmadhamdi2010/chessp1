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

var gameStart = 0;
var globalturn = "white" ;
var whiteLocation;
var blackLocation;

var options = ["","","","","","","",""];


function updateBoard(board) {
    for(i=0; i<8 ; i++){
        for(j=0; j<8 ; j++){
            if(board[i][j]==1){
                document.getElementById("" +i+j).innerHTML = '♞';
                document.getElementById("" +i+j).classList.add('currentB');
                document.getElementById("" +i+j).innerHTML.addEventListener("click", function(){displayOptions(blackLocation)});
                document.getElementById("" +i+j).classList.remove('option');

                blackLocation = "" +i+j;

            }else if(board[i][j]==2){
                document.getElementById("" +i+j).innerHTML = '♘';
                document.getElementById("" +i+j).classList.add('currentW');
                document.getElementById("" +i+j).innerHTML.addEventListener("click", function(){displayOptions(whiteLocation)});
                document.getElementById("" +i+j).classList.remove('option');
                whiteLocation = "" +i+j;
            }else if(board[i][j]==5){
                document.getElementById("" +i+j).innerHTML = '';
                document.getElementById("" +i+j).classList.add('taken');
                document.getElementById("" +i+j).classList.remove('currentW');
                document.getElementById("" +i+j).classList.remove('currentB');
                document.getElementById("" +i+j).classList.remove('option');

            }else if(board[i][j]==0){
                document.getElementById("" +i+j).innerHTML = '';
                var element = document.getElementById("" +i+j);
                document.getElementById("" +i+j).classList.remove('option');

                //element.onclick = function() {movePiece.onItemClick(turn, this);};
                //document.getElementById("" +i+j).addEventListener("click", function(){movePiece(turn , "" +i+j)});

            }
        }
    }   
}

function movePiece(destination){
    if(checkTurn()){
        console.log("we are moving " + globalturn + ' to ' + destination);
        for(var i=0; i<8 ; i++){
            for(var j=0; j<8 ; j++){
                console.log('running white');
                if(board[i][j]==2){
                    board[i][j]=5;
                }if(''+i+j == destination){
                    board[i][j]=2;
                }
            }
        }
        console.log("changing turn from white to black");
        options = ["","","","","","","",""];
        globalturn = "black";


    }else if(!checkTurn()){
        console.log("we are moving " + globalturn + ' to ' + destination);
        for(var i=0; i<8 ; i++){
            for(var j=0; j<8 ; j++){
                console.log('running black');
                if(board[i][j]==1){
                    board[i][j]=5;
                }
                
                if(''+i+j == destination){
                    board[i][j]=1;
                }
            }
        }
        console.log("changing turn from black to white");
        options = ["","","","","","","",""];
        globalturn = "white";
    }
    updateBoard(board);
}   

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

        var y2 = Math.trunc(options[i]%10);
        var x2 = Math.trunc((options[i]/10)%10);

        //options[i] = "" +x2+y2;

        if(0<=x2&&x2<8&&0<=y2&&y2<8){


            document.getElementById("" +x2+y2).classList.add('option');
            options[i] = "" +x2+y2;
            console.log("we are trying to display " + options[i])

        }else{
            options[i] = "meme" ;
        }

    }
    document.getElementById(""+options[0]).addEventListener("click", function(){movePiece(""+ options[0])});
    document.getElementById(""+options[1]).addEventListener("click", function(){movePiece(""+ options[1])});
    document.getElementById(""+options[2]).addEventListener("click", function(){movePiece(""+ options[2])});
    document.getElementById(""+options[3]).addEventListener("click", function(){movePiece(""+ options[3])});
    document.getElementById(""+options[4]).addEventListener("click", function(){movePiece(""+ options[4])});
    document.getElementById(""+options[5]).addEventListener("click", function(){movePiece(""+ options[5])});
    document.getElementById(""+options[6]).addEventListener("click", function(){movePiece(""+ options[6])});
    document.getElementById(""+options[7]).addEventListener("click", function(){movePiece(""+ options[7])});
    

}

function checkTurn(){
    if(globalturn=="white"){
        return 1;
    }else{
        return 0;
    }
}