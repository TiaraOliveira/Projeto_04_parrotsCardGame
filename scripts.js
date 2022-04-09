let quantidade = 0

function entrada() {
    quantidade = prompt("Quantas cartas deseja")

    while (quantidade > 14 || quantidade == 0 || quantidade < 4 || quantidade == null || quantidade % 2 != 0) {
        quantidade = prompt("Comando inválido.  Quantas cartas deseja")
    }
    cartasnamesa();

}

function cartasnamesa() {
    i = 0;
    const versos = [
        `<img src="/imagens/explodyparrot.gif" alt="">`,
        `<img src="/imagens/explodyparrot.gif" alt="">`,
        `<img src="/imagens/fiestaparrot.gif" alt="">`,
        `<img src="/imagens/fiestaparrot.gif" alt=""> `,
        `<img src="/imagens/revertitparrot.gif" alt="">`,
        `<img src="/imagens/revertitparrot.gif" alt="">`,
        `<img src="/imagens/tripletsparrot.gif" alt="">`,
        `<img src="/imagens/tripletsparrot.gif" alt="">`,
        `<img src="/imagens/metalparrot.gif" alt="">`,
        `<img src="/imagens/metalparrot.gif" alt="">`,
        `<img src="/imagens/unicornparrot.gif" alt="">`,
        `<img src="/imagens/unicornparrot.gif" alt="">`,
        `<img src="/imagens/bobrossparrot.gif" alt="">`,
        `<img src="/imagens/bobrossparrot.gif" alt="">`,
    ]


    let v1 = 0;
    const versocompleto = [];
    while (v1 < quantidade) {
        versocompleto.push(versos[v1])

        v1++;

    }

    versocompleto.sort(comparador);
    while (i < quantidade) {
        let back = document.querySelector(".cards");

        back.innerHTML += `
        <div class="card" onclick="virar(this)">
                <img class="front-face face" src="/imagens/front.png" alt="">
               <figure class="back-face face">${versocompleto[i]} </figure>  
        </div>
        `
        i++;
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function virar(elemento) {
    
    console.log(click1)
    console.log(click2)
    if (click1) {
        console.log("Entrandoa qui")
        let backfaceImage = elemento.querySelector(".back-face");
        elemento.querySelector(".front-face").classList.add("rodar-front-face");
        backfaceImage.classList.add("desroda-back-face");

        console.log(backfaceImage.src);
        click2 = backfaceImage.src;
        console.log("segundo", click2)


        if (click1 == click2) {
            console.log("mesma carta")
        }
        else {
            console.log("Cartas diferentes, virando de volta...")
            //Desviro as cartas
        }
    }
    else {
        let backfaceImage = elemento.querySelector(".back-face");
        elemento.querySelector(".front-face").classList.add("rodar-front-face");
        backfaceImage.classList.add("desroda-back-face");

        console.log(backfaceImage.src);
        click1 = backfaceImage.src;
        console.log(click1)
    }
}