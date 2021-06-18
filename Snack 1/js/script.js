// Snack 1 ---------------------------------------------------
/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti 
proprietà: nome e peso. Stampare a schermo la bici con peso minore 
utilizzando destructuring e template literal. 
Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6.
*/

/*
var bikeArray = [
    {
        nome: 'Bianchi',
        peso: 11,
    },
    {
        nome: 'Scott',
        peso: 12,
    },
    {
        nome: 'Bottecchia',
        peso: 13,
    }
];


var lastLightBike;
var lastWeightLight = 1000;

for (var i = 0; i < bikeArray.length; i++) {
    
    var thisWeight = bikeArray[i].peso;

    if (thisWeight < lastWeightLight) {
        lastLightBike = bikeArray[i];
        lastWeightLight = thisWeight;
    }
}

console.log(lastLightBike);
*/


const bikeArray = [
    {
        nome: 'Bianchi',
        peso: 11,
    },
    {
        nome: 'Scott',
        peso: 12,
    },
    {
        nome: 'Bottecchia',
        peso: 13,
    }
];

let lastLightBike; 
let lastWeightLight = 1000; 

for (var i = 0; i < bikeArray.length; i++) {
    
    const {peso} = bikeArray[i];

    if (peso < lastWeightLight) {
        lastLightBike = bikeArray[i];
        lastWeightLight = peso;
    }
}

const { nome } = lastLightBike

console.log(`La bici più leggera è la ${nome}`)
