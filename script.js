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
document.getElementById("test").addEventListener("click", function()
{
    enemyHP = incrementHP( enemyDmg, enemyHP);
    console.log(enemyHP);
});

document.getElementById("test2").addEventListener("click", function()
{
    enemyHP = decrementHP( enemyDmg, enemyHP);
    console.log(enemyHP);
});
function increaseMagic()
{

    magic++;

}
document.getElementById("progress").value = 100;
//document.getElementById("progress").max = 200;
