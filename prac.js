$( document ).ready(function() {

  // will be needed at end to check for winner
  var winningCombinations = [[0,1,2,3],[3,4,5,6],[7,8,9,10],
    [10,11,12,13],[14,15,16,17],[17,18,19,20],[21,22,23,24],[24,25,26,27],
    [28,29,30,31],[31,32,33,34],[35,36,37,38],[38,39,40,41]];

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

    $(this).data('clicked', true);
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
      blackChipWin(circle);
    }
    else{
      circle.css("color", "red");
      circle.html("rc");
      circle.addClass("red");
      redChipWin(circle);
    }

    function blackChipWin(circle) {
      var blackChips = $(".black");
      // horizontal wins
      if($("#circle0").html() == 'bc' && $("#circle1").html() == 'bc' && $("#circle2").html() == 'bc'
        && $("#circle3").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle3").html() == 'bc' && $("#circle4").html() == 'bc' && $("#circle5").html() == 'bc'
        && $("#circle6").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle7").html() == 'bc' && $("#circle8").html() == 'bc' && $("#circle9").html() == 'bc'
        && $("#circle10").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle10").html() == 'bc' && $("#circle11").html() == 'bc' && $("#circle12").html() == 'bc'
        && $("#circle13").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle14").html() == 'bc' && $("#circle15").html() == 'bc' && $("#circle16").html() == 'bc'
        && $("#circle17").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle17").html() == 'bc' && $("#circle18").html() == 'bc' && $("#circle19").html() == 'bc'
        && $("#circle20").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle21").html() == 'bc' && $("#circle22").html() == 'bc' && $("#circle23").html() == 'bc'
        && $("#circle24").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle24").html() == 'bc' && $("#circle25").html() == 'bc' && $("#circle26").html() == 'bc'
        && $("#circle27").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle28").html() == 'bc' && $("#circle29").html() == 'bc' && $("#circle30").html() == 'bc'
        && $("#circle31").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle31").html() == 'bc' && $("#circle32").html() == 'bc' && $("#circle33").html() == 'bc'
        && $("#circle34").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle35").html() == 'bc' && $("#circle36").html() == 'bc' && $("#circle37").html() == 'bc'
        && $("#circle38").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle38").html() == 'bc' && $("#circle39").html() == 'bc' && $("#circle40").html() == 'bc'
        && $("#circle41").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      //vertical wins
      if($("#circle0").html() == 'bc' && $("#circle7").html() == 'bc' && $("#circle14").html() == 'bc' &&
        $("#circle21").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle14").html() == 'bc' && $("#circle21").html() == 'bc' && $("#circle28").html() == 'bc' &&
        $("#circle35").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle1").html() == 'bc' && $("#circle8").html() == 'bc' && $("#circle15").html() == 'bc' &&
        $("#circle22").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle15").html() == 'bc' && $("#circle22").html() == 'bc' && $("#circle29").html() == 'bc' &&
        $("#circle36").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle2").html() == 'bc' && $("#circle9").html() == 'bc' && $("#circle16").html() == 'bc' &&
        $("#circle23").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle16").html() == 'bc' && $("#circle23").html() == 'bc' && $("#circle30").html() == 'bc' &&
        $("#circle37").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle3").html() == 'bc' && $("#circle10").html() == 'bc' && $("#circle17").html() == 'bc' &&
        $("#circle24").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle17").html() == 'bc' && $("#circle24").html() == 'bc' && $("#circle31").html() == 'bc' &&
        $("#circle38").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle4").html() == 'bc' && $("#circle11").html() == 'bc' && $("#circle18").html() == 'bc' &&
        $("#circle25").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle18").html() == 'bc' && $("#circle25").html() == 'bc' && $("#circle32").html() == 'bc' &&
        $("#circle39").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle5").html() == 'bc' && $("#circle12").html() == 'bc' && $("#circle19").html() == 'bc' &&
        $("#circle26").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle19").html() == 'bc' && $("#circle26").html() == 'bc' && $("#circle33").html() == 'bc' &&
        $("#circle40").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle6").html() == 'bc' && $("#circle13").html() == 'bc' && $("#circle20").html() == 'bc' &&
        $("#circle27").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
      else if($("#circle20").html() == 'bc' && $("#circle27").html() == 'bc' && $("#circle34").html() == 'bc' &&
        $("#circle41").html() == 'bc') {
        alert("player 1 win's");
        gameRestart();
      }
    }

    function redChipWin(circle) {

      // horizontal wins
      if($("#circle0").html() == 'rc' && $("#circle1").html() == 'rc' && $("#circle2").html() == 'rc'
        && $("#circle3").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle3").html() == 'rc' && $("#circle4").html() == 'rc' && $("#circle5").html() == 'rc'
        && $("#circle6").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle7").html() == 'rc' && $("#circle8").html() == 'rc' && $("#circle9").html() == 'rc'
        && $("#circle10").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle10").html() == 'rc' && $("#circle11").html() == 'rc' && $("#circle12").html() == 'rc'
        && $("#circle13").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle14").html() == 'rc' && $("#circle15").html() == 'rc' && $("#circle16").html() == 'rc'
        && $("#circle17").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle17").html() == 'rc' && $("#circle18").html() == 'rc' && $("#circle19").html() == 'rc'
        && $("#circle20").html() == 'rc') {
        alert("player 2 win's");
      }
      else if($("#circle21").html() == 'rc' && $("#circle22").html() == 'rc' && $("#circle23").html() == 'rc'
        && $("#circle24").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle24").html() == 'rc' && $("#circle25").html() == 'rc' && $("#circle26").html() == 'rc'
        && $("#circle27").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle28").html() == 'rc' && $("#circle29").html() == 'rc' && $("#circle30").html() == 'rc'
        && $("#circle31").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle31").html() == 'rc' && $("#circle32").html() == 'rc' && $("#circle33").html() == 'rc'
        && $("#circle34").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle35").html() == 'rc' && $("#circle36").html() == 'rc' && $("#circle37").html() == 'rc'
        && $("#circle38").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle38").html() == 'rc' && $("#circle39").html() == 'rc' && $("#circle40").html() == 'rc'
        && $("#circle41").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }

      //vertical wins
      if($("#circle0").html() == 'rc' && $("#circle7").html() == 'rc' && $("#circle14").html() == 'rc' &&
        $("#circle21").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle14").html() == 'rc' && $("#circle21").html() == 'rc' && $("#circle28").html() == 'rc' &&
        $("#circle35").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle1").html() == 'rc' && $("#circle8").html() == 'rc' && $("#circle15").html() == 'rc' &&
        $("#circle22").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle15").html() == 'rc' && $("#circle22").html() == 'rc' && $("#circle29").html() == 'rc' &&
        $("#circle36").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle2").html() == 'rc' && $("#circle9").html() == 'rc' && $("#circle16").html() == 'rc' &&
        $("#circle23").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle16").html() == 'rc' && $("#circle23").html() == 'rc' && $("#circle30").html() == 'rc' &&
        $("#circle37").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle3").html() == 'rc' && $("#circle10").html() == 'rc' && $("#circle17").html() == 'rc' &&
        $("#circle24").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle17").html() == 'rc' && $("#circle24").html() == 'rc' && $("#circle31").html() == 'rc' &&
        $("#circle38").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle4").html() == 'rc' && $("#circle11").html() == 'rc' && $("#circle18").html() == 'rc' &&
        $("#circle25").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle18").html() == 'rc' && $("#circle25").html() == 'rc' && $("#circle32").html() == 'rc' &&
        $("#circle39").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle5").html() == 'rc' && $("#circle12").html() == 'rc' && $("#circle19").html() == 'rc' &&
        $("#circle26").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle19").html() == 'rc' && $("#circle26").html() == 'rc' && $("#circle33").html() == 'rc' &&
        $("#circle40").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle6").html() == 'rc' && $("#circle13").html() == 'rc' && $("#circle20").html() == 'rc' &&
        $("#circle27").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
      else if($("#circle20").html() == 'rc' && $("#circle27").html() == 'rc' && $("#circle34").html() == 'rc' &&
        $("#circle41").html() == 'rc') {
        alert("player 2 win's");
        gameRestart();
      }
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

  } // ends checkWinner()

}); // ends document.ready function()
