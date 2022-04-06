function entrada() {
    let quantidade = prompt("Quantas cartas deseja")

    while (quantidade > 14 || quantidade == 0 || quantidade < 4 || quantidade == null || quantidade%2 != 0) {
       
        quantidade = prompt("Comando inválido.  Quantas cartas deseja")
       
    }
}
