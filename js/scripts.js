$(document).ready(function() {
  var player1;
  var player2;
  var player1Score = 0;
  var player2Score = 0;
  var turnScore = 0;
  var activePlayer = 1;
  var result = 1;
  $("#friend").click(function(event) {
    $("#friendimg").attr("src", "ed607f9eafc4829f6f7c8b27e378418b--emojis-blond.jpg");
    $("#friendimg").attr("src", "SNLemojiconehead.png");
  });

  $("#playbtn").click(function(event) {
    if ($('#friend').is(':checked')) {
      $("#ply1img").attr("src", "ed607f9eafc4829f6f7c8b27e378418b--emojis-blond.jpg");
      $("#ply2img").attr("src", "SNLemojiconehead.png");
      player1 = "Player 1";
      player2 = "Player 2";
      event.preventDefault();


    } else {
      alert("please select an opponent");
      event.preventDefault();
    }
    $(".playsection").show();
    $(".scoresection").show();
    player1Score = 0;
    player2Score = 0;
    turnScore = 0;
    activePlayer = 1;

    $(".player1").text(player1);
    $(".player2").text(player2);

    $(".player1Score").text(player1Score);
    $(".player2Score").text(player2Score);
    $(".turnScore").text(turnScore);
    changeplayer(activePlayer);
    $(".homepage").hide();
    $(".winnerSection").hide();
  });

  $("#rollbtn").click(function(event) {
    $("#diceimg").attr("src", "animated-dice-image-0104.gif");
    setTimeout(
      function() {
        result = dice.roll();

        if (result === 6) {
          $("#diceimg").Document("src", "849-dice-free-ipad-hd-wallpaper_1024x1024.jpg");
        } else if (result === 5) {
          $("#diceimg").attr("src", "849-dice-free-ipad-hd-wallpaper_1024x1024.jpg");
        } else if (result === 4) {
          $("#diceimg").attr("src", "849-dice-free-ipad-hd-wallpaper_1024x1024.jpg");
        } else if (result === 3) {
          $("#diceimg").attr("src", "849-dice-free-ipad-hd-wallpaper_1024x1024.jpg");
        } else if (result === 2) {
          $("#diceimg").attr("src", "849-dice-free-ipad-hd-wallpaper_1024x1024.jpg");
        } else {
          $("#diceimg").attr("src", "849-dice-free-ipad-hd-wallpaper_1024x1024.jpg");
        }
        if (result > 1) {
          turnScore = turnScore + result;
          $(".turnScore").text(turnScore);
        } else {
          turnScore = 0;
          $(".turnScore").text(turnScore);
          if (activePlayer === 1) {
            activePlayer = 2;
          } else {
            activePlayer = 1;
          }
          changeplayer(activePlayer);
        }
      }, 1000);
  });

  var dice = {
    sides: 6,
    roll: function() {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

  function changeplayer(player) {
    if (player === 1) {
      $(".player").text(player1);
      $(".player1").css("background-color", "#7e9186");
      $(".player2").css("background-color", "transparent");
      $('#rollbtn').prop('disabled', false);
      $('#passbtn').prop('disabled', false);
      // background-color: #05b553;

    } else {
      $(".player").text(player2);
      $(".player2").css("background-color", "#7e9186");
      $(".player1").css("background-color", "transparent");
      // Computer auto Play
      if (player2 === "Computer") {
        $('#rollbtn').prop('disabled', true);
        $('#passbtn').prop('disabled', true);
        var delayMillis = 2000; //2 second
        setTimeout(function() {
          computerPlay();
        }, delayMillis);
      }
    }
  }
  $("#passbtn").click(function(event) {
    if (activePlayer === 1) {
      player1Score = player1Score + turnScore;
      $(".player1Score").text(player1Score);
      if (player1Score < 100) {
        activePlayer = 2;
        changeplayer(activePlayer);
      } else {
        $(".playsection").hide();
        $(".winnerSection").show();
        $(".winner").text(player1);
      }
    } else {
      player2Score = player2Score + turnScore;
      $(".player2Score").text(player2Score);
      if (player2Score < 100) {
        activePlayer = 1;
        changeplayer(activePlayer);
      } else {
        $(".playsection").hide();
        $(".winnerSection").show();
        $(".winner").text(player2);
      }
    }
    turnScore = 0;
    $(".turnScore").text(turnScore);
  });
});
