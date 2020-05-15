var playerHP = 100;
var playerDmg = 10;
var bossHP = 100;
var bossDmg = 10;
var playerShield = 0;
var bossShield = 0;
var plSH = false;
var bossSh = false;
var minValue = 0;
var maxValue = 100;
console.log(bossHP + " boss hp");
console.log(bossShield + " boss sheild");
console.log(playerHP + " player hp");
console.log(playerShield + " player sheild");

var bossHealthBar = document.getElementById("bossHP").value;
var bossShieldBar = document.getElementById("bossShield").value;
var playerHealthBar = document.getElementById("playerHP").value;
var playerShieldBar = document.getElementById("playerShield").value;


// heal player or boss
function incrementHP(hpToCharacter, character)
{
return character += hpToCharacter;
}

// deal damage to player or boss
function decrementHP(dmgToCharacter, character)
{
return character -= dmgToCharacter;
}

// linked to player attack button.
 document.getElementById("attackPlayer").addEventListener("click", function()
{
    if(bossSh)
    {
        bossShield -= playerDmg;
        setTimeout(function(){ bossChoice(); }, 5000);
        if (bossShield === 0)
        {
            bossSh = false;
        }
    }
    if (bossHP === 10)
    {
        bossHealthBar -= playerDmg;
        bossHP = decrementHP( playerDmg, bossHP);
        console.log(bossHP + " dmg boss");
        window.location.href = "Winner.html";
    }
    else
    {
        bossHealthBar -= playerDmg;
        bossHP = decrementHP( playerDmg, bossHP);
        console.log(bossHP + " dmg boss");
        setTimeout(function(){ bossChoice(); }, 5000);
    }
  
});

// linked to heal button
document.getElementById("healPlayer").addEventListener("click", function()
{
    if(playerHP === maxValue)
    {
        setTimeout(function(){ bossChoice(); }, 5000);
        console.log(playerHP + " player hp is full");
    }
    else if (playerHP < maxValue)
    {
        playerHP = incrementHP( playerDmg, playerHP);
        console.log(playerHP + " increase player hp");
        setTimeout(function(){ bossChoice(); }, 5000);
    }
});

// linked to the shield button
document.getElementById("shieldPlayer").addEventListener("click", function()
{
    plSH = true;
    if(playerShield === maxValue)
    {
        setTimeout(function(){ bossChoice(); }, 5000);
        console.log(playerShield + " player shield is full");
    }
    else if (playerShield < maxValue)
    {
        playerShield += 10;
        console.log(playerShield + " increase player shield by 10");
        setTimeout(function(){ bossChoice(); }, 5000);
    }
});
// linked to random button.
document.getElementById("randomSpellPlayer").addEventListener("click", function()
{
    tempNum = Math.floor(Math.random() * 3);
    console.log(tempNum + " tempNum")
    if (tempNum === 0)
    {
        if(bossSh)
        {
            if (bossShield < 30) 
            {
                if (bossShield === 20 && bossHP === 10)
                {
                    bossShield = minValue;
                    bossSh = false;
                    bossHP = minValue;
                    window.location.href = "Winner.html";
                }
                else if (bossShield === 10 && bossHP === 20) 
                {
                    bossShield = minValue;
                    bossSh = false;
                    bossHP = minValue;
                    window.location.href = "Winner.html";
                }
                else 
                {
                    bossShield -= playerDmg * 3;
                    tempNum = Math.abs(bossShield);
                    bossHP = decrementHP( tempNum, bossHP);
                    console.log(bossHP + " dmg boss");
                    setTimeout(function(){ bossChoice(); }, 5000);
                    bossShield = minValue;
                    bossSh = false;
                }
                
            }
           else if (bossShield === 30)
           {
                setTimeout(function(){ bossChoice(); }, 5000);
                bossShield = minValue;
                bossSh = false;
           }
           else 
           {
            bossShield -= playerDmg * 3;
            setTimeout(function(){ bossChoice(); }, 5000);
           }
        
        }
        if (bossHP <= 30)
        {
            bossHP = minValue;
            console.log(bossHP + " dmg boss");
            window.location.href = "Winner.html";
            // then switch over to win page
        }
        else
        {
            bossHP = decrementHP( playerDmg * 3, bossHP);
            console.log(bossHP + " dmg boss");
            setTimeout(function(){ bossChoice(); }, 5000);
        }
    }
    else if (tempNum === 1) 
    {
        if(playerHP === maxValue)
        {
            setTimeout(function(){ bossChoice(); }, 5000);
            console.log(playerHP + " player hp is full");
        }
        else if (playerHP <= 70)
        {
            playerHP = incrementHP( playerDmg * 3, playerHP);
            console.log(playerHP + " increase player hp");
            setTimeout(function(){ bossChoice(); }, 5000);
        }
        else
        {
            playerHP = maxValue;
            console.log(playerHP + " increase player hp to max");
            setTimeout(function(){ bossChoice(); }, 5000);
        }
    }
    else 
    {
        plSH = true;
        if(playerShield === maxValue)
        {
            setTimeout(function(){ bossChoice(); }, 5000);
            console.log(playerShield + " player shield is full");
        }
        else if (playerShield <= 70)
        {
            playerShield += 30;
            console.log(playerShield + " increase player shield by 30");
            setTimeout(function(){ bossChoice(); }, 5000);
        }
        else 
        {
            playerShield = maxValue;
            console.log(playerShield + " increase player shield by 30");
            setTimeout(function(){ bossChoice(); }, 5000);
        }
    }
});

