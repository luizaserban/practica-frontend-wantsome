/* 1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
raporta acest lucru in consola. (exemplu: “2 este numar par”);
Scrieti functia in doua variante: while si for */

// declar o functie tip named function fara niciun parametru
function iteratie() {
// declar variabila i cu care lucram in functie, cu aceasta variabila iteram in "for"    
    var i;
// scriu sintaxa pt for care are 3 statements   
    for(i=0; i<=20; i++) {   //asignez o valoare variabilei i, conditionez pana unde sa itereze i, incrementez i
// scriu sintaxa pt if else pt a verifica daca numarul este par sau impar        
        if(i%2 === 0) {  //cu ajutorul operatorului matematic modulo verific daca restul impartirii i la 2 este 0 sau nu
            console.log(i + " este numar par.");
    } else {
            console.log(i + " este numar impar.");
        }
    }
}

// declar o functie named fara niciun parametru
function parImpar() {
//declar variabila i cu care lucram in functie, cu aceasta variabila iteram in "for" si ii asignez o valoare
    var i = 0;
//scriu sintaxa pt while    
    while(i<=20) { //atata timp cat i este mai mic sau egal cu 20, trebuie executat codul de mai jos
// scriu sintaxa pt if else pt a verifica daca numarul este par sau impar        
        if(i%2 === 0) {
            console.log(i + " este numar par");
        } else {
            console.log(i + " este numar impar.");
        }
        i+=1;
    }
}


/* 2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
rezultatul. (exemplu: “3*9=27”).
Scrieti functia in doua variante: while si for */

function multiplica() { //declar named function
    var i; //declar variabila i cu care iterez in for
    for(i=0; i<=10; i++) { //asignez o valoare lui i, il conditionez, incrementez cu 1
        console.log(i + "*9=" + i*9);
    }
}

function multiplyByNine() { //declar named function
    var i=0; //declar si ii asignez o valoare lui i
    while(i<=10) { //cat timp i este mai mic sau egal cu 10 returneaza codul de mai jos
        console.log(i + "*9=" + i*9); 
        i++;
    }
}


/* 3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
(exemplu: 1 * 0 = 0
1 * 1 = 1
…
1 * 10 = 10 )
Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”. */

function multiplicationTable() { //declar named function
    var i; //declar variabila i
    for(i=0; i<=10; i++) { //asignez o valoare lui i, conditionez i, incrementez i cu 1
        var iPrim; //declar o a doua variabila pt a putea face inmultirea
        for(iPrim=1; iPrim<=10; iPrim++) {  //asignez o valoare, cinditionez variabila, o incrementez cu 1
            console.log(i + "*" + iPrim + "=" + i*iPrim);
        }
    }
}


/* 4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
calificativul B \n ...samd “). Atentie: Rezultatul calificativul trebuie sa fie obtinut prin utilizarea functiei
dezvoltate la tema anterioara ! */

//functia de la tema anterioara
var calificativ = function(nota) {
    if(nota >= 1 && nota <= 3) {
        return "Calificatul corespunzator punctajului " + nota + " este" +  " E.";
    } else if(nota >= 4 && nota <= 6) {
        return "Calificatul corespunzator punctajului " + nota + " este " + " D.";
    } else if(nota >= 7 && nota <= 8) {
        return "Calificatul corespunzator punctajului " + nota + " este " + " B.";
    } else if(nota === 9) {
        return "Calificatul corespunzator punctajului " + nota + " este" + " A.";
    } else if(nota === 10) {
        return "Calificatul corespunzator punctajului " + nota + " este" + " A+.";
    }
}

function toateCalificativele() { //declar o noua functie tip named function
    for(var i=1; i<=10; i++) { //declar si ii asignez o valoare lui i, conditionez i, incrementez cu 1; i va itera de la 1 la 10
        console.log(calificativ(i)) //afiseaza calificativul corespunzator notei
    }
}

