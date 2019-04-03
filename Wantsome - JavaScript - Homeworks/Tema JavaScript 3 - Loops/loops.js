/* 1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
raporta acest lucru in consola. (exemplu: “2 este numar par”);
Scrieti functia in doua variante: while si for */

// declar o functie tip named function fara niciun parametru
function iteratie() {
// declar variabila i    
    var i;
// scriu sintaxa pt for    
    for (i=0; i<=20; i++) {
// scriu sintaxa pt if else pt a verifica daca numarul este par sau impar        
        if(i%2 === 0) {
            console.log(i + " este numar par.");
    } else {
            console.log(i + " este numar impar.");
        }
    }
}

// declar o functie named fara niciun parametru
function parImpar() {
//declar variabila i    
    var i = 0;
//scriu sintaxa pt while    
    while(i<=20) {
// scriu sintaxa pt if else pt a verifica daca numarul este par sau impar        
        if(i%2 === 0) {
            console.log(i + " este numar par");
        } else {
            console.log(i + " este numar impar.");
        }
        i+=1;
    }
}


/* Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
rezultatul. (exemplu: “3*9=27”).
Scrieti functia in doua variante: while si for */

function multiplica() {
    var i;
    for(i=0; i<=10; i++) {
        console.log(i + "*9=" + i*9);
    }
}

function multiplyByNine() {
    var i=0;
    while(i<=10) {
        console.log(i + "*9=" + i*9);
        i++;
    }
}

// tema neterminata, voi pune si restul exercitiilor in zilele ce urmeaza