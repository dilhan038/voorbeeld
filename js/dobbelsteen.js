var btnDobbelsteen = document.getElementById("btnDobbelsteen");
var uitvoerDobbelsteen = document.getElementById("uitvoerDobbelsteen");

btnDobbelsteen.addEventListener("click", function() {
    let getal = getRandomInt(1, 6);
    let image = document.createElement("img");

    /*if(getal === 1) {
        image.src= "../img/1.png";
    }

    if(getal === 2) {
        image.src= "../img/2.png";
    }

    if(getal === 3) {
        image.src= "../img/3.png";
    }

    if(getal === 4) {
        image.src= "../img/4.png";
    }

    if(getal === 5) {
        image.src= "../img/5.png";
    }

    if(getal === 6) {
        image.src= "../img/6.png";
    } */

    switch(getal) {
        case 1:
            image.src= "../img/1.png";
            break;
        case 2:
            image.src= "../img/2.png";
            break;
        case 3:
            image.src= "../img/3.png";
            break;
        case 4:
            image.src= "../img/4.png";
            break;
        case 5:
            image.src= "../img/5.png";
            break;
        case 6:
            image.src= "../img/6.png";
            break;


    }
    uitvoerDobbelsteen.innerHTML = "";
    uitvoerDobbelsteen.append(image);
}); 





function getRandomInt(min, max) {
    return Math.round(Math.random() * (max-min) + min);

};