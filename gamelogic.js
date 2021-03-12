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


//Ends game when currentHealth = 0
gameOver= () => {
    if(player.currenthealth === 0) {
        alert("You Lose!");
        hideactionbtn();
        showPanelCreate();
        startGame();
    } 
    else if(player2.currenthealth === 0) {
        alert("You WIN!");
        hideactionbtn();
        showPanelCreate();
        startGame();
    } 
    
}
    
    


//Start game when Panels are Hidden
function startGame() {
    hideactionbtn();
    hidelogpanel();
    showPanelCreate();
    turno= false;
    toggleTurn();
    name1.value= "";
    nombre1.innerHTML= "";
    nombre2.innerHTML= "";
}
startGame();


function toggleTurn(){
    turno = !turno;
    if (turno){
        btnpanel1.style.visibility= "visible";
        btnpanel2.style.visibility= "hidden";
    }
    else {
        btnpanel1.style.visibility= "hidden";
        btnpanel2.style.visibility= "visible";
    }
}





//Actions starting with submit buttons
botoncrearplayer1.addEventListener("click", () => { 
   
    player = new Person(race1.value, item1.value);    //create a new player
    player.displayChar();

    nombre1.innerHTML= name1.value;   //change the player name in screen
    barra1.value= player.currenthealth;  //shows the starting level of health
    barra1.max= player.maxHealth;    //muestra nivel maximo de health
    
    raza1.innerHTML= "Race: " + player.race;     //shows the chosen race & item
    arma1.innerHTML= "Item: " + player.item;
    randomAvatar1(player);

    randomPlayer2(); //create ennemy
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
    if(player2.currenthealth < 0){  //To currenthealth could go under 0 & then player lose.
        player2.currenthealth = 0;  //
    }
    barra2.value = player2.currenthealth;
    logtext.innerHTML = logtext.innerHTML + ( " " + nombre1.innerHTML + " Attacks " + nombre2.innerHTML);
    setTimeout(function(){logtext.innerHTML= "Log: "}, 1000);
    gameOver();
    toggleTurn();
    
    
});
hitbtn2.addEventListener('click', () => {
    player.currenthealth = player.currenthealth - player2.damage();
    if(player.currenthealth < 0){
        player.currenthealth = 0;
    }
    barra1.value = player.currenthealth;
    logtext.innerHTML = logtext.innerHTML + ( " " + nombre2.innerHTML + " Attacks " + nombre1.innerHTML);
    setTimeout(function(){logtext.innerHTML= "Log: "}, 1000);
    gameOver();
    toggleTurn();
    
});

healbtn1.addEventListener('click', () => {
    player.currenthealth = player.currenthealth + player.heal();
    barra1.value = player.currenthealth;
    logtext.innerHTML = logtext.innerHTML + ( " " + nombre1.innerHTML + " Heals " + player.currenthealth);
    setTimeout(function(){logtext.innerHTML= "Log"}, 1000);
    gameOver();
    toggleTurn();
    
});

healbtn2.addEventListener('click', () => {
    player2.currenthealth = player2.currenthealth + player2.heal();
    barra2.value = player2.currenthealth;
    logtext.innerHTML = logtext.innerHTML + ( " " + nombre2.innerHTML + " Heals " + player2.currenthealth);
    setTimeout(function(){logtext.innerHTML= "Log"}, 1000);
    gameOver();
    toggleTurn()
   
});


//Avatars matching Race
var avHuman= ["assets/humanos11.png", "assets/humanos12.png", "assets/humanos13.png", 
"assets/humanos14.png", "assets/humanos15.png", "assets/humans16.png", "assets/humans17.png",
"assets/humans18.png", "assets/humains19.png", "assets/human20.png"];
var avOrc= ["assets/orc11.png", "assets/orc12.png", "assets/orc13.png", "assets/orc14.png",
"assets/orc14.png", "assets/orc15.png", "assets/orc16.png", "assets/orc17.png", "assets/orc18.png",
"assets/orc19.png", "assets/orc20.png"];
var avElf= ["assets/elfhorse11.png", "assets/elfhorse12.png", "assets/elfhorse13.png", "assets/elfhorse14.png",
"assets/elfhorse15.png", "assets/elfhorse16.png", "assets/elfhorse17.png", "assets/elfhorse18.png",
"assets/elfhorse19.png", "assets/elfhorse20.png"];
var avVamp= ["assets/vamp11.png", "assets/vamp12.png", "assets/vamp13.png", "assets/vamp14.png", "assets/vamp15.png",
"assets/vamp16.png", "assets/vamp17.png", "assets/vamp18.png", "assets/vamp19.png", "assets/vamp20"];

//Random Creation of Player2
var player2;
var randomNames = ["BadKarma","Casanova", "YellowSnowman", "PawneeGoddess", "Babushka", "SaintBroseph", "Avocadorable",
 "FatBatman", "MomsSpaghetti", "OmnipotentBeing", "AngelWonderland", "GrangerDanger", "MelonSmasher",
  "HeyYouNotYouYou", "MakunaHatata", "TootinPutin", "MangoGoGo", "Toiletpaperman",
   "Suffragette", "Urkel", "Marshmallow"];
var randomRace= ["Human", "Orc", "Elf", "Vampire"];
var randomItem= ["Boots", "Staff", "Sword", "Bow"];




//Choose a random Avatar matching Race for Player 1
function randomAvatar1(player){
    switch (player.race) {
        case "Human":
            avatar1.src= avHuman[Math.floor(Math.random()*10)];
            break;
        case "Orc":
            avatar1.src= avOrc[Math.floor(Math.random()*10)];
            break;
        case "Elf":
            avatar1.src= avElf[Math.floor(Math.random()*10)];
            break;
        case "Vampire":
            avatar1.src= avVamp[Math.floor(Math.random()*10)];
            break;
    
        default:
            break;
    }
}


//Create a random Player2
function randomPlayer2(){
    player2name = randomNames[Math.floor(Math.random()* 20)];
    player2race = randomRace[Math.floor(Math.random() * 4)];
    player2item = randomItem[Math.floor(Math.random() * 4)];
    player2avatar = randomAvatar2();
}
      
//Avatar For Player2
function randomAvatar2(player2){
    player2avatar= avatar2.src;
    switch (player2race) {
        case "Human":
            avatar2.src= avHuman[Math.floor(Math.random()*10)];
            break;
        case "Orc":
            avatar2.src= avOrc[Math.floor(Math.random()*10)];
            break;
        case "Elf":
            avatar2.src= avElf[Math.floor(Math.random()*10)];
            break;
        case "Vampire":
            avatar2.src= avVamp[Math.floor(Math.random()*10)];
            break;
    
        default:
            break;
    }
    
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






