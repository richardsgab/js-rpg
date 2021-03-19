// //Use this script to generate your character
// function Person(race,item){
//     this.race = race;
//     this.item = item;
//     this.currenthealth = 100;
//     this.maxHealth = 100;
    
//     this.min = 3;
//     this.maxDamage = 20;
//     this.maxHealing = 30;

//     this.heal = function(){
//         var getHeal = Math.floor(Math.random() * (30 - 3) + 3);
//         if(this.item == "Staff"){
//             getHeal = getHeal * 1.20;
//         }
//         return getHeal;      
//     };

//     this.damage = function(){
//         var damage = (Math.floor(Math.random() * (20 - 3) + 3));
//         if(this.item == "Sword"){
//             damage = damage * 1.30;
//         }
//         return damage;
//     };   
  
//     this.totalDamage = this.damage();

//     this.displayChar = function(){
//         return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
//     };
// } 


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
        else if(this.item == "Bow"){
            damage = [(Math.floor(Math.random()*0.3 *(damage * 1.50)))];
            console.log("bow sponge");
        return damage;
    };   
  
    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
} 

healHuman = ()=> {
    var humanprotec= this.damage;
    if(this.race == "Human"){
        humanprotec = humanprotec * 0.2;
    }
    return humanprotec;
}

    
vampPower = () =>{
    if(player.race == "Vampire"){
        player2.currenthealth = player2.currenthealth - (player2.currenthealth * 0.10);
        player.currenthealth = player.currenthealth + (player.currenthealth * 1.10);
        console.log("Vampiro wins 10% from your blood");
    }
    else if(player2.race == "Vampire"){
        player.currenthealth = player.currenthealth - (player.currenthealth * 0.10);
        player2.currenthealth = player2.currenthealth + (player2.currenthealth * 1.10);
        console.log("Vampiro chups 10% from your blood");
    }
} 

elfPower = () =>{
    if(player.race == "Elf"){
        player2.damage= (Math.floor(Math.random()* (player2.damage * 1.5) * 0.3));
        console.log("Elf is magic");
    }
    else if(player2.race == "Elf"){
        player.damage= (Math.floor(Math.random() *  (player.damage * 1.5)* 0.3));
        console.log("I'm an Elf and I know it");
    }
    return this.damage;
}