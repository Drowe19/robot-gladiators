
var playerHealth =100;
var playerAttack =10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12; 
var playerMoney = 10;


//Alert playeres that they are starting the round
window.alert("Welcome to Robot Gladiators!");
  // Tracks our player-robot's info
var playerName = window.prompt("what is your robot's name?");
console.log(playerName, playerHealth, playerAttack);


//this is a function expression
var fight = function(){
   
}

 
//Prompts user to fight on or skip. Declared variable 'promptFight'
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or SKIP' to choose");
//if player choses to fight, then fight. The || is an "or" operator. Check this condition
if (promptFight === "FIGHT" || promptFight ==="fight" ){
    //remove enemy's health by subratricting the amount set in the playerAttack
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has "  + enemyHealth + " health remaining.");

    //Enemy's health will be checked if condition executes
if (enemyHealth <= 0){
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

//remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

//player's health will be checked if condition executes
if (playerHealth <=0){
    window.alert(playerName + " has died!");
}
else{
    window.alert(playerName + " still has " + playerHealth + " health left.");
}

}
//if player chooses to skip, this condition will execute
else if (promptFight === "skip" || promptFight === "SKIP"){
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
//Condition will execute if player confirms resignation. 
if (confirmSkip){
    window.alert(playerName + " has decided to skip this fight. Goodbye!");

    //subtract money from playerMoney for skipping
    playerMoney = playerMoney -2;
}

//if no (false), ask question again by running fight  () again
else{
window.alert("You need to choose a valid option. Try again!");
fight();
    }
}
