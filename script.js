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

    // diagnol wins
    [14,22,30,38],[7,15,23,31],[15,23,31,39],[0,8,16,24],[8,16,24,32],[16,24,32,40],
    [1,9,17,25],[9,17,25,33],[17,25,33,41],[2,10,18,26],[10,18,26,34],[3,11,19,27],
    [20,26,32,38],[13,19,25,31],[19,25,31,37],[6,12,18,24],[12,18,24,30],[18,24,30,36],
    [5,11,17,23],[11,17,23,29],[17,23,29,35],[4,10,16,22],[10,16,22,28],[3,9,15,21],

  ];

  // grab turn id for player change
  var $turn = $("#turn");

  // boolean for color change
  var check = true;

  // access board
  var $board = $(".board");


  // create class for circles
  var $circles = $("<div class='circle'></div>");

  // create fore loop to append circles to board
  for(var i = 0; i <= 41; i++) {
    var $circles = $("<div id = circle" + i + " " + " div class = circle>");

    // create on click for circle
    $circles.one("click", function(){

      // chip sound effect on every click
      var $audio = $("<audio autoplay><source src='chip.mp3'/>");

      // when check is true onClick will give yellow chip
      // and change turn to player two
      if(check == true) {
        $(this).css("background-color", "yellow");
        $turn.css("color", "red");
        check = false;
        $turn.text("Player two's turn");
      }

      // when check is false onClick will give red chip
      // and change turn to player one
      else {
        $(this).css("background-color", "red");
        $turn.css("color", "yellow");
        check = true;
        $turn.text("Player one's turn");
      }
      addClass($(this));

    }); // ends onOneClick()

    // display all new circles
    $circles.appendTo($board);
  } // ends foreloop

  // create function for adding class
  function addClass(circle) {
    if(check == false) {
      circle.addClass("yellow");
      yellowChipWin();
    }
    else{
      circle.addClass("red");
      redChipWin();
    }
  }

  // deals with black chips
  function yellowChipWin() {

    var yellowChips = $(".yellow");
    for(var i = 0; i < winningCombinations.length; i++) {
      var winCounter = 0;
      for (var j = 0; j < winningCombinations[i].length; j++) {
        for(var k = 0; k < yellowChips.length; k++) {
          if(yellowChips.eq(k).attr("id") == "circle" + winningCombinations[i][j]) {
            winCounter++;
            if (winCounter == 4) {
              setTimeout(gameOver, 100);
            }
          }
        } // end for loop
      } // end inner for loop
    } // end outer loop
  } // end function

  // deals with red chips
  function redChipWin() {
    var redChips = $(".red");
    for(var i = 0; i < winningCombinations.length; i++) {
      var winCounter = 0;
      for (var j = 0; j < winningCombinations[i].length; j++) {
        for(var k = 0; k < redChips.length; k++) {
          if(redChips.eq(k).attr("id") == "circle" + winningCombinations[i][j]) {
            winCounter++;
            console.log('win counter: ', winCounter);
            if (winCounter == 4) {
              setTimeout(gameOver, 100);
            }
          }
        } // end for loop
      } // end inner for loop
    } // end outter loop
  } // end function

    // restart game with button
    function restartGame() {
      $('#button').click(function() {
        location.reload();
      });
    }

    // restart game without button will be called as soon as their is a winner
    function gameOver() {
      alert('game over');
      location.reload();
    }
    restartGame();

  }); // ends addClass()

 // ends document.ready function()
