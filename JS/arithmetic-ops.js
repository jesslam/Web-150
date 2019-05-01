//create a var for subtotal
var subtotal = (13 + 1) * 5; //70

//create a var for shipping
var shipping = 0.5 * (13 + 1); //7

//creata a var for total
var total = subtotal + shipping; //77

//write results to the screen
var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;
