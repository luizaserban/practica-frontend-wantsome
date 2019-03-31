// Cerinta 1:

function verifyGender(cnp) {
    var cnpText = cnp.toString();
    cnpText = cnpText.slice(0, 1);
    if(cnpText == 1) {
        return "Persoana verificata este de sexul M.";
    } else {
        return "Persoana verificata este de sexul F.";
    }
}
    
// Cerinta 2:

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

//Cerinta 3:

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



