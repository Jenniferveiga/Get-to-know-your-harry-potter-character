var playerHP = 100;
var playerDmg = 10;
var enemyHP = 100;
var enemyDmg = 10;
var magic = 0;
console.log(enemyHP);
enemyHP = incrementHP( enemyDmg, enemyHP);
console.log(enemyHP);
enemyHP = decrementHP(enemyDmg, enemyHP);
console.log(enemyHP);
function incrementHP(hpToCharacter, character)

{
return character += hpToCharacter;
}
function decrementHP(dmgToCharacter, character)

{
return character -= dmgToCharacter;
}
 document.getElementById("attackPlayer").addEventListener("click", function()
{
    enemyHP = incrementHP( enemyDmg, enemyHP);
    console.log(enemyHP);
});

document.getElementById("healPlayer").addEventListener("click", function()
{
    enemyHP = decrementHP( enemyDmg, enemyHP);
    console.log(enemyHP);
});
document.getElementById("shieldPlayer").addEventListener("click", function()
{
    enemyHP = incrementHP( enemyDmg, enemyHP);
    console.log(enemyHP);
});

document.getElementById("randomSpellPlayer").addEventListener("click", function()
{
    enemyHP = decrementHP( enemyDmg, enemyHP);
    console.log(enemyHP);
});

function damageBoss(){}
function healBoss(){}
function shieldBoss(){}
function randomSpellBoss(){}

function increaseMagic()
{
    magic++;
}
//document.getElementById("progress").value = 100;
//document.getElementById("progress").max = 200;
//https://www.potterapi.com/v1/characters/?key=$2a$10$H1pmgojMlcHoQBh9QhzYYeYnIfKZtYOxZR2FQ6SH0lNbYzgMEQVme
//&house=Slytherin
