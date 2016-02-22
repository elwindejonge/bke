// Code van Elwin de Jonge //

var box;
var beurt = 1;      // 1 = Speler 1 met een rondje, 2 = Speler 2 met een kruisje
var button;
var speler = 1;
var chgPlayer;
var playerImg;
var scorespeler1;
var scorespeler2;
var speler1;
var speler2;
var rounds;
var rounds1;
var button2;


window.onload = function() {
    box = document.querySelectorAll("#speelveld table tr td img");
    button = document.querySelector(".button");
    button.onclick = fnNewGame;
    button2 = document.querySelector(".bigreset");
    button2.addEventListener("click", resetGame);
    //document.querySelector("button").innerText ="Start spel";

    scorespeler1 = 0;
    scorespeler2 = 0;
    rounds = 0;
    rounds1 = 0;

    /*
        box is nu een array gevuld met alle img-tags in het speelveld
        dus: box[0] is de eerste img tag
                0    1   2     3    4   5     6   7    8    (Aantal is dus 9)
                box.length verteld me dat er dus 9 in  zitten
        box [ img, img, img, img, img, img, img, img, img ]
     */


    playerImg = document.querySelector('.players-turn tr td img');
    speler = document.querySelector('#game-info table tr td:last-child');
    speler1 = document.querySelector('.rounds-info tr:first-child td:last-child');
    speler2 = document.querySelector('.rounds-info tr:nth-child(2) td:last-child');
    rounds = document.querySelector('.rounds-info tr:last-child td:last-child');

};

/*
    Dit is de event handler van de button die iets doet bij een click
 */
function fnNewGame(){
    // Als de tekst 'Start spel' op de knop staat dan gaan we de tekst veranderen in 'Reset spel'
    // Anders staat waarschijnlijk de tekst 'Reset spel' al op de knop en veranderen we deze weer in 'Start spel'
    if(button.innerHTML == 'Start spel') {
        /*
            event handlers toevoegen aan de cellen in mijn speelveld
         */
        for(var index = 0; index < box.length; index++) {
            /*
             Dit zijn de event handlers van de cellen in mijn speelveld
             */
            box[index].onclick = boxClick;
        }
        button.innerHTML = "Reset spel";
    } else {
        // Er staat dus nog 'Reset spel' op de knop
        // Dus moet ik hier, want er wordt nu met de tekst 'Reset spel'geklikt op deze button,
        // Het speelveld leeg maken

        /*
            De event handlers van de cellen in mijn speelveld verwijderen
         */
        for(var index = 0; index < box.length; index++) {
            box[index].src = 'img/empty.jpg';
            box[index].onclick = null;
        }

        button.innerHTML = "Start spel";
    }

}

// Als we een BIG RESET willen die op de button staat moet de score helemaal opnieuw worden geladen
// Zodat elke speler weer 0 punten heeft en de rondes moeten ook gereset worden
function resetGame() {
  speler1.innerHTML = "0";
  speler2.innerHTML = "0";
  rounds.innerHTML = "0";
  button.innerHTML = "Start spel";
  box[0].src = 'img/empty.jpg';
  box[1].src = 'img/empty.jpg';
  box[2].src = 'img/empty.jpg';
  box[3].src = 'img/empty.jpg';
  box[4].src = 'img/empty.jpg';
  box[5].src = 'img/empty.jpg';
  box[6].src = 'img/empty.jpg';
  box[7].src = 'img/empty.jpg';
  box[8].src = 'img/empty.jpg';
}


