/* <!-- 
    Auteur: Dewi Zheng
    Klas: SD-24
    Datum: 17/12/2023
*/


// Hier komen de schoolvakken te staan met een array
var cijferlijst = ["Nederlands", "Engels", "Rekenen", "Burgerschap", 
"Plannen en Ontwerpen", "Realiseren", "Computervaardigheiden", "Testen en Verbeteren"]; 

//Je kunt alle fouten opsporen in je codes met console.log
console.log(cijferlijst);

// Met een variabel "var" kun je ieder variabel een naam geven en een nieuwe waarde geven. 
var countText = "";

//De informatie uit collectie_vakken worden in de plek "Deel_Vakken" weergegeven.  
const collection_vakken = document.getElementsByClassName("Deel_Vakken");

// Hier is een op rij gemaakt met een for loop 
for(var i = 0; i <= 7; i++) {

    countText += cijferlijst[i] + "\n";
    collection_vakken[i].innerHTML = cijferlijst[i];
}

console.log(countText);


function ShowMarks() {

// Hier komen de cijfers te staan
var Beoordelingen = ["6", "V", "O", "V", "6", "6", "7", "5"];

console.log(Beoordelingen);

var countText_Marks = "";

const collection_marks = document.getElementsByClassName("Resultaat_Beoordelingen");

for(var j = 0; j <= 7; j++) {

    countText_Marks += Beoordelingen[j] + "\n";
    collection_marks[j].innerHTML = Beoordelingen[j];
}

console.log(countText_Marks);

}















// var input = "";

// if(input == "Yes"){


// }


// function Question(Question_function) 
// {


// }


// function ShowMarks(ShowMarks_function) 
// {

// }







