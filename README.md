Practice of testing app with JEST

War Simulation Game with Detailed Battle Mechanics using React

Description:
Create a war simulation game using React, featuring detailed battle mechanics such as individual soldier stats, weapon stats, and various victory conditions. Implement the following features using Test-Driven Development (TDD):

Display initial army stats
Recruit soldiers with different stats for each army
Upgrade and equip weapons for each army
Initiate a battle with a turn-based combat system
Display the winner and statistics of the battle
Reset the game
Battle Mechanics:
Each soldier in the game will have the following stats:

Health (HP)
Attack (ATK)
Defense (DEF)
Speed (SPD)
Weapons will have the following stats:

Attack Bonus (ATK_BONUS)
Speed Bonus (SPD_BONUS)
The battle will be conducted in a turn-based fashion. The turn order is determined by the soldiers' speed (higher speed goes first). In each turn, a soldier will attack an enemy soldier, and damage will be calculated using the formula:

Damage = (Attacker's ATK + Attacker's Weapon ATK_BONUS) - (Defender's DEF)

If a soldier's health drops to zero, they are considered defeated. The battle continues until one of the armies has no soldiers remaining. The army with remaining soldiers is declared the winner.

Instructions:

Set up a new React project using Create React App.
Install the necessary testing libraries, such as Jest and React Testing Library.
Write tests for the following features before implementing them in the application:
a. Displaying initial army stats
b. Recruiting soldiers with different stats for each army
c. Upgrading and equipping weapons for each army
d. Initiating a battle with a turn-based combat system
e. Displaying the winner and statistics of the battle
f. Resetting the game
Implement the features in the application, making sure your tests pass after each implementation.
Here's an outline of the components you'll need for the War Simulation Game:

ArmyStats: This component will display the stats for each army, including the number of soldiers and their individual stats.
RecruitButton: This component will allow the user to recruit soldiers for each army, randomly generating their stats within a specified range.
UpgradeButton: This component will allow the user to upgrade and equip weapons for each army, increasing the weapon stats by a specified amount.
BattleButton: This component will initiate a battle between the two armies, using a turn-based combat system and calculating damage based on soldier and weapon stats.
BattleReport: This component will display the winner and statistics of the battle, including the number of soldiers defeated in each army.
ResetButton: This component will reset the game, setting both armies back to their initial stats.
Game: This component will manage the overall game state and handle actions such as recruiting soldiers, upgrading weapons, initiating battles, and resetting the game.
As you create the game, focus on using TDD to ensure that each feature is tested before it is implemented. This will help you create a more robust and maintainable application
