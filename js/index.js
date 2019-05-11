var cards = [
  {
    type: "1",
    color: "blue",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/mileto.png?raw=true",
    name: "tales de mileto"
  },
  {
    type: "1",
    color: "blue",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/agua.png?raw=true",
    name: "Agua"
  },
  {
    type: "2",
    color: "silver",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/anaximenes.jpg?raw=true",
    name: "Anaxímenes"
  },
  {
    type: "2",
    color: "silver",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/aire.png?raw=true",
    name: "Aire"
  },
  {
    type: "3",
    color: "red",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/heraclito.jpg?raw=true",
    name: "Heráclito de Éfeso"
  },
  {
    type: "3",
    color: "red",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/fuego.png?raw=true",
    name: "Fuego"
  },
  {
    type: "4",
    color: "gold",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/empedocles.jpg?raw=true",
    name: "Empédocles"
  },
  {
    type: "4",
    color: "gold",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/tierra.jpg?raw=true",
    name: "Tierra"
  },
  {
    type: "5",
    color: "gold",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/lavoisier.jpg?raw=true",
    name: "Lavoisier"
  },
  {
    type: "5",
    color: "gold",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/balanza.jpg?raw=true",
    name: "Ley de la Conservación de la Masa"
  },
  {
    type: "6",
    color: "lightgreen",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/cavendish.jpg?raw=true",
    name: "Henry Cavendish"
  },
  {
    type: "6",
    color: "lightgreen",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/hidrogeno.PNG?raw=true",
    name: "Hidrogeno"
  },
  {
    type: "7",
    color: "silver",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/black.jpg?raw=true",
    name: "Joseph Black"
  },
  {
    type: "7",
    color: "silver",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/co2.png?raw=true",
    name: "Dioxido de Carbono"
  },
  {
    type: "8",
    color: "teal",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/priestley.jpg?raw=true",
    name: "Joseph Priestley"
  },
  {
    type: "8",
    color: "teal",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/oxigeno.jpg?raw=true",
    name: "Oxigeno"
  },
  {
    type: "9",
    color: "lightgreen",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/paracelso.jpg?raw=true",
    name: "Paracelso"
  },
  {
    type: "9",
    color: "lightgreen",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/iatroquimica.jpg?raw=true",
    name: "Iatroquímica"
  },
  {
    type: "10",
    color: "yellow",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/sthal.jpg?raw=true",
    name: "George Sthal"
  },
  {
    type: "10",
    color: "yellow",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/flogisto.png?raw=true",
    name: "Teoria del Flogisto"
  },
  {
    type: "11",
    color: "orange",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/thomson.jpg?raw=true",
    name: "Thompson"
  },
  {
    type: "11",
    color: "orange",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/electron.jpg?raw=true",
    name: "Electron"
  },
  {
    type: "12",
    color: "lightblue",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/dalton.jpg?raw=true",
    name: "Jhon Dalton"
  },
  {
    type: "12",
    color: "lightblue",
    image: "https://github.com/LuisAlejandroSalcedo/memoria-quimica/blob/master/atomica.png?raw=true",
    name: "Teoria Atomica"
  }
];

//append according to number of things in array
for (var i = 0; i < cards.length; i++) {
  var $appendedItems = $(
    '<div class="card-wrapper"><div class="card ' +
    cards[i].color +
    '"><div class="front face"></div><div class="back face center"><div class="image" data-type="' +
    cards[i].type +
    '" style="background-image: url(' +
    cards[i].image +
    ');"/></div><div class="text">' +
    cards[i].name +
    "</div></div></div>"
  );
  $appendedItems.appendTo(".that-memory-game");
}

//randomize all the children
var parent = $(".that-memory-game");
var divs = parent.children();
while (divs.length) {
  parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
}

var $numberCardsOpened = 0;
var $firstCard, $secondCard;

function reset() {
  $numberCardsOpened = 0;
  $firstCard = "";
  $secondCard = "";
}

function resultNotification(type) {
  if (type === "fail") {
    $(".result-message .fail").css("opacity", "1");
  } else if (type === "success") {
    $(".result-message .success").css("opacity", "1");
  }
  setTimeout(function() {
    $(".result-message span").css("opacity", "0");
  }, 1500);
}

$(".card").on("click", function() {
  $(this).toggleClass("flipped");

  if ($numberCardsOpened == 0) {
    $firstCard = $(this)
      .find(".image")
      .data("type");
    $numberCardsOpened++;
  } else if ($numberCardsOpened == 1) {
    $secondCard = $(this)
      .find(".image")
      .data("type");

    if ($secondCard === $firstCard) {
      $(".flipped").addClass("done");
      reset();

      if ($(".done").length == cards.length) {
        $(".game-end").css("opacity","1");
      } else {
        resultNotification("success");
      }
    } else {
      reset();
      resultNotification("fail");
      setTimeout(function() {
        $(".card").removeClass("flipped");
      }, 600);
    }
  }
});

