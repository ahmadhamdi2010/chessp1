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
var whiteLocation = 70;
var blackLocation = 07;

var options = ["","","","","","","",""];



function updateBoard(board) {
    for(i=0; i<=7 ; i++){
        for(j=0; j<=7 ; j++){
            if(board[i][j]==1){
                document.getElementById("" +i+j).innerHTML = '♞';
                document.getElementById("" +i+j).classList.add('currentB');
                document.getElementById("" +i+j).addEventListener('click', function(){displayOptions(blackLocation)});
                document.getElementById("" +i+j).classList.remove('option');
                

            }else if(board[i][j]==2){
                document.getElementById("" +i+j).innerHTML = '♘';
                document.getElementById("" +i+j).classList.add('currentW');
                document.getElementById("" +i+j).addEventListener('click', function(){displayOptions(whiteLocation)});
                document.getElementById("" +i+j).classList.remove('option');
                
            }else if(board[i][j]==5){
                document.getElementById("" +i+j).innerHTML = '';
                document.getElementById("" +i+j).classList.add('taken');
                document.getElementById("" +i+j).classList.remove('currentW');
                document.getElementById("" +i+j).classList.remove('currentB');
                document.getElementById("" +i+j).classList.remove('option');

            }else if(board[i][j]==0){
                document.getElementById("" +i+j).innerHTML = '';
                document.getElementById("" +i+j).classList.remove('option');
                document.getElementById("" +i+j).classList.remove('currentW');
                document.getElementById("" +i+j).classList.remove('currentB');

            }
        }
    }   
}

var movePiece = function (destination){
    removeAllEvents();

    var y = Math.trunc(destination%10);
    var x = Math.trunc((destination/10)%10);
    
    if(!(board[x][y]==5)){
        if(gameStart===0){
            console.log("entered white");
            for(var i=0; i<=7 ; i++){
                for(var j=0; j<=7 ; j++){
                    if(board[i][j]==2){
                        board[i][j]=5;
                    }
                    if(''+i+j == destination){
                        board[i][j]=2;
                        whiteLocation = "" +i+j;
                        
                    }
                }
            }
            gameStart = gameStart +1;
        }else if (gameStart===1){
            console.log("entered Black");
            for(var i=0; i<=7 ; i++){
                for(var j=0; j<=7 ; j++){
                    if(board[i][j]==1){
                        board[i][j]=5;
                    }
                    if(''+i+j == destination){
                        board[i][j]=1;
                        blackLocation = "" +i+j;
                        
                    }
                }
            }
            gameStart = gameStart -1;

        }updateBoard(board);
    }else{alert("you can't move there");}


    
}   

var displayOptions = function (currentPsition){

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

        if(0<=x2&&x2<8&&0<=y2&&y2<8){
            document.getElementById("" +x2+y2).classList.add('option');
            options[i] = "" +x2+y2;
            console.log("we are trying to display " + options[i])
        }else{
            options[i] = "meme" ;
        }

    }

    
    document.getElementById(""+options[0]).addEventListener('click', function(){movePiece(""+ options[0])});
    document.getElementById(""+options[1]).addEventListener('click', function(){movePiece(""+ options[1])});
    document.getElementById(""+options[2]).addEventListener('click', function(){movePiece(""+ options[2])});
    document.getElementById(""+options[3]).addEventListener('click', function(){movePiece(""+ options[3])});
    document.getElementById(""+options[4]).addEventListener('click', function(){movePiece(""+ options[4])});
    document.getElementById(""+options[5]).addEventListener('click', function(){movePiece(""+ options[5])});
    document.getElementById(""+options[6]).addEventListener('click', function(){movePiece(""+ options[6])});
    document.getElementById(""+options[7]).addEventListener('click', function(){movePiece(""+ options[7])});


}

function removeAllEvents() {

    for(var i=0; i<=7 ; i++){
        for(var j=0; j<=7 ; j++){
            var old_element = document.getElementById("" +i+j);
            var new_element = old_element.cloneNode(true);
            old_element.parentNode.replaceChild(new_element, old_element);  
        }
    }
    
}

