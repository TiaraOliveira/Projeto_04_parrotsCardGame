let click1;
let click2;
let jogadas = 0;
let quantidade = 0;
let cartasselecionadas = 0;
let selection;
let backfaceImagefirst;
let backfaceImagesecond;
let frontfaceImagesecond;
let frontfaceImagesfirst;
let cartascerta = 0;
let contador = 0;
let idInterval;
let tempototal;
let primeiroclick;
let segundoclick;

function entrada() {
    quantidade = prompt("Insira um número par entre 4 e 14!")

    while (quantidade > 14 || quantidade == 0 || quantidade < 4 || quantidade == null || quantidade % 2 != 0) {
        quantidade = prompt("Comando inválido.  Quantas cartas deseja")
    }

    if (quantidade == 10){
        let janela10 = document.querySelector(".cards")
        janela10.classList.add("cards10")
    } if (quantidade == 8){
        let janela8 = document.querySelector(".cards")
        janela8.classList.add("cards8")
    }if (quantidade == 6){
        let janela6 = document.querySelector(".cards")
        janela6.classList.add("cards6")
    }if (quantidade == 12){
        let janela12 = document.querySelector(".cards")
        janela12.classList.add("cards12")
    }

    cartasnamesa();

}

function cartasnamesa() {

    const versos = [
        "/imagens/explodyparrot.gif",
        "/imagens/explodyparrot.gif",
        "/imagens/fiestaparrot.gif",
        "/imagens/fiestaparrot.gif",
        "/imagens/revertitparrot.gif",
        "/imagens/revertitparrot.gif",
        "/imagens/tripletsparrot.gif",
        "/imagens/tripletsparrot.gif",
        "/imagens/metalparrot.gif",
        "/imagens/metalparrot.gif",
        "/imagens/unicornparrot.gif",
        "/imagens/unicornparrot.gif",
        "/imagens/bobrossparrot.gif",
        "/imagens/bobrossparrot.gif",
    ]


    let v1 = 0;
    const versocompleto = [];
    while (v1 < quantidade) {
        versocompleto.push(versos[v1])
        v1++;
    }

    versocompleto.sort(comparador);
    i = 0;
    while (i < quantidade) {
        let back = document.querySelector(".cards");

        back.innerHTML += `
        <div class="card" onclick="virar(this)">
                <img class="front-face face" src="/imagens/front.png" alt="">
                <img src=".${versocompleto[i]}" alt="" class="back-face face naovirada">
        </div>
        `
        i++;
    }
}

function comparador() {
    return Math.random() - 0.5;
}


function virar(elemento) {
    console.log("Here I am")

    let teste = document.querySelector(".card img")
    cronometro();
    if (click1) {
        backfaceImagesecond = elemento.querySelector(".back-face");
        frontfaceImagesecond = elemento.querySelector(".front-face")
        frontfaceImagesecond.classList.add("rodar-front-face");
        backfaceImagesecond.classList.add("desroda-back-face");
        segundoclick = elemento
        segundoclick.classList.add("desabilita")
        click2 = backfaceImagesecond.src;
  

        if (click1 === click2) {
            cartascerta += 2
            setTimeout(fimdojogo, 50)
            click1 = ""
        } else {
            console.log("Cartas diferentes, virando de volta...")
            click1 = ""
            primeiroclick.classList.remove("desabilita")
            segundoclick.classList.remove("desabilita")
            setTimeout(desvirarfirst, 1000);
        }

        jogadas += 2
        console.log(`jogadas ${jogadas}`)


    }
    else {
        backfaceImagefirst = elemento.querySelector(".back-face");
        frontfaceImagesfirst = elemento.querySelector(".front-face")
        frontfaceImagesfirst.classList.add("rodar-front-face");
        backfaceImagefirst.classList.add("desroda-back-face");
        primeiroclick = elemento
        elemento.classList.add("desabilita")
        console.log(`${primeiroclick}`)
        
       
        click1 = backfaceImagefirst.src;
    }
}


function desvirarfirst() {
    frontfaceImagesfirst.classList.remove("rodar-front-face");
    backfaceImagefirst.classList.remove("desroda-back-face");
    frontfaceImagesecond.classList.remove("rodar-front-face");
    backfaceImagesecond.classList.remove("desroda-back-face");
    
}

/* cronometro em segundos */
function cronometro() {
    idInterval = setInterval(timer, 1000)
}

function timer() {
    contador++;
    let acrescentaminuto = document.querySelector(".relogio span")
    tempototal = acrescentaminuto.innerHTML = contador
}

function fimdojogo(){
     if (cartascerta == quantidade) {
        clearInterval(idInterval)
        alert(`PARABÉNS: Você terminou o jogo com ${jogadas} jogadas e em ${tempototal} segundos `)
        
    }
}