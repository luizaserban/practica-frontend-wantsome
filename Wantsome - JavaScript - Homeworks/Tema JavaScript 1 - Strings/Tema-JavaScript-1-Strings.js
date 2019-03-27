// 1. Scrieti o functie care verifica daca un input este sau nu de tip string

function isString (input) {
    return typeOf input === 'string';
}


// 2. Scrieti o functie care verifica daca un string este gol sau nu.

function isEmpty (str) {
    return str.length === 0;
}


// 3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:

function stringToArray (str) {
    return str.split(' ');
}


// 4. Scrieti o functie care transforma un string in forma abreviata:

function abbrevName (name) {
    var pos = name.indexOf(' ') + 2;
    name = name.slice(0, pos);
    name = name + '.';
    return name;
}


// 5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):

function capitalize (str) {
    var firstLetter = str.charAt(0).toUpperCase();
    str = firstLetter + str.slice(1);
    return str;
}


// 6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:

function truncateString (str, number) {
    str = str.slice(0, number);
    return str;
}

// 7. Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu

function isUpperCaseAt (str, number) {
    var lowerCase = str.toLowerCase();
    return (str.charAt(number)) !== (lowerCase.charAt(number));
}

// 8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:

function insert (str1, str2, pos) {
    str1 = str1.slice(0, pos) + str2 + str1.slice(pos);
    return str1;
}

// 9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:



// 10. Scrieti o functie care compara doua string-uri case-insensitive:

function compareStrings (str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    return str1 == str2;
}

// 11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:

function Uncapitalize (str) {
    var firstLetter = str.charAt(0).toLowerCase();
    str = firstLetter + str.slice(1);
    return str;
}