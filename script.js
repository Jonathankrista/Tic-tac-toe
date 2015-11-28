$('document').ready(function(){
  var input = "O"
  var turnCount = 0;
  $('td').on('click', function(){
    if(turnCount === 9){
      alert("Click to play again");
      location.reload();
    }
    else{
      if($(this).hasClass('picked')){
      }
      else{
        $(this).html(input).addClass('picked');
        if(input === "X"){
          input = "O"
          checkVictory('X')
        }
        else {
          input = "X"
          checkVictory('O')
        }
        turnCount += 1;
      }
      //check for win condition
    }

  });

  function checkVictory(player){
       //top row check
        if ($('#board').find('#1').text() !== ''){
            if ($('#board').find('#1').text() == $('#board').find('#2').text()) {
                if ($('#board').find('#1').text() == $('#3').text()) {
                    alert('Game over! '+ player +' is the winner!');
                    location.reload();
                }
            }
        //left column check
            if ($('#board').find('#1').text() == $('#board').find('#4').text()) {
                if ($('#board').find('#1').text() == $('#7').text()) {
                    alert('Game over! '+ player +' is the winner!');
                    location.reload();
                }
            }
        //left diagonal check
            if ($('#board').find('#1').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#1').text() == $('#9').text()) {
                    alert('Game over! '+ player +' is the winner!');
                    location.reload();
                }
            }
        }

       //middle column check
        if ($('#board').find('#2').text() !== ''){
            if ($('#board').find('#2').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#2').text() == $('#8').text()) {
                    alert('Game over! '+ player +' is the winner!');
                    location.reload();
                }
            }
        }

        //right column check
        if ($('#board').find('#3').text() !== ''){
            if ($('#board').find('#3').text() == $('#board').find('#6').text()) {
                if ($('#board').find('#3').text() == $('#9').text()) {
                    alert('Game over! '+ player +' is the winner!');
                    location.reload();
                }
            }
            //right diag check
            if ($('#board').find('#3').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#3').text() == $('#7').text()) {
                    alert('Game over! '+ player +' is the winner!');
                    location.reload();
                }
            }
        }

        //middle row check

        if ($('#board').find('#4').text() !== ''){
            if ($('#board').find('#4').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#4').text() == $('#6').text()) {
                    alert('Game over! '+ player +' is the winner!');
                    location.reload();
                }
            }
        }

        //bottom row check
        if ($('#board').find('#7').text() !== ''){
            if ($('#board').find('#7').text() == $('#board').find('#8').text()) {
                if ($('#board').find('#7').text() == $('#9').text()) {
                    alert('Game over! '+ player +' is the winner!');
                    location.reload();
                }
            }
        }

    }
})

function myFunction(){
        location.reload();
    }
