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

function entrada() {
    quantidade = prompt("Quantas cartas deseja")

    while (quantidade > 14 || quantidade == 0 || quantidade < 4 || quantidade == null || quantidade % 2 != 0) {
        quantidade = prompt("Comando inválido.  Quantas cartas deseja")
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
                <img src=".${versocompleto[i]}" alt="" class="back-face face">
        </div>
        `
        i++;
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function virar(elemento) {
    cronometro();
  if (click1) {
        backfaceImagesecond = elemento.querySelector(".back-face");
        frontfaceImagesecond = elemento.querySelector(".front-face")
        frontfaceImagesecond.classList.add("rodar-front-face");
        backfaceImagesecond.classList.add("desroda-back-face");
        click2 = backfaceImagesecond.src;
        console.log("segundo", click2)
        compararcartas()
        
        jogadas++
        console.log(`jogadas ${jogadas}`)
        
     
    }
    else {
        backfaceImagefirst = elemento.querySelector(".back-face");
        frontfaceImagesfirst = elemento.querySelector(".front-face")
        frontfaceImagesfirst.classList.add("rodar-front-face");
        backfaceImagefirst.classList.add("desroda-back-face");
        click1 = backfaceImagefirst.src;
        console.log(click1)
        console.log("eu aquiiiiiiiii meu deus me AJUDA")
        jogadas++
        console.log(jogadas)
    }
}

function compararcartas(){
    console.log("to aqui papai")
    if (click1 === click2) {
        console.log("mesma carta")
        cartascerta += 2
        if (cartascerta === quantidade){
            novamente = prompt("fim do jogo ")
            }
        console.log(`cartas certas ${cartascerta}`)
        click1 = ""

        
        
    } else {
        console.log("Cartas diferentes, virando de volta...")
        click1 = ""
        setTimeout(desvirarfirst, 1000);
    }
}

function desvirarfirst() {
    frontfaceImagesfirst.classList.remove("rodar-front-face");
    backfaceImagefirst.classList.remove("desroda-back-face");
    frontfaceImagesecond.classList.remove("rodar-front-face");
    backfaceImagesecond.classList.remove("desroda-back-face");
    
}


function cronometro(){
    setInterval(timer, 1000)
}

function timer(){
    contador++;
    let acrescentaminuto = document.querySelector(".relogio") 
    acrescentaminuto.innerHTML = contador
}