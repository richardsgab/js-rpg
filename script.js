

//actions starting with submit button://
document.getElementById("botoncrearplayer1").addEventListener("click", () => {   
    race= document.getElementById("race").value;
    item= document.getElementById("item").value;
    nombre= document.getElementById("name").value;  //catchs the input values(name, race & item)

    var player = new Person(race, item);    //create a new player
    player.displayChar();

    document.getElementById("nombre1").innerHTML= nombre;   //change the player name in screen
    document.getElementById("barra1").value= player.currenthealth;  //shows the starting level of health
    document.getElementById("barra1").max= player.maxHealth;    //muestra nivel maximo de health

    document.getElementById("raza1").innerHTML= "Race: " + player.race;     //shows the chosen race & item
    document.getElementById("arma1").innerHTML= "Item: " + player.item;

    randomplayer(); //create ennemy
    player2 = new Person(player2race, player2item);
    document.getElementById("nombre2").innerHTML= player2name;
    document.getElementById("barra2").value= player2.currenthealth;  //shows the starting level of health
    document.getElementById("barra2").max= player2.maxHealth;    //muestra nivel maximo de health
    document.getElementById("raza2").innerHTML= "Race: " + player2.race;     //shows the chosen race & item
    document.getElementById("arma2").innerHTML= "Item: " + player2.item; 
});


// comes from character.js
function Person(race,item){
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){

    };

    this.damage = function(){};

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
} 


//Random Creation of Player2
var player2;
var randomNames = ["BadKarma","Casanova", "YellowSnowman", "PawneeGoddess", "Babushka", "SaintBroseph", "Avocadorable",
 "FatBatman", "MomsSpaghetti", "OmnipotentBeing", "AngelWonderland"];
var randomRace= ["Human", "Orc", "Elf", "Vampire"];
var randomItem= ["Boots", "Staff", "Sword", "Bow"];

function randomplayer(){
    player2name = randomNames[Math.floor(Math.random()* 10)];
    player2race = randomRace[Math.floor(Math.random() * 4)];
    player2item = randomItem[Math.floor(Math.random() * 4)];
}
      
//Inicialize damage reach & Amount of Healing power


