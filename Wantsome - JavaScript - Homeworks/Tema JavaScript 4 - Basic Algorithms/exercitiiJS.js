//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

function protectEmail(email) {
    var emailArray = email.split("@");
    var dupaArond = emailArray[1];
    var nume = emailArray[0];
    var slicedName = nume.slice(0, 3);
    return slicedName + "...@" + dupaArond;
}


//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

function uppercase(aString) {
    var arr = aString.split(" ");
    for(i=0; i<arr.length; i++) {
        var firstLetter = arr[i].charAt(0);
        var upperLetter = firstLetter.toUpperCase();
        arr[i]= upperLetter + arr[i].slice(1);
    }
    aString=arr.join(" ");
    return aString;
}

// //Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function switchLetters(str) {
    var arr = str.split("");
    for(var i=0; i<arr.length; i++) {
        if(arr[i] === arr[i].toLowerCase()) {
            arr[i] = arr[i].toUpperCase();
        } else {
            arr[i] = arr[i].toLowerCase();
        }
    }
   str = arr.join("");
   return str; 
}

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function concatString(str, number) {
    var strInitial = str;
    for(var i=1; i<number; i++) {
        str = str + strInitial;
    }
    return str;
}


//Ex5
/* A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
// intrebare de interviu
"cojoc".split("").resurse().join("")
reverse la string */

function checkPalindrome(str) {
    var arr = str.split("");
    var newArr = arr.reverse();
    var joinedArr = newArr.join("");
    if(str === joinedArr) {
        return str +  " is palindrome."
    } else {
        return str + " is not palindrome."
    } 
}


//Ex6
/* Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
 contine ca si elemente cele mai mari numere din fiecare array */

 function biggestNumbers(arr) {
     var resultArr = [];
     for (var i=0; i<arr.length; i++) {
             arr[i].sort(function(a,b) {return b - a});
             resultArr.push(arr[i].shift());
     }
     return resultArr;
 }


//Ex7
// Implementati o functie care face reverse la un string

function reverseStr(str) {
    var string = str.split("").reverse().join("");
    return string;
}


//Ex8 
// Implementati o functie care calculeaza factorialul unui numar

function calcFactorial(number) {
for (i=number-1; i>=1; i--) {
    number = number*i;
    } 
    return number;
}  



//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

function itEnds(str1, str2) {
    if(str1.endsWith(str2)) {
        return true;
    } else {
        return false;
    }
}



//Ex10
/* Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care trece
 testul specificat */

function isEven(number) {
    if(number%2 === 0) {
        return true;
    } else {
        return false;
    }
}

function evenNumber(arr, func) {
    for(var i=0; i<arr.length; i++) {
        if(func(arr[i]) === true) {
            return arr[i];
        }
    }
}


 
//Ex11
/* Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea
 string */

function hasLetters(str1, str2) {
    var arrStr1 = str1.split("").sort();
    var arrStr2 = str2.split("").sort();
    var match = 0;
    for(var i=0; i<arrStr2.length; i++) {
        if(arrStr1.includes(arrStr2[i])) {
         match = match+1;   
        } 
    }
    if(arrStr2.length === match) {
        return true;
    } else {
        return false;
    }
}


// Ex 12
/* Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului 
pana cand intalneste elementul cu valoarea specificata */

function showVal(arr, val) {
    let newArr=[];
    let i=0;
    while(i!==val) {
        newArr.push(arr[i]);
        i++;
    }
    return newArr;
}


// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

function removeFalse(arr) {
    return arr.filter(function(element) {return Boolean(element); });
}


// Ex 14
// Scrieti o functie care repeta un string de n ori specificate
 
function repeatStr(str, num) {
    var strInitial = str;
    for(var i=1; i<num; i++) {
        str = str + strInitial;
    }
    return str;
}