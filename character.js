//Functions Show/Hide Panels//
hidePanelCreate = () => {
    document.getElementById("creationpanel").style.display = "none";
}
showPanelCreate = () => {
    document.getElementById("creationpanel").style.display = "block";
}

hideactionbtn = () => {
    document.getElementById("actionbtn").style.display = "none";
}
showactionbtn = () => {
    document.getElementById("actionbtn").style.display = "flex";
}

hidelogpanel = () => {
    document.getElementById("logpanel").style.display = "none";
}
showlogpanel = () => {
    document.getElementById("logpanel").style.display = "flex";
}


//Ends game when currentHeakth = 0
gameOver= () =>{
    if(player.currenthealth === 0 || player2.currenthealth === 0){
        hideactionbtn();
        showPanelCreate();
        startGame();
    }
    //alert("Game Over");
}

//Start game when Panels are Hidden
function startGame() {
    hideactionbtn();
    hidelogpanel();
    showPanelCreate();
}
startGame();

//Actions starting with submit buttons
botoncrearplayer1.addEventListener("click", () => { 
   
    player = new Person(race1.value, item1.value);    //create a new player
    player.displayChar();

    nombre1.innerHTML= name1.value;   //change the player name in screen
    barra1.value= player.currenthealth;  //shows the starting level of health
    barra1.max= player.maxHealth;    //muestra nivel maximo de health

    raza1.innerHTML= "Race: " + player.race;     //shows the chosen race & item
    arma1.innerHTML= "Item: " + player.item;

    randomplayer(); //create ennemy
    player2 = new Person(player2race, player2item);
    nombre2.innerHTML= player2name;
    barra2.value= player2.currenthealth;  //shows the starting level of health
    barra2.max= player2.maxHealth;    //muestra nivel maximo de health
    raza2.innerHTML= "Race: " + player2.race;     //shows the chosen race & item
    arma2.innerHTML= "Item: " + player2.item; 

    hidePanelCreate();
    showactionbtn();
    showlogpanel();
});


//Buttons Actions & Behaviors
hitbtn1.addEventListener('click', () => {
    player2.currenthealth = player2.currenthealth - player.damage();
    barra2.value = player2.currenthealth;
    gameOver();
    logtext.innerHTML = logtext.innerHTML + ( " " + nombre1.innerHTML + " Attacks " + nombre2.innerHTML);
    setTimeout(function(){logtext.innerHTML= "Log: "}, 1000);
    
});
hitbtn2.addEventListener('click', () => {
    player.currenthealth = player.currenthealth - player2.damage();
    barra1.value = player.currenthealth;
    logtext.innerHTML = logtext.innerHTML + ( " " + nombre2.innerHTML + " Attacks " + nombre1.innerHTML);
    setTimeout(function(){logtext.innerHTML= "Log: "}, 1000);
    gameOver();
});

healbtn1.addEventListener('click', () => {
    player.currenthealth = player.currenthealth + player.heal();
    barra1.value = player.currenthealth;
    logtext.innerHTML = logtext.innerHTML + ( " " + nombre1.innerHTML + " Heals " + player.currenthealth);
    setTimeout(function(){logtext.innerHTML= "Log"}, 1000);
    gameOver();
});
healbtn2.addEventListener('click', () => {
    player2.currenthealth = player2.currenthealth + player2.heal();
    barra2.value = player2.currenthealth;
    logtext.innerHTML = logtext.innerHTML + ( " " + nombre2.innerHTML + " Heals " + player2.currenthealth);
    setTimeout(function(){logtext.innerHTML= "Log"}, 1000);
    gameOver();
});



//Random Creation of Player2
var player2;
var randomNames = ["BadKarma","Casanova", "YellowSnowman", "PawneeGoddess", "Babushka", "SaintBroseph", "Avocadorable",
 "FatBatman", "MomsSpaghetti", "OmnipotentBeing", "AngelWonderland", "GrangerDanger", "MelonSmasher",
  "HeyYouNotYouYou", "MakunaHatata", "TootinPutin", "MangoGoGo", "Toiletpaperman",
   "Suffragette", "Urkel", "Marshmallow"];
var randomRace= ["Human", "Orc", "Elf", "Vampire"];
var randomItem= ["Boots", "Staff", "Sword", "Bow"];

function randomplayer(){
    player2name = randomNames[Math.floor(Math.random()* 20)];
    player2race = randomRace[Math.floor(Math.random() * 4)];
    player2item = randomItem[Math.floor(Math.random() * 4)];
}
      

//Use this script to generate your character
function Person(race,item){
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){
        var getHeal = Math.floor(Math.random() * (30 - 3) + 3);
        if(this.item == "Staff"){
            getHeal = getHeal * 1.20;
        }
        return getHeal;      
    };

    this.damage = function(){
        var damage = (Math.floor(Math.random() * (20 - 3) + 3));
        if(this.item == "Sword"){
            damage = damage * 1.30;
        }
        return damage;
    };   
  
    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
} 





