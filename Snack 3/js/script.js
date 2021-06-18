// Snack 3 ---------------------------------------------------
/*
Abbiamo sempre un array di squadre, con:
nome
punti fatti
falli subiti
Stampare in html (in forma tabellare!!!)
i dati relativi alle squadre evidenziando 
in giallo la riga corrispondente 
alla squadra con più falli subiti.
*/

// Generare numeri random 
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Abbiamo sempre un array di squadre
const arraySquadre = [
    {
        nome: 'New Team',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Muppett',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Toho',
        punti_fatti: 0,
        falli_subiti: 0
    }
]

let team;
let maxFalliSubiti = 0;

const tableOutput = document.querySelector('.table-output');

for (let i = 0; i < arraySquadre.length; i++) {
    // Assegno dei numeri random al punti e ai falli
    arraySquadre[i].punti_fatti = getRandomNumber(0, 50);
    arraySquadre[i].falli_subiti = getRandomNumber(0, 100);
    
    // destruttuo 
    const { nome, punti_fatti, falli_subiti } = arraySquadre[i];
    
    // 
    if (falli_subiti > maxFalliSubiti){
        team = arraySquadre[i];
        maxFalliSubiti = falli_subiti;
    }  

    tableOutput.innerHTML += `
    <ul>
        <li>${nome}</li>
        <li>${punti_fatti}</li>
        <li>${falli_subiti}</li>
    </ul>
    `
}



console.log(arraySquadre);
const {nome, falli_subiti} = team;
console.log(`La squadra con più falli subiti è ${nome} con ${falli_subiti} falli subiti`)
