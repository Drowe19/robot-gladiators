//After defeating enemy, ask the user if they would like to purchase an item from the store

//the user can either purchase health or attack pts, if they can afford it

//Display player's score using an alert
//THen ask player if they want to play again


//If player defeats OR skips enemy-robot, we'll ask if they want to vist the shop


//Wrap the game logic in startGame() function

//WHen the player is defeated, or there are no more enemies, call an endGame() function that: 
// *Alerts the player's total stats
// *Asks the player if they want to play again
// *If yes, call startGame() to restart the game

//After the player skips or defeats an enemy (And there are still more robots to fight):
// *Ask the player if they want to "shop"
// *If no, continue as normal
// *If yes, call the shop() function, ask player if they want to "refill" health, "upgrade" attack, or "leave" the shop
// *If refill, subtract money points form player and increase helath
// *If upgrade, subratract money pts from player and increase attack power
//* *If leave, alert goodbye, and exit the function
//* If any other invalid option, call shope() again





//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less
//If the enemy robot's health is zero or less, exit from the fight loop


//      ** TIPS TO REMEMBER
//Displays length of array elements. The array index is always -1 of the element array
//console.log(enemyNames.length);


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
//Has to be above for loop because it the function call executing this code will be placed in the for loop
var fight = function(enemyName) {
   

//repeat and execute as long as the enemy-robot is alive. Ends until all robots are killed, even if player health is exhausted before
while( playerHealth > 0 && enemyHealth > 0){
     //Ask the player if they'd like to fight or run
     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");



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
}

//if no (false), ask question again by running fight  () again
/*        else{
window.alert("You need to choose a valid option. Try again!");

        }*/


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
  }
};


//for loop initializing the counter, evaluating the counter will stop before the array elements of 3 is reached, and incrementing the iterator


//function expression to start a new game
//every actionable line of code is waiting to be called in the fight() function or the startgame() function
//because we nested this function in the foor loop, we can use the function call again to start the game, if needed
var startGame = function(){
    //reset player stats
    //local variables within local scope 
    playerHealth = 100; 
    playerAttack = 10;
    playerMoney = 10;


for (var i =0; i <enemyNames.length; i++){
    //Displays enemy elements in order, and the array index of each enemy robo fighter
    //array index starts at 0, so it needs to have 1 added to it to display proper round #
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
    //pick new enemy to fight based on index of enemyNames array
    //pickedEnemyName is a local variable
    var pickedEnemyName = enemyNames[i];
    //reset health before starting a new fight
    enemyHealth = 50;
    
    //pass the pickedEnemyName variable's value into the fight function call where it will assume the value of the enemy name parameter
    fight(pickedEnemyName);
    //if we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1){
            //ask if players wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

            //if yes,(true) take them to the store() function
            if (storeConfirm){
                shop();
            }
        }
    }
        else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
        }
    
}
//After the loop ends, the player is either out of health, or enemies to fight, so run the endgame function
endGame();
};

//function to end the entire game
var endGame = function(){
    window.alert("The game has now ended. Let's see how you did!");
    //if player is still alive, player wins!
    if (playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }
//Might want to add the end function brace after the else statement below

    //ask player if they'd like to play again might want to comment this all out if its not in the right place. Does this go after the startgame function expression? or nested within it
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        //restart the game
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function(){
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");


    //1)    use switch to carry out action. Whatever value user enters for shopOptionPrompt will execute said case scenario
    //2)    Nest if statements to stop player from upgrading robot if there is not enough money available
    //3)    Account for player entering captial or lowercase input. Enter second case scenario
    switch (shopOptionPrompt){
        case "REFILL":  //new case
        case "refill":
            if (playerMoney >= 7){
            window.alert("Refulling a player's health by 20 for 7 dollars.");

            //increase health and decrease money 
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE": //new case
        case "upgrade":
            
            if (playerMoney >=7){
            window.alert("Upgrade player's attack by 6 for 7 dollars.");
            //increase attack and decrease money 
            playerAttack = playerAttack + 6;
            playerAttack = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE":   //new case
        case "leave":
            window.alert("Leaving the store.");
            
            //do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
}; 
//start the game when the page loads
startGame();
