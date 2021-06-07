let currentPlayer = 'x';
      let gameStatus = "Start";

      const ruter = document.getElementsByClassName("rute");
      for (let i = 0; i < ruter.length; i++) {ruter[i]
        .addEventListener("click", function() {
          
          if (ruter[i].innerHTML.trim() == "" && gameStatus == "Start") {
              ruter[i].innerHTML = currentPlayer;

            currentPlayer = currentPlayer === "x" ? "o" : "x";
            
            document.getElementById(
              "spiller"
            ).innerHTML = currentPlayer.toUpperCase();
            
            if (
              ruter[0].innerHTML == ruter[1].innerHTML && ruter[1].innerHTML == ruter[2]
              .innerHTML &&
              ruter[1].innerHTML.trim() != ""
            ) {
              showWinner(0, 1, 2);
            } else if (
              ruter[3].innerHTML == ruter[4].innerHTML && ruter[4].innerHTML == ruter[5]
              .innerHTML &&
              ruter[3].innerHTML.trim() != ""
            ) {
              showWinner(3, 4, 5);
            } else if (
              ruter[6].innerHTML == ruter[7].innerHTML && ruter[6].innerHTML == ruter[7]
              .innerHTML &&
              ruter[6].innerHTML.trim() != ""
            ) {
              showWinner(6, 7, 8);
            } else if (
              ruter[0].innerHTML == ruter[3].innerHTML && ruter[0].innerHTML == ruter[3]
              .innerHTML &&
              ruter[0].innerHTML.trim() != ""
            ) {
              showWinner(0, 3, 6);
            } else if (
              ruter[1].innerHTML == ruter[4].innerHTML && ruter[1].innerHTML == ruter[4]
              .innerHTML &&
              ruter[1].innerHTML.trim() != ""
            ) {
              showWinner(1, 4, 7);
            } else if (
              ruter[2].innerHTML == ruter[5].innerHTML &&  ruter[2].innerHTML == ruter[5]
              .innerHTML &&
              ruter[2].innerHTML.trim() != ""
            ) {
              showWinner(2, 5, 8);
            } else if (
              ruter[0].innerHTML == ruter[4].innerHTML && ruter[0].innerHTML == ruter[4]
              .innerHTML &&
              ruter[0].innerHTML.trim() != ""
            ) {showWinner(0, 4, 8);
             } else if (
              ruter[2].innerHTML == ruter[4].innerHTML && ruter[2].innerHTML == ruter[4]
              .innerHTML &&
              ruter[2].innerHTML.trim() != ""
             ) {
              showWinner(2, 4, 6);
           }
          }
       });
      }
      document.getElementById("nullstill").addEventListener("click", 

      function() {
        for (let i = 0; i < ruter.length; i++) {
         ruter[i].innerHTML = "";
         ruter[i].style.backgroundColor = "#dee9ec";
         ruter[i].style.color = "black";
        }
        currentPlayer = "x";
        document.getElementById("melding").style.display = "none";
        document.getElementById("spiller").innerHTML = "X";
        gameStatus = "Start";
      });
       function showWinner(x, y, z) {
        ruter[x].style.background = "#317542"; ruter[x].style.color = "white";
        ruter[y].style.background = "#317542"; ruter[y].style.color = "white"; 
        ruter[z].style.background = "#317542"; ruter[z].style.color = "white"; 
      
        document.getElementById("vinner").innerHTML = currentPlayer == 'x' ? 'O' : 'X';
        document.getElementById("melding").style.display = "block";
        gameStatus = "prøv igjen";
      }