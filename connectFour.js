$( document ).ready(function() {

  // will be needed at end to check for winner
  var winningCombinations = [[0,1,2,3],[3,4,5,6],[7,8,9,10],
    [10,11,12,13],[14,15,16,17],[17,18,19,20],[21,22,23,24],[24,25,26,27],
    [28,29,30,31],[31,32,33,34],[35,36,37,38],[38,39,40,41]];

  // grab turn id and change players turn
  var $turn = $("#turn");

  // boolean for color change
  var check = true;

  // grab board
  var $board = $(".board");

  // create class for circles
  var $circles = $("<div class='circle'></div>");

  // create fore loop to append circles to board
  for(var i = 0; i <= 41; i++) {
    var $circles = $("<div id = circle" + i + " " + " div class = circle>");
    $circles.html(i);
    $circles.one("click", function(){  // one click only for each circle

    // when check is true onClick will give black chip
    // and change turn to player two
    if(check == true) {
      $(this).css("background-color", "black");
      $turn.css("color", "red");
      check = false;
      $turn.text("Player two's turn");
    }

    // when check is false onClick will give red chip
    // and change turn to player one
    else {
      $(this).css("background-color", "red");
      $turn.css("color", "black");
      check = true;
      $turn.text("Player one's turn");
    }

    //$(this).data('clicked', true);
    //var click = $(this).data('clicked', true);
    addClass($(this));

    });

    // display all new circles
    $circles.appendTo($board);
  } // ends foreloop

  // create function for adding class
  function addClass(circle) {
    if(check == false) {
      circle.html("bc");
      circle.css("color", "black");
      circle.addClass("black");
      blackChipWin();
    }
    else{
      circle.css("color", "red");
      circle.html("rc");
      circle.addClass("red");
      redChipWin();
    }
  }

    function blackChipWin() {
      var blackChips = $(".black");
      for(var i = 0; i < winningCombinations.length; i++) {
          var winCounter = 0;
          for (var j = 0; j < winningCombinations[i].length; j++) {
            for(var k = 0; k < blackChips.length; k++) {
              if(blackChips.eq(k).attr("id") == "circle" + winningCombinations[i][j]) {
                winCounter++;
                console.log('win counter: ', winCounter);
                if (winCounter == 4) {
                  alert('game over');
                }
              }
            } // end for loop
          } // end inner for loop
      } // end outer loop
    } // end function

    function redChipWin() {
      var redChips = $(".red");
    }

    // reset board function
    function restartGame() {
      $('#reload').click(function() {
        location.reload();
      });
    }

    function gameRestart() {
      location.reload();
    }
    restartGame();

  }); // ends addClass()

 // ends document.ready function()
