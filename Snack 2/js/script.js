// Snack 2 ---------------------------------------------------
/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
 nome,
 punti fatti,
 falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono 
solo nomi e falli subiti e stampiamo tutto in console.
Svilupparlo in ES6.
*/


// Creare un array di oggetti di squadre di calcio
const arraySquadre = [
    {
        nome: 'Squadra1',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Squadra2',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Squadra3',
        punti_fatti: 0,
        falli_subiti: 0
    }
]


// Generare numeri random 
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


// Setto con un for i valori dei punti fatti e falli subiti con il numero random
for (let i = 0; i < arraySquadre.length; i++) {
    arraySquadre[i].punti_fatti = getRandomNumber(0,50);
    arraySquadre[i].falli_subiti = getRandomNumber(0,100);
}

console.log(arraySquadre);

//x destrutturiamo e creiamo un nuovo array
const newArraySquadre = [];

for (let i = 0; i < arraySquadre.length; i++){
    const { nome, falli_subiti } = arraySquadre[i];

    newArraySquadre.push({
        nome,
        falli_subiti,
    })
}

console.log (newArraySquadre);