function bossChoice()
{
    tempNum = Math.floor(Math.random() * 4);
    console.log(tempNum + " tempNum")
    if (tempNum === 0)
    {
        damageBoss();
    }
    else if (tempNum === 1) 
    {
        healBoss();
    }
    else if (tempNum === 2) 
    {
        shieldBoss();
    }
    else 
    {
        randomSpellBoss();
    }
}
// deals damage to player
function damageBoss()
{
    if(plSH)
    {
        playerShield -= bossDmg;
        if (playerShield === 0)
        {
            plSH = false;
        }
    }
    if (playerHP === 10)
    {
        playerHP = decrementHP( bossDmg, playerHP);
        console.log(playerHP + " dmg player");
        window.location.href = "Loss.html";
    }
    else
    {
        playerHP = decrementHP( bossDmg, playerHP);
        console.log(playerHP + " dmg player");
    }
}
// heals the boss
function healBoss()
{
    if(bossHP === maxValue)
    {
        console.log(bossHP + " boss hp is full");
    }
    else if (bossHP < maxValue)
    {
        bossHP = incrementHP(bossDmg, bossHP);
        console.log(bossHP + " heal boss hp");
    }
    
}
// gives the boss a shield
function shieldBoss()
{
    bossSh = true;
    if(bossShield === maxValue)
    {
        console.log(bossShield + " boss shield is full");
    }
    else if (bossShield < maxValue)
    {
        bossShield += 10;
        console.log(bossShield + " increase boss shield by 10");
    }
    
}
// random spell for boss
function randomSpellBoss() // need to change player values to boss
{
    tempNum = Math.floor(Math.random() * 3);
    console.log(tempNum + " tempNum")
    if (tempNum === 0)
    {
        if(plSH)
        {
            if (playerShield < 30) 
            {
                if (playerShield === 20 && playerHP === 10)
                {
                    playerShield = minValue;
                    plSH = false;
                    playerHP = minValue;
                    window.location.href = "Loss.html";
                }
                else if (playerShield === 10 && playerHP === 20) 
                {
                    playerShield = minValue;
                    plSH = false;
                    playerHP = minValue;
                    window.location.href = "Loss.html";
                }
                else 
                {
                    playerShield -= bossDmg * 3;
                    tempNum = Math.abs(playerShield);
                    playerHP = decrementHP( tempNum, playerHP);
                    console.log(playerHP + " dmg player");
                    playerShield = minValue;
                    bossSh = false;
                }
                
            }
           else if (playerShield === 30)
           {
                playerShield = minValue;
                plSH = false;
           }
           else 
           {
                playerShield -= bossDmg * 3;
           }
        
        }
        if (playerHP <= 30)
        {
            playerHP = minValue;
            console.log(playerHP + " dmg player");
            window.location.href = "Loss.html";
            // then switch over to win page
        }
        else
        {
            playerHP = decrementHP( bossDmg * 3, playerHP);
            console.log(playerHP + " dmg player");
        }
    }
    else if (tempNum === 1) 
    {
        if(bossHP === maxValue)
        {
            console.log(bossHP + " boss hp is full");
        }
        else if (bossHP <= 70)
        {
            bossHP = incrementHP( bossDmg * 3, bossHP);
            console.log(bossHP + " increase boss hp");
        }
        else
        {
            bossHP = maxValue;
            console.log(bossHP + " increase boss hp to max");
        }
    }
    else 
    {
        bossSh = true;
        if(bossShield === maxValue)
        {
            console.log(bossShield + " boss shield is full");
        }
        else if (bossShield <= 70)
        {
            bossShield += 30;
            console.log(bossShield + " increase boss shield by 30");
        }
        else 
        {
            bossShield = maxValue;
            console.log(bossShield + " increase boss shield by 30");
        }
    }
}


//document.getElementById("progress").value = 100;
//document.getElementById("progress").max = 200;
//https://www.potterapi.com/v1/characters/?key=$2a$10$H1pmgojMlcHoQBh9QhzYYeYnIfKZtYOxZR2FQ6SH0lNbYzgMEQVme
//&house=Slytherin
