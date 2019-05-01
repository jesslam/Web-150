//create a template for hotel objects
function Hotel(name, rooms, booked){
    this.name = name; //property of object
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };

}

//create two hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

//update objects
quayHotel.rooms = 50;

//update html for the page
var details1 = quayHotel.name + (' rooms available: ');
details1 += quayHotel.checkAvailability();

var elhotel1 = document.getElementById('hotel1');
elhotel1.textContent = details1;

var details2 = parkHotel.name + (' rooms available: ');
details2 += parkHotel.checkAvailability();

var elhotel2 = document.getElementById('hotel2');
elhotel2.textContent = details2;
