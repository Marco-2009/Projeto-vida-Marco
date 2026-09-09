const botoes = document.querySelectorALL(".botao");

for (let i=0; i<botoes.lenght; i++){
    botoes[i] .onclick = function(){
        botoes[i].classlist.add("ativo");
    };
}