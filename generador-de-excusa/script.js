

const sujeto = [
    "Mi hijo",
    "El vecino",
    "Un fantasma",
    "Mi abuela",
    "Mi mujer",
];
const verbo = [
    "se comió",
    "rompió",
    "escondió",
    "quemó",
    "perdió"
];
const objeto = [
    "mis llaves",
    "el informe",
    "el coche",
    "mi mochila",
    "la computadora",
];
const lugar = [
    "en el parking",
    "en mi casa",
    "en la escuela",
    "en el mercadona",
    "en la lavadora",
];

function generateExcuse() {
    const excSujeto = sujeto[Math.floor(Math.random() * sujeto.length)];
    const excVerbo = verbo[Math.floor(Math.random() * verbo.length)];
    const excObjeto = objeto[Math.floor(Math.random() * objeto.length)];
    const excLugar = lugar[Math.floor(Math.random() * lugar.length)];

    const excuse = `${excSujeto} ${excVerbo} ${excObjeto} ${excLugar}.`;
    document.getElementById("excuse").textContent = excuse;
}

let timeoutID;

function startExcuse(){
    generateExcuse();

    function replayExcuse(){
        timeoutID = setTimeout(() => {
            generateExcuse()
            replayExcuse()
        }, 4000);
    }
    replayExcuse()
}

function stopExcuse(){
    clearTimeout(timeoutID);
}

window.onload = generateExcuse
