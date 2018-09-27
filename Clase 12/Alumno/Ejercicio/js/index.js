console.log('Init app');

var squareNodes = $('.square');

squareNodes.click(playerMove);

var player1 = true;

function playerMove(event) {
    
    var sqaure = $(this);

    if(!sqaure.hasClass('used')){
        
        sqaure.toggleClass('used');
        
        if (player1) {
            //Esta es la jugada del jugador 1, que usa el circle
            sqaure.addClass('circle');

            var winP1 = checkWinner(player1);
            if(winP1){
                alert('FELICITACIONES JUGADOR 1 GANASSTEEE!!!!!!');
                $('.square').removeClass('circle');
                $('.square').removeClass('cross');
            }

            player1 = false;
        } else {
             //Esta es la jugada del jugador 2, que usa el cross
             sqaure.addClass('cross');

             var winP2 = checkWinner(player1);
             if(winP2){
                alert('FELICITACIONES JUGADOR 2 GANASSTEEE!!!!!!');
                $('.square').removeClass('circle');
                $('.square').removeClass('cross');
            }
             
            player1 = true;
            
        }

    }
	
}

function checkWinner(player1){

    var symbol = 'cross';

    if(player1 == true){
        symbol = 'circle';
    }

    var square1 = $('#square1').hasClass(symbol);
    var square2 = $('#square2').hasClass(symbol);
    var square3 = $('#square3').hasClass(symbol);
    var square4 = $('#square4').hasClass(symbol);
    var square5 = $('#square5').hasClass(symbol);
    var square6 = $('#square6').hasClass(symbol);
    var square7 = $('#square7').hasClass(symbol);
    var square8 = $('#square8').hasClass(symbol);
    var square9 = $('#square9').hasClass(symbol);

    //1er secuencia ganadora: 1 2 3
    if(square1 && square2 && square3){
        return true;
    }
    
    //1er secuencia ganadora: 4 5 6
    if(square4 && square5 && square6){
        return true;
    }
    
    //1er secuencia ganadora: 7 8 9 
    if(square7 && square8 && square9){                   
        return true;                                      
    }                                                     

    //1er secuencia ganadora: 1 4 7
    if(square1 && square4 && square7){
        return true;
    }
    
    //1er secuencia ganadora: 2 5 8
    if(square2 && square5 && square8){
        return true;
    }
    
    //1er secuencia ganadora: 3 6 9 
    if(square3 && square6 && square9){
        return true;
    }

     //1er secuencia ganadora: 1 5 9 
     if(square1 && square5 && square9){
        return true;
    }

     //1er secuencia ganadora: 3 5 7
     if(square3 && square5 && square7){
        return true;
    }


    return false;

}
