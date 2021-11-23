//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less
//If the enemy robot's health is zero or less, exit from the fight loop


//Alert playeres that they are starting the round
window.alert("Welcome to Robot Gladiators!");
  // Tracks our player-robot's info



//Global variables
var playerHealth =100;
var playerAttack =10;
var playerMoney = 10;

var enemyHealth = 50;
var enemyAttack = 12; 
var enemyNames = ["Roborto", " Amy Android", " Robo Trumble"];
var playerName = window.prompt("what is your robot's name?");


//this is a function expression
//Check notes: Arugments vs Parameters
//Has to be above for loop because it will be called within the for loop
var fight = function(enemyName) {
    //Ask the player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//repeat and execute as long as the enemy-robot is alive. Ends until all robots are killed, even if player health is exhausted before
while( playerHealth > 0 && enemyHealth > 0){
    //place fight function code block here


    //Declared Array containing elements with enemy Robot Names

//Displays length of array elements. The array index is always -1 of the element array
//console.log(enemyNames.length);

//repeat and execute as long as player robot 


//if player chooses to skip, this condition will execute
if (promptFight === "skip" || promptFight === "SKIP"){
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    //Condition will execute if player confirms resignation. 
    if (confirmSkip){
    
    window.alert(playerName + " has decided to skip this fight. Goodbye!");

    //subtract money from playerMoney for skipping
    playerMoney = playerMoney -10;
    console.log( playerName + " has skipped this fight. You now have " + playerMoney + " credits left.");
    break;
    }

//if no (false), ask question again by running fight  () again
        else{
window.alert("You need to choose a valid option. Try again!");

        }
}

//if player choses to fight, then fight. The || is an "or" operator. Check this condition
if (promptFight === "FIGHT" || promptFight ==="fight" ){
    //remove enemy's health by subratricting the amount set in the playerAttack
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has "  + enemyHealth + " health remaining.");

    //Enemy's health will be checked if condition executes
if (enemyHealth <= 0){
    window.alert(enemyName + " has died!");
                                              

    //award player money for winning
    playerMoney = playerMoney + 20;
    //leave while() loop since enemy is dead
    //will move on and attack next enemy immediately after killing prior enemy robot
    break;
}
//Display's current enemy's health until 0 health is reached
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

//remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

//player's health will be checked if condition executes
        if (playerHealth <=0){
    window.alert(playerName + " has died!");
    //Exit this loop if player health is at 0 or less
    break;
        }
        else{
    window.alert(playerName + " still has " + playerHealth + " health left.");
        }

}


//for loop initializing the counter, evaluating counter will stop before the array elements of 3 is reached, and incrementing the iterator
};





};
for (var i =0; i <enemyNames.length; i++){
    //Displays enemy elements in order, and the array index of each enemy robo fighter
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
