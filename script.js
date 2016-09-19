$( document ).ready(function() {

  var winningCombinations = [

    // horizontal wins
    [0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],[7,8,9,10],[8,9,10,11],[9,10,11,12],
    [10,11,12,13],[14,15,16,17],[15,16,17,18],[16,17,18,19],[17,18,19,20],[21,22,23,24],
    [22,23,24,25],[23,24,25,26],[24,25,26,27],[28,29,30,31],[29,30,31,32],[30,31,32,33],
    [31,32,33,34],[35,36,37,38],[36,37,38,39],[37,38,39,40],[38,39,40,41],

    // vertical wins
    [0,7,14,21],[7,14,21,28],[14,21,28,35],[1,8,15,22],[8,15,22,29],[15,22,29,36],
    [2,9,16,23],[9,16,23,30],[16,23,30,37],[3,10,17,24],[10,17,24,31],[17,24,31,38],
    [4,11,18,25],[11,18,25,32],[18,25,32,39],[5,12,19,26],[12,19,26,33],[19,26,33,40],
    [6,13,20,27],[13,20,27,34],[20,27,34,41],

    // diagonol wins
    [14,22,30,38],[7,15,23,31],[15,23,31,39],[0,8,16,24],[8,16,24,32],[16,24,32,40],
    [1,9,17,25],[9,17,25,33],[17,25,33,41],[2,10,18,26],[10,18,26,34],[3,11,19,27],
    [20,26,32,38],[13,19,25,31],[19,25,31,37],[6,12,18,24],[12,18,24,30],[18,24,30,36],
    [5,11,17,23],[11,17,23,29],[17,23,29,35],[4,10,16,22],[10,16,22,28],[3,9,15,21],

  ];

  // player turn
  var $turn = $("#turn");

  // boolean
  var check = true;

  // game board
  var $board = $(".board");

  // create class for circles
  var $circles = $("<div class='circle'></div>");

  // create fore loop to append circles to board
  for(var i = 0; i <= 41; i++) {
    var $circles = $("<div id = circle" + i + " " + " div class = circle>");

    // create on click for circle (user can only click once)
    $circles.one("click", function(){

      // chip sound effect on every click
      var $audio = $("<audio autoplay><source src='chip.mp3'/>");

      // turn check to false for player 1 and give a yellow chip
      if(check == true) {
        $(this).css("background-color", "yellow");
        $turn.css("color", "red");
        check = false;
        // change turn to player two
        $turn.text("Player two's turn");
      }

      // turn check to true for player 2 and give a red chip
      else {
        $(this).css("background-color", "red");
        $turn.css("color", "yellow");
        check = true;
        // change turn to player one
        $turn.text("Player one's turn");
      }

      // pass circle to addClass function
      addClass($(this));

    }); // ends onOneClick()

    // display all new circles
    $circles.appendTo($board);
  } // ends foreloop

  // create function for adding classes
  var addClass = function(circle) {
    if(check == false) {
      circle.addClass("yellow");
      yellowChipWin();
    }
    else{
      circle.addClass("red");
      redChipWin();
    }
  } // ends function

  // checks for yellow chip winner
  var yellowChipWin = function() {
    var yellowChips = $(".yellow");
    // loops through winning combos
    for(var i = 0; i < winningCombinations.length; i++) {
      var winCounter = 0;
      // loops through index pos within winning combos
      for (var j = 0; j < winningCombinations[i].length; j++) {
        // loops through all yellow chips
        for(var k = 0; k < yellowChips.length; k++) {
          // when the id of the circle macthes the index pos
          // we know its been clicked
          if(yellowChips.eq(k).attr("id") == "circle" + winningCombinations[i][j]) {
            winCounter++;
            if (winCounter == 4) {
              setTimeout(gameOver, 100);
              // crowd cheers for winner
              var $crowd = $("<audio autoplay><source src='crowd.mp3'/>");
            }
          }
        } // ends for loop
      } // ends inner for loop
    } // ends outer loop
  } // ends function

  // checks for red chip winner
  var redChipWin = function() {
    var redChips = $(".red");
    // loops through winning combos
    for(var i = 0; i < winningCombinations.length; i++) {
      var winCounter = 0;
      // loops through index pos within winning combos
      for (var j = 0; j < winningCombinations[i].length; j++) {
        // loops through all red chips
        for(var k = 0; k < redChips.length; k++) {
          // when the id of the circle macthes the index pos
          // we know its been clicked
          if(redChips.eq(k).attr("id") == "circle" + winningCombinations[i][j]) {
            winCounter++;
            if (winCounter == 4) {
              setTimeout(gameOver, 100);
              // crowd cheers for winner
              var $crowd = $("<audio autoplay><source src='crowd.mp3'/>");
            }
          }
        } // end for loop
      } // end inner for loop
    } // end outter loop
  } // end function

    // game over function
    // will give automatic rematch
    var gameOver = function() {
     if(check == false) {
      alert('player one wins');
     }
     else{
      alert('player two wins');
     }
      location.reload();
    }

     // restart game with button
    var restartGame = function() {
      $('#button').click(function() {
        location.reload();
      });
    }

    restartGame();

  }); // ends document.ready function()
