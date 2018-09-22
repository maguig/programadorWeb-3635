console.log('Init app');

var squareNodes = $('.square');

squareNodes.click(playerMove);

var player1 = true;

function playerMove(event) {
    
    var sqaure = $(this);

    if(!sqaure.hasClass('used')){
        
        sqaure.toggleClass('used');
        
        if (player1) {
            console.log('cruz en ' + this.id);
            player1 = false;
        } else {
            console.log('circulo en ' + this.id);
            player1 = true;
        }

    }

	
}
