$(document).ready(function () {
    //default the strat with X
    var turn = "X";
    //array that we will check later for a winner
    var turns = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];
    //default computer
    var computersTurn = 'O';
    //track computer turn
    var count = 0;
    //
    //keep track if it is the computer's turn
    var gameOn = false;


    //chagne player's turn to X computers' to o
    $('#turnX').click(function () {
        turn = 'O';
        computersTurn = 'X';
        $('#turnX').removeClass('btn-primary');
        $('#turnO').addClass('btn-primary');
        reset();
    });

    $('#turnO').click(function () {
        turn = 'X';
        computersTurn = 'O';
        $('#turnO').removeClass('btn-primary');
        $('#turnX').addClass('btn-primary');
        reset();
    });

    function computerTurn() {
        var taken = false;
        while (!taken && count !== 5) {
            var computerMove = (Math.random() * 10).toFixed();
            var move = $('#'+computerMove).text();
            if(move === '#') {
                $('#'+computerMove).text(computersTurn);
                taken = true;
                turn[computerMove] = computersTurn;
            } 
        }
    }

    function playerTurn(turn, id) {
        var spotTaken = $('#' + id).text();
        if (spotTaken === '#') {
            count++;
            turns[id] = turn;
            $('#' + id).text(turn);
            winCondition(turns, turn);
            if (!gameOn) {
                computerTurn();
                winCondition(turns, computersTurn);
            }
        }
    }

    function winCondition(turnArray, currentTurn) {
        if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player' + currentTurn + 'wins');
        } else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player' + currentTurn + 'wins');
        } else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player' + currentTurn + 'wins');
        } else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player' + currentTurn + 'wins');
        } else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player' + currentTurn + 'wins');
        } else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player' + currentTurn + 'wins');
        } else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player' + currentTurn + 'wins');
        } else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
            gameOn = true;
            reset();
            alert('Player' + currentTurn + 'wins');
        } else {
            gameOn = false;
        }
    }

    $('.tic').click(function () {
        var slot = $(this).attr('id');
        playerTurn(turn, slot);
    });

    function reset() {
        turns = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];
        count = 0;
        $('.tic').text('#');
        gameOn = true;
    }

});
