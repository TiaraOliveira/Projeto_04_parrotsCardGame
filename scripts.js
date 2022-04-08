let quantidade = 0

function entrada() {
    quantidade = prompt("Quantas cartas deseja")

    while (quantidade > 14 || quantidade == 0 || quantidade < 4 || quantidade == null || quantidade % 2 != 0) {

        quantidade = prompt("Comando inválido.  Quantas cartas deseja")

    }

    cartasnamesa();
    versocartas();
}

function cartasnamesa() {
    contador = 0;
    while (contador < quantidade) {
        let cards = document.querySelector(".face");

        cards.innerHTML += `
        <li class="cadafrente">
            <div>
                <img src="/imagens/front.png" alt="">
             </div>
        </li>
        `;
        contador++;

    }

}

function versocartas() {
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
        let back = document.querySelector(".verset");

        back.innerHTML += `
         <li class="cadafrente">
            <div>
                <span>
                     ${versocompleto[i]} 
                </span>
            </div>
         </li>
`
        i++;

    }


}





function comparador() {
    return Math.random() - 0.5;
}