function boxClick(e) {
    if (!(this.src.indexOf('empty.jpg')>= 0))
        return;
    //console.log('Speler klikt');
    //console.log(this);
    if (beurt == 1) {
        //console.log('Speler 1 is klikt');
        this.src = 'img/cross.jpg';
        beurt = 2;
        //console.log('Beurt nu over naar speler ' + beurt);
    } else {
        //console.log('Speler 2 is klikt');
        this.src = 'img/circle.jpg';
        beurt = 1;
        //console.log('Beurt nu over naar speler ' + beurt);
    }
    changePlayer();
    // Testen of speler 1 heeft gewonnen
    if((box[0].src.indexOf('cross.jpg') >= 0 &&
        box[1].src.indexOf('cross.jpg') >= 0 &&
        box[2].src.indexOf('cross.jpg') >= 0) ||
        (box[3].src.indexOf('cross.jpg') >= 0 &&
        box[4].src.indexOf('cross.jpg') >= 0 &&
        box[5].src.indexOf('cross.jpg') >= 0) ||
        (box[6].src.indexOf('cross.jpg') >= 0 &&
        box[7].src.indexOf('cross.jpg') >= 0 &&
        box[8].src.indexOf('cross.jpg') >= 0)||
        (box[0].src.indexOf('cross.jpg') >= 0 &&
        box[3].src.indexOf('cross.jpg') >= 0 &&
        box[6].src.indexOf('cross.jpg') >= 0)||
        (box[1].src.indexOf('cross.jpg') >= 0 &&
        box[4].src.indexOf('cross.jpg') >= 0 &&
        box[7].src.indexOf('cross.jpg') >= 0)||
        (box[2].src.indexOf('cross.jpg') >= 0 &&
        box[5].src.indexOf('cross.jpg') >= 0 &&
        box[8].src.indexOf('cross.jpg') >= 0)||
        (box[0].src.indexOf('cross.jpg') >= 0 &&
        box[4].src.indexOf('cross.jpg') >= 0 &&
        box[8].src.indexOf('cross.jpg') >= 0)||
        (box[2].src.indexOf('cross.jpg') >= 0 &&
        box[4].src.indexOf('cross.jpg') >= 0 &&
        box[6].src.indexOf('cross.jpg') >= 0)) {
        alert('Speler 1 heeft gewonnen!');
        for(var index = 0; index < box.length; index++) {
            box[index].src = 'img/empty.jpg';
            box[index].onclick = null;

            box[index].onclick = boxClick;

            button.innerHTML = "Start spel";
        }
        scorespeler1 += 3;
        speler1.innerHTML = scorespeler1;
        rounds1 += 1;
        rounds.innerHTML = rounds1;


    } else if( (box[0].src.indexOf('circle.jpg') >= 0 &&
        box[1].src.indexOf('circle.jpg') >= 0 &&
        box[2].src.indexOf('circle.jpg') >= 0) ||
        (box[3].src.indexOf('circle.jpg') >= 0 &&
        box[4].src.indexOf('circle.jpg') >= 0 &&
        box[5].src.indexOf('circle.jpg') >= 0) ||
        (box[6].src.indexOf('circle.jpg') >= 0 &&
        box[7].src.indexOf('circle.jpg') >= 0 &&
        box[8].src.indexOf('circle.jpg') >= 0)||
        (box[0].src.indexOf('circle.jpg') >= 0 &&
        box[3].src.indexOf('circle.jpg') >= 0 &&
        box[6].src.indexOf('circle.jpg') >= 0)||
        (box[1].src.indexOf('circle.jpg') >= 0 &&
        box[4].src.indexOf('circle.jpg') >= 0 &&
        box[7].src.indexOf('circle.jpg') >= 0)||
        (box[2].src.indexOf('circle.jpg') >= 0 &&
        box[5].src.indexOf('circle.jpg') >= 0 &&
        box[8].src.indexOf('circle.jpg') >= 0)||
        (box[0].src.indexOf('circle.jpg') >= 0 &&
        box[4].src.indexOf('circle.jpg') >= 0 &&
        box[8].src.indexOf('circle.jpg') >= 0)||
        (box[2].src.indexOf('circle.jpg') >= 0 &&
        box[4].src.indexOf('circle.jpg') >= 0 &&
        box[6].src.indexOf('circle.jpg') >= 0)) {

        scorespeler2 += 3;
        speler2.innerHTML = scorespeler2;
        scorespeler1 += 3;
        for(var index = 0; index < box.length; index++) {
            box[index].src = 'img/empty.jpg';
            box[index].onclick = null;

            box[index].onclick = boxClick;

            button.innerHTML = "Start spel";
        } 
        rounds1 += 1;
        rounds.innerHTML = rounds1;
        alert('Speler 2 heeft gewonnen');

    } else {
        var aantal_lege_cellen = 0;
        for(var index = 0; index < box.length; index++) {
            if(box[index].src.indexOf('empty.jpg') >= 0)
                aantal_lege_cellen++;
        }
        if(aantal_lege_cellen == 0) {
            button.click();
            alert('Gelijk spel!');
            scorespeler1 += 1;
            speler1.innerHTML = scorespeler1;
            scorespeler2 += 1;
            speler2.innerHTML = scorespeler2;
            rounds1 += 1;
            rounds.innerHTML = rounds1;}
        }

        // Hier komen de aantal rondes te staan
        // Elke keer als er op de reset button is geklikt moet er een ronde bij komen.
        // Er moet een lus gemaakt worden wanneer de rondes 0 zijn dat er ++ een bij komt.
        // Dat moet alleen mogelijk zijn als er op de knop reset spel is geklikt

}


function changePlayer(event) {
    if(playerImg.src.indexOf('img/cross.jpg') >= 0){
        playerImg.src = 'img/circle.jpg';
    } else {
        playerImg.src = 'img/cross.jpg';
    }
    if (speler.innerHTML == '1') {
        speler.innerHTML = '2';
    } else {
        speler.innerHTML = '1';

    }
}
