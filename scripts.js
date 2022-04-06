function minhaFuncao() {
    let quantidade = prompt("Quantas cartas deseja")

    if (quantidade < 2 & quantidade > 14) {
        alert("dado inválido")
        quantidade = prompt("Quantas cartas deseja")
    }
}
