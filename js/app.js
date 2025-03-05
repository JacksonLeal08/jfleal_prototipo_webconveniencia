$(document).ready(function  () {
    cardapio.eventos.init();
});

var cardapio = {};

cardapio.eventos = {

    init: () => {
        // console.log('iniciou')
        cardapio.metodos.obterItensCardapio();
    }

};

cardapio.metodos = {

    // Obtem lista de itens do cardápio
    obterItensCardapio: () => {

        var filtro = MENU['burgers'];
        console.log(filtro)

        $.each(filtro, (i, e) => {

            let temp = cardapio.templates.item.replace(/\${img}/g, e.img)
            .replace(/\${name}/g, e.name)
            .replace(/\${price}/g, e.price.toFixed(2).replace('.', ','))

            $("#itensCardapio").append(temp)


        })
    }
//     obterItensCardapio: (categoria = 'burgers', vermais = false) => {

//         var filtro = MENU[categoria];
//         // console.log(filtro);

//         if (!vermais) {
//             $("#itensCardapio").html('')
//             $("#btnVerMais").removeClass('hidden');
//         }

//         $.each(filtro, (i, e) => {
            
//             let temp = cardapio.templates.item.replace(/\${img}/g, e.img)
//             .replace(/\${name}/g, e.name)
//             .replace(/\${price}/g, e.price.toFixed(2).replace('.', ','))
//             .replace(/\${id}/g, e.id)
//             //Substituindo o ponto na descrição do preço para virgula e fixando duas casas decimais "(".toFixed(2).replace('.', ','))".

//             // Botão ver mais ao clicar exibir (12 itens)
//             if (vermais && i >= 8 && i < 12) {
//                 $("#itensCardapio").append(temp)
//             }

//             // Paginação Inicial (8 itens)
//             if (!vermais && i < 8) {
//                 $("#itensCardapio").append(temp)
//             }

//         })

//         // Remover o atributo "Active"
//         $(".container-menu a").removeClass('active');

//         // Seta Menu para o ativo
//         $("#menu-" + categoria).addClass('active')
//     },

//     // Função de Click do Botão Ver Mais e oculta-lo
//     verMais: () => {
        
//         var ativo = $(".container-menu a.active").attr('id').split('menu-')[1]; //atributo "split", quebra o nome onde especificarmos entre aspas simples
//         cardapio.metodos.obterItensCardapio(ativo, true);

//         $("#btnVerMais").addClass('hidden');
//     },

//     // Diminuir quantidade de itens no pedido do cardápio
//     diminuirQuantidade: (id) => {

//     let qntdAtual = parseInt($("#qntd-" + id).txt());

//     if (qntdAtual > 0) {
//         $("#qntd-" + id).txt(qntdAtual - 1)
//     }

//     },

//     // Aumentar quantidade de itens no pedido do cardápio
//     aumentarQuantidade: (id) => {

//         let qntdAtual = parseInt($("#qntd-" + id).txt());
//         $("#qntd-" + id).txt(qntdAtual + 1)

//     }

};

// Exibir itens do cardápio alternando entre imagem, nome e preços.
cardapio.templates = {

    item: `
        <div class="col-3 mt-5">
            <div class="card card-item" id="\${id}">
                <div class="img-produto">
                    <img src="\${img}"/>
                </div>
                <p class="title-produto text-center mt-4">
                    <b><i>\${name}</i></b>
                </p>
                <p class="price-produto text-center">
                    <b>R$: \${price}</b>
                </p>
                <!--Classe configuração dos botões de compra produtos-->
                <div class="add-carrinho">
                    <span class="btn-menos" onclick="cardapio.metodos.diminuirQuantidade('\${id}')><i class="fas fa-minus"></i></span>
                    <span class="add-numero-itens" id="qntd-\${id}">0</span>
                    <span class="btn-mais" onclick="cardapio.metodos.aumentarQuantidade('\${id}')><i class="fas fa-plus"></i></span>
                    <span class="btn btn-add"><i class="fa fa-shopping-bag"></i></span>
                </div>
            </div>
        </div>
    `
};