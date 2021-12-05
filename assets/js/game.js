/* Game functions */

//function to generate a random numeric value 
    // max is 60, and min is 40
    var randomNumber = function(min, max){

    
        //reset health by assigning random value between 40 (min) - 60 (max) before starting a new fight
        var value = Math.floor(Math.random() *(max - min + 1) + min);
        //returns value of randomNumber
        return value;
    };

window.alert("Welcome to Robot Gladiators!");
  // Tracks our player-robot's info

//this is a function expression
//Check notes: Arugments vs Parameters
//Has to be above for loop because it the function call executing this code will be placed in the for loop
var fight = function(enemy) {
    
   

    //repeat and execute as long as the enemy-robot is alive. Ends until all robots are killed, even if player health is exhausted before
    while( playerInfo.health > 0 && enemy.health > 0){
         //Ask the player if they'd like to fight or run
         var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    
    
    //if player chooses to skip, this condition will execute
    if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        //Condition will execute if player confirms resignation. 
        if (confirmSkip){
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
    
        //subtract money from playerInfo.money for skipping
        //will not display a negative money value using math.max object
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log( playerInfo.name + " has skipped this fight. You now have " + playerInfo.money + " credits left.");
        break;
        }
    }
    
    //if no (false), ask question again by running fight  () again
    /*        else{
    window.alert("You need to choose a valid option. Try again!");
    
            }*/
    
    
    //if player choses to fight, then fight. The || is an "or" operator. Check this condition
    if (promptFight === "FIGHT" || promptFight ==="fight" ){
    
        //generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        //remove enemy's health by subratricting the amount set in the playerInfo.attack
        //will not display a negative enemy health value using the math.max object
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has "  + enemy.health + " health remaining.");
    
        //Enemy's health will be checked if condition executes
    if (enemy.health <= 0){
        window.alert(enemy.name + " has died!");
                                                  
    
        //award player money for winning
        playerInfo.money = playerInfo.money + 20;
        //leave while() loop since enemy is dead
        //will move on and attack next enemy immediately after killing prior enemy robot
        break;
    }
    //Display's current enemy's health until 0 health is reached
    else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
    
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    //remove player's health by subtracting the amount set in the enemy.attack variable
    //will not display a negative player health value, from using the math.max object
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
    
    //player's health will be checked if condition executes
        if (playerInfo.health <=0){
        window.alert(playerInfo.name + " has died!");
            //Exit this loop if player health is at 0 or less
            break;
        }
        else{
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
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
    playerInfo.reset
    //local variables within local scope 


for (var i =0; i <enemyInfo.Length; i++){
    //Displays enemy elements in order, and the array index of each enemy robo fighter
    //array index starts at 0, so it needs to have 1 added to it to display proper round #
    if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
    //pick new enemy to fight based on index of enemys array
    //pickedEnemyName is a local variable
    var pickedEnemyObj = enemyInfo[i];
    
    //set enemy Health
    pickedEnemyObj.health = randomNumber(40,60);
    
    
    //pass the pickedEnemyName variable's value in to the fight function call where it will assume the value of the enemy name parameter
    fight(pickedEnemyObj);
    //if we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.Length - 1){
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
    if (playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            //Refill Health function call for player to refill health
         playerInfo.refillHealth();
            break;
        case "UPGRADE": //new case
        case "upgrade":
            //upgrade attack function call to upgrade player's attack
         playerInfo.upgradeAttack();
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


//Global object properties
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    //reset method belonging to playerInfo Object
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    //don't forget comma to seperate methods!
    },

refillHealth: function(){
    // add condition logic to methods with if statements and alert calls
    if  (this.money >= 7){
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health +=20;
        this.money -=7;
    }
    // when player doesn't have enough $, display this message
    else {
        window.alert("You don't have enough money!");
    }
},

upgradeAttack: function(){
    // add condition logic to methods with if statements and alert calls
    if(this.money >=7){
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
    }
    else{
        window.alert("You don't have enough money!");
    }
}
};



//enemy information 
//array with numerical indexes.
//array can be accessed as enemyInfo [0] and robot name's index: enemyInfo[0].name
var enemyInfo = [
    {
        name: 'Roborto',
        attack: randomNumber (10,14)
    },
{
    name:  'Android',
    attack: randomNumber (10, 14)
},
{
    name: 'Robo Trumble',
    attack: randomNumber (10, 14)
}
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

//start the game when the page loads
startGame();
