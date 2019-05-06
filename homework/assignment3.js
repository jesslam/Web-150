//create a template for shelter adoption objects
function Adoptions(animalType, totalNum, pendAdopt){
    this.animalType = animalType;
    this.totalNum = totalNum;
    this.pendAdopt = pendAdopt;

    this.unadoptedAnimals = function(){
        return this.totalNum - this.pendAdopt;
    };

}

//create animal types
var dogAdoptions = new Adoptions('Dogs', 30, 14);
var catAdoptions = new Adoptions('Cats', 45, 12);
var chinchillaAdoptions = new Adoptions('Chinchillas', 6, 3);
var birdAdoptions = new Adoptions('Birds', 8, 0);

//update html for the page
var details1 = dogAdoptions.animalType + (' Available: ');
details1 += dogAdoptions.unadoptedAnimals();

var elanimals1 = document.getElementById('animal1');
elanimals1.textContent = details1;

var details2 = catAdoptions.animalType + (' Available: ');
details2 += catAdoptions.unadoptedAnimals();

var elanimals2 = document.getElementById('animal2');
elanimals2.textContent = details2;

var details3 = chinchillaAdoptions.animalType + (' Available: ');
details3 += chinchillaAdoptions.unadoptedAnimals();

var elanimals3 = document.getElementById('animal3');
elanimals3.textContent = details3;

var details4 = birdAdoptions.animalType + (' Available: ');
details4 += birdAdoptions.unadoptedAnimals();

var elanimals4 = document.getElementById('animal4');
elanimals4.textContent = details4;
