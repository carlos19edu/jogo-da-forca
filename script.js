$(function () {
    novojogo();
    init();


});


function init() {
    $("#teclado button").click(function () {
        var letra = $(this).text();
        jogar(letra);
        $(this).css("background-color", "#fff");
        $(this).prop("disabled", true);
    });

    $("#play").click(function () {
        novojogo();
    });
}


var indexSorteio = 1;
var i;
var palavras = new Array();
palavras[0] = "computador";
palavras[1] = "animal";
palavras[2] = "amor";
palavras[3] = "faculdade";
palavras[4] = "escola";
palavras[5] = "paralelepipedo";
palavras[6] = "marcos";
palavras[7] = "selio";
palavras[8] = "jogo";
palavras[9] = "mapa";
palavras[10] = "babado";
palavras[11] = "ana";
palavras[12] = "critico";
palavras[13] = "windows";
palavras[14] = "linux";
palavras[15] = "macaco";
palavras[16] = "panela";
palavras[17] = "frederico";
palavras[18] = "fofura";
palavras[19] = "grafico";

var letrasErradas = "";
var letrasEncontradas = "";


function jogar(letra) {
    var palavra = palavras[indexSorteio].toUpperCase();
    palavra.split("");
    var encontrou = false;
    var coleta = "";
    for (i = 0; i < palavra.length; i++) {

        if (palavra[i] == letra) {
            $("#jogo .letra").eq(i).find("p").text(letra);
            letrasEncontradas += letra;
            encontrou = true;
        }

    }
    if (encontrou == false) {

        if (letrasErradas.indexOf(letra) == -1) {
            letrasErradas += letra;
            $("#letras-erradas").append("<div class='letra-errada'><p>" + letra + "</p></div>");
            validarErro();

        }

    }


    if (letrasEncontradas.length == palavra.length) {
        venceu();
    }
}


function validarErro() {
    var fig = "img/";
    switch (letrasErradas.length) {
        case 0:
            fig += "forca.png";
            break;
        case 1:
            fig += "cabeca.png";

            break;
        case 2:
            fig += "braco.png";
            break;
        case 3:
            fig += "bracos.png";
            break;
        case 4:
            fig += "barriga.png";
            break;
        case 5:
            fig += "perna.png";
            break;
        case 6:
            fig += "corpo.png";
            perdeu();
            break;
    }
    $("#forca img").remove();
    $("#forca").append("<img src='" + fig + "' width='200px' height='200px' />");
}

function perdeu() {
    $(".div-bk").show();
    $("#resultado").text("Você perdeu :(");
    $("#resultado").css("color", "red");
}

function venceu() {
    $(".div-bk").show();
    $("#resultado").text("Você venceu !! :D");
    $("#resultado").css("color", "green");

}

function novojogo() {

    indexSorteio = Math.floor(Math.random() * 20);
    $("#teclado").empty();
    $("#letras-erradas").empty();
    $("#jogo").empty();
    $("#forca img").remove();
    $("#forca").append("<img src='img/forca.png' width='200px' height='200px' />");
    $("#palavra").text("Palavra : " + palavras[indexSorteio].toUpperCase());

    letrasErradas = "";
    letrasEncontradas = "";

    var linha = 0;
    for (i = 65; i < 91; i++) {
        $("#teclado").append("<button class='btn success'>" + String.fromCharCode(i) + "</button>");
    }

    for (i = 0; i < palavras[indexSorteio].length; i++) {
        $("#jogo").append("<div class='letra'><p>__</p></div>");
    }



    $(".div-bk").hide();
    init();


}
function menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}