function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

function showDetails(game) {
  var gametype = game.getAttribute("data-product-type");
  alert( game.innerHTML + gametype + ": DEMON SLAYER (Nintendo switch) ");
}

function showDetails2(katana) {
  var katanatype = katana.getAttribute("data-product-type");
  alert( katana.innerHTML + katanatype + ": Zenitsu Agatsuma ");
}

function showDetails3(figure) {
  var figuretype = figure.getAttribute("data-product-type");
  alert( figure.innerHTML + figuretype + ": Tanjiro mini ");
}

function showDetails4(oorbellen) {
  var oorbellentype = oorbellen.getAttribute("data-product-type");
  alert( oorbellen.innerHTML + oorbellentype + ": Tanjiro-The Rising Sun");
}

function showDetails5(hoodie) {
  var hoodietype = hoodie.getAttribute("data-product-type");
  alert( hoodie.innerHTML + hoodietype + ": Nezuko variant ");
}
