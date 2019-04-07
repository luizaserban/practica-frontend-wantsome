/* 1. Scrieti o functie de tip named function care accepta ca argument un CNP si verifica sexul unei persoane. In urma apelului 
acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F". */

function verifyGender(cnp) {
    var cnpText = cnp.toString();
    cnpText = cnpText.slice(0, 1);
    if(cnpText == 1) {
        return "Persoana verificata este de sexul M.";
    } else {
        return "Persoana verificata este de sexul F.";
    }
}
    
/* 2. Scrieti o functie de tip function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul 
punctajului. Criteriile sunt urmatoarele:
- 1-3 = E
- 3-6 = D
- 7-8 = B
- 9 = A
- 10 = A+
Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]". */

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

/* 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: "Marca [marca] se produce in [tara]".
 Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 
 variante diferite. */

function undeSeProduce(marca) {
    if(marca === "Volvo") {
        return "Marca " + marca + " se produce in Suedia."; 
    } else if(marca === "Suzuki") {
        return "Marca " + marca + " se produce in Japonia.";
    } else if(marca === "Dacia") {
        return "Marca " + marca + " se produce in Romania.";
    } else if(marca === "Audi") {
        return "Marca " + marca + " se produce in Germania.";
    } else if(marca === "Honda") {
        return "Marca " + marca + " se produce in Japonia.";
    } else if(marca === "Citroen") {
        return "Marca " + marca + " se produce in Franta.";
    } else if(marca === "Seat") {
        return "Marca " + marca + " se produce in Spania.";
    } else {
        return "Marca este necunoscuta.";
    }
}


function whereIsBuilt(brand) {
    switch(true) {
        case brand === "Volvo":
        return "Marca " + brand + " se produce in Suedia.";
        break;

        case brand === "Suzuki":
        return "Marca " + brand + " se produce in Japonia.";
        break;

        case brand === "Dacia":
        return "Marca " + brand + " se produce in Romania.";
        break;

        case brand === "Audi":
        return "Marca " + brand + " se produce in Germania.";
        break;

        case brand === "Honda":
        return "Marca " + brand + " se produce in Japonia.";
        break;

        case brand === "Citroen":
        return "Marca " + brand + " se produce in Franta.";
        break;

        case brand === "Seat":
        return "Marca " + brand + " se produce in Spania.";
        break;

        default:
        return "Marca este necunoscuta.";
    }
}



