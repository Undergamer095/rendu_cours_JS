let personnage1 = {
    name: "Geralt",
    life: 50,
    attack: 25,
    precision: 0.5,
}

let personnage2 = {
    name: " La Chasse sauvage",
    life: 100,
    attack: 10,
    precision: 0.6,
}

function attacks(persoAttacking,persoAttacked){
    if(persoAttacking.precision>=Math.random()){
        persoAttacked.life-= persoAttacking.attack
        console.log(persoAttacking.name,"à infliger",persoAttacking.attack,"dégats")
        console.log(persoAttacked.name,"a:",persoAttacked.life,"points de vie")
    }
    else{
        console.log(persoAttacking.name,"a échoué son attaque")
    }  
}

console.log("La chasse sauvage a:",personnage2.life,"points de vie")
console.log("Geralt a:",personnage1.life,"points de vie")
while(personnage1.life>0 && personnage2.life>0){
    attacks(personnage1,personnage2)
    attacks(personnage2,personnage1)
}

if(personnage1.life<=0){
    console.log(personnage2.name,"a vaincue",personnage1.name)
}else{
    console.log(personnage1.name,"a vaincu",personnage2.name)
    }

