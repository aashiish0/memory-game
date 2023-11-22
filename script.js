const gameContainer = document.getElementById("game");
let card1 = null
let card2 = null
let cardsFlipped = 0
let locked = false

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  //console.log("you just clicked", event.target);

  //setting the background color of the card to a random color from the array COLORS
  if (locked){
    return
  }

  let clickedCard = event.target
  clickedCard.style.backgroundColor = clickedCard.classList[0]

  //checking if card1 or card2 are falsy values
  if (!card1 || !card2){
    //adding flipped class to clickedCard
    clickedCard.classList.add('flipped')
    //if card1 is falsy it is assigned the value of clickedCard
    card1 = card1 || clickedCard

    if (clickedCard === card1){
      card2 = null
    }
    else {
      card2 = clickedCard
    }
    //card2 = clickedCard === card1 ? null : clickedCard;

    //checking if card1 and card2 are truthy values
    if (card1 && card2){
      locked = true

      let cardColor1 = card1.className
      let cardColor2 = card2.className

      if (cardColor1 === cardColor2){
        cardsFlipped += 2
        card1 = null
        card2 = null
        locked = false
      }
      else{
        setTimeout(function(){
          card1.style.backgroundColor = ""
          card2.style.backgroundColor = ""
          card1.classList.remove("flipped")
          card2.classList.remove("flipped")
          card1 = null
          card2 = null
          locked = false
          console.log(cardsFlipped)
        }, 1000)
      }

      if (cardsFlipped === 10){
        alert("GAME OVER")
      }
      // console.log(cardColor1)
      // console.log(cardColor2)
    }

  }

  // console.log('First Card', cardColor1)
  // console.log('Second Card', cardColor2)















//   let clickedCard1 = event.target;
//   let clickedCard2 = event.target;

//   if (card1 === null && card2 === null){
//     clickedCard1.classList.add('flipped')
//     if (clickedCard1.classList.contains('flipped')){
//       clickedCard1.style.backgroundColor = clickedCard1.classList[0]
//       //clickedCard1.classList.add('flipped')
//       card1 = 'flipped'
//       console.log('First Card', clickedCard1.classList[0])
//       // let cardColor1 = clickedCard1.classList[0]
//   }
// }
//   else if (card2 === null){
//     clickedCard2.classList.add('flipped')
//     if (clickedCard2.classList.contains('flipped')){
//       clickedCard2.style.backgroundColor = clickedCard2.classList[0]
//       card2 = 'flipped'
//       console.log('Second Card', clickedCard2.classList[0])
//       // let cardColor2 = clickedCard2.classList[0]
//   }

//   console.log(clickedCard1.classList[0])
//   console.log(clickedCard2.classList[0])

//   // if (cardColor1 === cardColor2){
//   //   console.log(cardColor1)
//   //   console.log(cardColor2)
//   // }
//   // else{
//   //   setTimeout(function(){
//   //     clickedCard1.style.backgroundColor = ""
//   //     clickedCard2.style.backgroundColor = ""
//   //     card1 = null
//   //     card2 = null
//   //     clickedCard1.classList.remove('flipped')
//   //     clickedCard2.classList.remove('flipped')

//   //   })
//   // }


}


// when the DOM loads
createDivsForColors(shuffledColors);
