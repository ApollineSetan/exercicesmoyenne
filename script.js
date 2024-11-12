//Créer une fonction qui reçoit un tableau de 3 notes ou le tableau des notes (exo avant) et qui calcule une moyenne entre ces 3 notes (tableau de note)
//Dans cette fonction, SI la moyenne est supérieure ou égale à 15 on renvoie une string (très bien)
//Dans cette fonction, sinon si la moyenne est supérieure ou égale à 10, on renvoie une string (assez bien)
//Dans cette fonction, sinon renvoie une string (refus)


function moyenneCalcul(num1, num2, num3){
    let somme = (num1 + num2 + num3) /3;
    if (somme >= 15){
        console.log("Très bien");
    } else if (somme >= 10 && somme < 15){
        console.log("Assez bien");
    } else {
        console.log("Refus");
    }
}

moyenneCalcul(15,12,19);


// Autre façon avec le tableau

let notes = [];

function moyenneNotes(notes){
    let somme = notes[0] + notes[1] + notes[2];
    let moyenne = somme / 3;
    if (moyenne >= 15){
        console.log("Très bien");
    } else if (moyenne >= 10 && moyenne < 15){
        console.log("Assez bien");
    } else {
        console.log("Refus");
    }
}

moyenneNotes([20,4,5]);


// Autre façon avec plus de trois notes

let tableauNotes = [];

function moyenneDuTableau(tableauNotes){
    let somme = 0;
    for (let i = 0 ; i < tableauNotes.length; i++){
        somme += tableauNotes[i];
    }
    let moyenneDesNotes = somme / tableauNotes.length;
    //return moyenneDesNotes;
    if (moyenneDesNotes >= 15){
        console.log("Très bien");
    } else if (moyenneDesNotes >= 10 && moyenneDesNotes < 15){
        console.log("Assez bien");
    } else {
        console.log("Refus");
    }
}

moyenneDuTableau([10,15,15,20,20]);