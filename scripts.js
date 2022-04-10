let click1;
let click2;
let jogadas = 0;
let quantidade = 0

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
    
    if (click1) {
        console.log("Entrandoa qui")
        let backfaceImage = elemento.querySelector(".back-face");
        elemento.querySelector(".front-face").classList.add("rodar-front-face");
        backfaceImage.classList.add("desroda-back-face");
        elemento.classList.add(".selecionadas")

        
        click2 = backfaceImage.src;
        console.log("segundo", click2)


        if (click1 == click2) {
            console.log("mesma carta")


        }
        else {
            console.log("Cartas diferentes, virando de volta...")
            desvira();
        }
    }
    else {
        let backfaceImage = elemento.querySelector(".back-face");
        elemento.querySelector(".front-face").classList.add("rodar-front-face");
        backfaceImage.classList.add("desroda-back-face");
        

        
        click1 = backfaceImage.src;
        console.log(click1)
    }


}

function desvira(elemento){
    let virada = elemento.querySelectorAll(".selecionadas")
    elemento.querySelector(".front-face .selecionada").classList.toggle("rodar-front-face");
    
}