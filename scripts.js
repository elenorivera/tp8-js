/* JavaScript code for memory card game */

// card tracker
cardsClicked = 0;

function cardClicked(what) {

  //make sure the card hasn't been removed
  if (!what.classList.contains("removed")) {

    if (what.classList.contains("clicked")) {
      //it's already clicked, act appropriately
      what.classList.remove("clicked");
      cardsClicked--;

    } else {
      //it's not already clicked
      what.classList.add("clicked");
      cardsClicked++;

      if (cardsClicked == 2) {
        //compare card values
        cardCompare();
      }
    }
  }
}

function cardCompare() {

  clickedCards = document.querySelectorAll(".clicked"); //collection of clicked cards

  //first clicked element will be clickedCards[0]
  //second clicked element will be clickedCards[1]

  matched = false; //track if the cards matched

  if (clickedCards[0].classList.contains("pic1") && clickedCards[1].classList.contains("pic1")) {
    matched = true; //they matched pic 1

  } else if (clickedCards[0].classList.contains("pic2") && clickedCards[1].classList.contains("pic2")) {
    matched = true; //they matched pic 2
    
  } else if (clickedCards[0].classList.contains("pic3") && clickedCards[1].classList.contains("pic3")) {
    matched = true; //they matched pic 3
    
  } else if (clickedCards[0].classList.contains("pic4") && clickedCards[1].classList.contains("pic4")) {
    matched = true; //they matched pic 4
  }
  
  else if (clickedCards[0].classList.contains("pic5") && clickedCards[1].classList.contains("pic5")) {
    matched = true; //they matched pic 5
  }

  else if (clickedCards[0].classList.contains("pic6") && clickedCards[1].classList.contains("pic6")) {
    matched = true; //they matched pic 6
  }

  else if (clickedCards[0].classList.contains("pic7") && clickedCards[1].classList.contains("pic7")) {
    matched = true; //they matched pic 7
  }

  else if (clickedCards[0].classList.contains("pic8") && clickedCards[1].classList.contains("pic8")) {
    matched = true; //they matched pic 8
  }

  else if (clickedCards[0].classList.contains("pic9") && clickedCards[1].classList.contains("pic9")) {
    matched = true; //they matched pic 9
  }

  else if (clickedCards[0].classList.contains("pic10") && clickedCards[1].classList.contains("pic10")) {
    matched = true; //they matched pic 10
  }

  if (matched) {
    //hide cards 
    removeCards(clickedCards[0], clickedCards[1]);

  } else {
    //unflip cards
    unflipCards(clickedCards[0], clickedCards[1]);

  }

}

function removeCards(cardA, cardB) {
  
  pause = setTimeout(function() {
    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");

    cardA.classList.add("removed");
    cardB.classList.add("removed");
    
    cardsClicked = 0;
    
    checkWinning();
  }, 500);  
}

function unflipCards(cardA, cardB) {
  
  pause = setTimeout(function() {
    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");
    
    cardsClicked = 0;
  }, 500);  
}

function checkWinning() {
  remainingCards = document.querySelectorAll(".card"); //get all cards 
  
  //cycle through all cards and check for matched class
  for (c = 0; c < remainingCards.length; c++) {
     if ( !remainingCards[c].classList.contains("removed") ) {
       return;
     }
  }
  
  document.getElementById("MainTable").innerHTML = "You Won!";
}

function shuffleCards() {
  table = document.querySelector("#MainTable");
  cardCount = table.children.length;
  
  cardToMove = table.children[0];
  table.appendChild( cardToMove);
  
  for (c = 0; c < cardCount; c++) {
    randomCard = Math.floor( Math.random() * cardCount );
    cardToMove = table.children[randomCard];
    table.appendChild( cardToMove );
  }
}
// stuff to do when page loads

window.onload = function() {
  shuffleCards();
  
  cardList = document.querySelectorAll(".card"); // collection of cards

  cardCount = cardList.length; // how many cards are on the table

  for (c = 0; c < cardCount; c++) {
    cardList[c].onclick = function() {
      cardClicked(this);
    }
  }
}