const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const tituloProduto = document.getElementById('titulo-produto')
const nomeCor = document.getElementById('nome-cor-selecionada')
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura')
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura')
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura')

//OBjetos ou (variaveis, ja que var não é mais usado o cosnt e let vieram para substituilos)
const azulInverno = {
    nome: ' Azul-inverno',
    pasta: 'imagens-azul-inverno'
};
//estamos armazenando dentro de um objeto com nome estelar informações como nome e pasta.
// imagine isso como se voçê pegasse folhas de documentos específicos e os guardasse dentro de uma pasta para depois utiliza-las.
const estelar = {
    nome: ' Estelar',
    pasta: 'imagens-estelar'
};

const  meiaNoite = {
    nome: ' Meia-noite',
    pasta: 'imagens-meia-noite'
};

const rosaClaro = {
    nome: ' Rosa-claro',
    pasta: 'imagens-rosa-claro'
};

const verdeCipreste = {
    nome: ' Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

// aqui criamos um array ou lista com os nomes dos objetos acima.
// interprete isso como se pegassemos as pastas ditas anteriormente e as armazenasemos em uma gaveta.
// temos agora uma gaveta com pastas onde cada pasta armazena suas proprias informações.
const opcoesCores = [verdeCipreste, azulInverno,meiaNoite,estelar,rosaClaro];
const opcoesTamanho = [' 41 mm', ' 45 mm'];
//opcoesCores[2] assim pegariamos uma dessas pastas da gaveta no caso a pasta 2,e junto da pasta todas suas informações, sendo assim, teriamos a cor meianoite pq sempre consideramos o primeiro numero como 0
//meiaNoite.nome assim pegariamos a informação NOME armazenada dentro da pasta somente

//valor dos botões que vai corresponder a algum intem na lista array q por sua vez vai corresponder a algum objeto ou string
let imagemSelecionada =1;
let tamanhoSelecionado = 1;
let corSelecionada =1;

//document.getelementbyid serve para buscar um elemento pelo id
//já o queryselector serve para selecionar o elemento ou oq do elemento deseja buscar
function trocarImagem(){
    //pega o id
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    //charAt(0) pega o primeiro elemento do id
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    //atualiza a imagem pela imagem clicada 
    imagemVisualizacao.src = './imagens/opcoes-cores/' +opcoesCores[corSelecionada].pasta +'/imagem-'+imagemSelecionada+'.jpeg';
}

function trocarTamanho(){
    //pega o id
    const idOpcaoTamanho = document.querySelector('[name="opcao-tamanho"]:checked').id;
    //charAt(0) pega o primeiro elemento do id
    tamanhoSelecionado = idOpcaoTamanho.charAt(0);
    //atualiza a descrição do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[ corSelecionada].nome+ " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //mudar tamanho da imagem junto da cor ou seja add uma nova formatação para a imagem sem mudar a imagem somente seu tamanho usando css
    if (opcoesTamanho[tamanhoSelecionado] === ' 41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
         imagemVisualizacao.classList.remove('caixa-pequena');   
    }
}

function trocarCor() {
    //atualizar cor selecionada
    const idOpcaoCor = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoCor.charAt(0);
    //troca titulo
    //na primeira vez q fiz apareceu [object , object] no site isso aconteceu pq peguei a pasta inteira ou o objeto inteiro em vez de somente o item nome! pq so botei  opcoesCores[corSelecionada] 
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome+ " para caixa de  " + opcoesTamanho[tamanhoSelecionado];
    //troca nome da cor
    nomeCor.innerText = 'Cor -' + opcoesCores[corSelecionada].nome;
    //troca imagens em miniaturas
    miniaturaImagem0.src = './imagens/opcoes-cores/' +opcoesCores[corSelecionada].pasta +'/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' +opcoesCores[corSelecionada].pasta +'/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' +opcoesCores[corSelecionada].pasta +'/imagem-2.jpeg';
    //troca imagem de visualização
    imagemVisualizacao.src = './imagens/opcoes-cores/' +opcoesCores[corSelecionada].pasta +'/imagem-'+imagemSelecionada+'.jpeg';
}