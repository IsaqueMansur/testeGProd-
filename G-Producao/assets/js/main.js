const usuarios = [
    {usuario: 'adm', senha:'123'},
    {usuario: 'teste teste teste', senha: '123'}
];

const materiais = ['Nylon Poli', 'Termoencolhível Artflex', 'Pet Transparente'];

const folhaOuTubular = ['Folha', 'Tubular'];

const soldas = ['Fundo', 'Lateral']

const ops = 
[{op: 300001, nomeServico: 'MUSSARELA MUSSARELA MUSSARELA MUSSARELA MUSSARELA MUSSARELA', material: materiais[2], tipoBobina: folhaOuTubular[0], pesoImpresso: 200,
    largura: 740, comprimento: 180, tipoSolda: soldas[1], quantidadeEmMilheiros: 5, metros: 648000, pistas: 2, imagens: 3, cilindro: 54,
    cores: ['branco', 'amarelo', 'magenta', 'cyan', 'p485', 'preto']},

    {op: 300002, nomeServico: 'REQUEIJÃO REQUEIJÃO REQUEIJÃO REQUEIJÃO REQUEIJÃO REQUEIJÃO REQUEIJÃO', material: materiais[2], tipoBobina: folhaOuTubular[0], pesoImpresso: 200,
    largura: 740, comprimento: 180, tipoSolda: soldas[1], quantidadeEmMilheiros: 5, metros: 648000, pistas: 2, imagens: 3, cilindro: 54,
    cores: ['branco', 'amarelo', 'magenta', 'cyan', 'p485', 'preto']}

];

/* console.log(ops[0].cores[3]); */ /* acessa as cores pelo index */


document.querySelector(".container-tela-inicial").style.visibility = "hidden";
document.querySelector(".programacao").style.visibility = "hidden";

const pegaErroUsuario = document.querySelector("#erroUsuario");
const erroUsuario = "<div class='erro1' id='erroUsuario'>Usuário incorreto</div>"
const vazio = null;

const pegaErroSenha = document.querySelector("#erroSenha");
const erroSenha = "<div class='erro1' id='erroSenha'>Senha incorreta</div>";

const form = document.querySelector('#formulario');
form.addEventListener('submit', function(e) {
    e.preventDefault();
});

function adm(usuarios) {
    usuario.value = "adm"
    senha.value = "123"
    login(usuarios);   
}

function login(usuarios) {
      
    const usuario = document.querySelector("#usuario").value;
    const senha = document.querySelector("#senha").value;

    const achaUsuario = usuarios.find((user) => user.usuario == usuario);
    const indexUsuario = usuarios.indexOf(achaUsuario);

    if (achaUsuario == undefined) {
        pegaErroUsuario.innerHTML = erroUsuario;
        pegaErroSenha.innerHTML = "";
        return
    } else {
        pegaErroUsuario.innerHTML = "";
    }

    const avaliaSenha = usuarios[indexUsuario].senha;

    if (senha != (avaliaSenha)) {
        pegaErroSenha.innerHTML = erroSenha;
        return
    } else {
        const nomeUsuario = (achaUsuario.usuario);
        pegaErroSenha.innerHTML = "";
        form.innerHTML = vazio;
        escopoPrincipal(nomeUsuario, indexUsuario);
        const bV = document.querySelector('h1');
        document.querySelector('.container').style.visibility = 'hidden';
        document.querySelector(".container-tela-inicial").style.visibility = "visible";
        bV.innerHTML = vazio;
        return usuario, indexUsuario;
    }
}


const escopo = document.querySelector('#escopo');
escopo.addEventListener('submit', function(e){
    e.preventDefault();
    });
function escopoPrincipal(usuario, indexUsuario) {
    document.querySelector("#escopo").style.visibility = "visible";
    document.querySelector("#nomeUsuario").textContent = `Usuário: ${usuario}`;
}

function programacao() {
    document.querySelector(".maquina-programacao").style.visibility = "hidden";
    document.querySelector(".programacao").style.visibility = "visible";
    document.querySelector(".programacao").id = "sobe1";
    document.querySelector(".container-tela-inicial").style.visibility = 'hidden';
    document.querySelector("#escopo").style.visibility = "hidden";
}

function fechaProgramacao() {
    document.querySelector(".maquina-programacao").style.visibility = "hidden";
    document.querySelector(".programacao").style.visibility = "hidden";
    document.querySelector(".container-tela-inicial").style.visibility = 'visible';
    document.querySelector("#escopo").style.visibility = "visible";
}



function nomeMaquina() {
    let x = document.querySelector('#teste');
    x.innerHTML = '<div><div>'


    let maquina = document.querySelector("#maquina-selecionada").value;

    let nomeMaq = null;
    
    const maquinas = [
        {nome: 'Comexi 1', velocidadeMedia: 150},
        {nome: 'Comexi 2', velocidadeMedia: 150},
        {nome: 'Comexi 3', velocidadeMedia: 130}
];

    if (maquina === 'IMP-03') nomeMaq = maquinas[2];
    if (maquina === 'IMP-02') nomeMaq = maquinas[1];
    if (maquina === 'IMP-01') nomeMaq = maquinas[0];

    maquinaProgramacao(maquinas, usuarios, materiais, folhaOuTubular, soldas, ops, nomeMaq);

    let maquinaA = document.querySelector("p1").textContent;
        let i = null;
        if (maquinaA === 'Impressora: Comexi 3') i = 2;
        if (maquinaA === 'Impressora: Comexi 2') i = 1;
        if (maquinaA === 'Impressora: Comexi 1') i = 0;
        listaOps = [];

        for (var o = 0; o < maquinasProg[i].length; o++) {
            listaOps.push(maquinasProg[i][o]);
        }
        criaTabela(listaTab, listaOps)
}


function maquinaProgramacao(maquinas, usuarios, materiais, folhaOuTubular, soldas, ops, nomeMaq) {
    const usuario = document.querySelector("#nomeUsuario").textContent;
    const nomeUsuario = usuario.substr(9);
    document.querySelector("#usuario-programacao").textContent = `Usuário: ${nomeUsuario}`;


    document.querySelector(".maquina-programacao").style.visibility = "visible";
    document.querySelector("p1").textContent = `Impressora: ${nomeMaq.nome}`;
    document.querySelector("#velocidade-op").value = nomeMaq.velocidadeMedia; 
}

function confirmaOp(ops, alterarMetros) {

    if (listaOps.length === 0) {

        let opDigitada = Number(document.querySelector("#inclui-op").value);
        let op = ops.find((numeroOp) => numeroOp.op === opDigitada);
        if (op === undefined) {
            alert('Op_Errada')
        } else {
        document.querySelector(".nomeServico").textContent = `Clichê: ${op.nomeServico}`;
        document.querySelector("#metragem-op").value = alterarMetros || op.metros;

        let velocidadeMedia = Number(document.querySelector("#velocidade-op").value);
        let tempoSetup = 60;

        let minutosGastosImpressao = ((alterarMetros || op.metros)/velocidadeMedia + tempoSetup);


        let dataI = new Date();
        let anoI = dataI.getFullYear();
        let mesI = dataI.getMonth() + 1;
        let diaI = dataI.getDate();
        let dataOkI = `${anoI}-${mesI}-${diaI}`;
        document.querySelector("#data-inicio-op").value = dataOkI;

        let horaI = Number(dataI.getHours());
        let minutoI = Number(dataI.getMinutes());
        let minutoIOk = minutoI;
        if (minutoI < 10) minutoIOk = `${0}${minutoI}`;
        if (horaI < 10) horaI = `${0}${horaI}`;
        let horaOkI = null || `${horaI}:${minutoIOk}`;
        document.querySelector("#hora-inicio-op").value = horaOkI;
               
        let minhaData = moment(`${anoI}/${mesI}/${diaI} ${horaI}:${minutoI}`, "YYYY/M/DD h:m").add('minutes', minutosGastosImpressao).locale("pt").format('L');
        let minhaHora = moment(`${anoI}/${mesI}/${diaI} ${horaI}:${minutoI}`, "YYYY/M/DD h:m").add('minutes', minutosGastosImpressao).locale("pt").format('LT');

        let diaTerm = minhaData.substr(0, 2);
        let mesTerm = minhaData.substr(3, 2);
        let anoTerm = minhaData.substr(6, 4);
        minhaData= (anoTerm +'-'+ mesTerm +'-'+ diaTerm);
   
        document.querySelector("#data-termino-op").value = minhaData;
        document.querySelector("#hora-termino-op").value = minhaHora;

        document.querySelector(".comprimento-op").textContent = `Comprimento: ${op.comprimento}mm`;
        document.querySelector(".largura-op").textContent = `Largura: : ${op.largura}mm`;
        document.querySelector(".peso-impresso-op").textContent = `Peso imp: ${op.pesoImpresso}Kg's`;
        document.querySelector(".material-op").textContent = `Material Imp.: ${op.material}`;
     }

    } else {
        let lengthDaLista = listaOps.length;
        horaIPos = listaOps[lengthDaLista - 1].hrF;
        dataIPos = listaOps[lengthDaLista - 1].dtF;

        document.querySelector("#hora-inicio-op").value = horaIPos;
        document.querySelector("#data-inicio-op").value = dataIPos;

        let opDigitada = Number(document.querySelector("#inclui-op").value);
        let op = ops.find((numeroOp) => numeroOp.op === opDigitada);
        if (op === undefined) {
            alert('Op_Errada')
        } else {
        document.querySelector(".nomeServico").textContent = `Clichê: ${op.nomeServico}`;
        document.querySelector("#metragem-op").value = alterarMetros || op.metros;

        let velocidadeMedia = Number(document.querySelector("#velocidade-op").value);
        let tempoSetup = 60;
        let minutosGastosImpressao = ((alterarMetros || op.metros)/velocidadeMedia + tempoSetup);

        
        let minhaData = moment(`${dataIPos} ${horaIPos}`, "YYYY/M/DD h:m").add('minutes', minutosGastosImpressao).locale("pt").format('L');
        let minhaHora = moment(`${dataIPos} ${horaIPos}`, "YYYY/M/DD h:m").add('minutes', minutosGastosImpressao).locale("pt").format('LT');
        let diaTerm = minhaData.substr(0, 2);
        let mesTerm = minhaData.substr(3, 2);
        let anoTerm = minhaData.substr(6, 4);
        minhaData= (anoTerm +'-'+ mesTerm +'-'+ diaTerm);
        document.querySelector("#data-termino-op").value = minhaData;
        document.querySelector("#hora-termino-op").value = minhaHora;  

        document.querySelector(".comprimento-op").textContent = `Comprimento: ${op.comprimento}mm`;
        document.querySelector(".largura-op").textContent = `Largura: : ${op.largura}mm`;
        document.querySelector(".peso-impresso-op").textContent = `Peso imp: ${op.pesoImpresso}Kg's`;
        document.querySelector(".material-op").textContent = `Material Imp.: ${op.material}`;
        }
    }

          
}

function alteraMetros(ops) {
    let alterarMetros = Number(document.querySelector("#metragem-op").value);
    confirmaOp(ops, alterarMetros);
}

function admProgramacao() {
    nomeMaquina();
    document.querySelector("#inclui-op").value = 300001;
    confirmaOp(ops);
}

let listaOps = [];

let maquinasProg = [[],[],[]];

function programarOp(ops) {
    listaOps = [];
    let x = document.querySelector('#teste');
    x.innerHTML = '<div><div>'

    let info = document.querySelector("#inclui-op").value;
    let op = ops.find((numeroOp) => numeroOp.op == info);

    if (op === undefined) {
        alert('op não existe');
        criaTabela(listaTab, listaOps)
        return
    } else {
        let dataI = document.querySelector("#data-inicio-op").value;
        let horaI = document.querySelector("#hora-inicio-op").value;
        let dataF = document.querySelector("#data-termino-op").value;
        let horaF = document.querySelector("#hora-termino-op").value;

        let opProgramada = {
            op: op.op, 
            cliche: op.nomeServico, 
            c1: op.cores[0], 
            c2: op.cores[1], 
            c3: op.cores[2], 
            c4: op.cores[3], 
            c5: op.cores[4], 
            c6: op.cores[5], 
            c7: op.cores[6], 
            c8: op.cores[7], 
            dtI: dataI, 
            hrI: horaI, 
            dtF: dataF, 
            hrF: horaF, 
            comprimento: op.comprimento, 
            largura: op.largura
        };
   
    
        let maquina = document.querySelector("p1").textContent;
        let i = null;
        if (maquina === 'Impressora: Comexi 3') i = 2;
        if (maquina === 'Impressora: Comexi 2') i = 1;
        if (maquina === 'Impressora: Comexi 1') i = 0;

        (maquinasProg[i]).push(opProgramada);

        for (var o = 0; o < maquinasProg[i].length; o++) {
            listaOps.push(maquinasProg[i][o]);
        }
        criaTabela(listaTab, listaOps)
    }
}


listaTab = ['OP', 'Clichê', 'C1','C2','C3','C4','C5','C6','C7','C8', 'Data Inicio', 'Hora inicio', 'Data Final', 'Hora final', 'Comp.', 'Larg.'];


function criaTabela(listaTab, listaOps) {
    var listaProg = [];
    let tabela = document.createElement('table');
    let headTabela = document.createElement('thead');
    let bodyTabela = document.createElement('tbody');
    let trTabela = document.createElement('tr');
    let local = document.querySelector("#teste");
    

    for (let i = 0; i < listaTab.length; i++) {
        let texto = document.createTextNode(listaTab[i]);
        let t = document.createElement('th');
        t.appendChild(texto);
        trTabela.appendChild(t);
        headTabela.appendChild(trTabela);
    }

    for (let i in listaOps) {
            listaProg.push([
                listaOps[i].op, listaOps[i].cliche, listaOps[i].c1, listaOps[i].c2, listaOps[i].c3, listaOps[i].c4, listaOps[i].c5
                , listaOps[i].c6, listaOps[i].c7, listaOps[i].c8, listaOps[i].dtI, listaOps[i].hrI, listaOps[i].dtF, listaOps[i].hrF, 
                listaOps[i].comprimento, listaOps[i].largura
            ]);

    }
    for (let i in listaProg) {
        let tr = document.createElement('tr');
        let ops = [
            listaProg[i][0], listaProg[i][1], listaProg[i][2], listaProg[i][3], listaProg[i][4], listaProg[i][5]
           , listaProg[i][6], listaProg[i][7], listaProg[i][8], listaProg[i][9], listaProg[i][10], listaProg[i][11]
           , listaProg[i][12], listaProg[i][13], listaProg[i][14], listaProg[i][15]
        ];
        
        for (let i in ops) {
            let t = document.createElement('th');
            t.appendChild(document.createTextNode(ops[i]));
            tr.appendChild(t);
            bodyTabela.appendChild(tr); 
        }                
    }
    tabela.className = 'TabelaProg'
    tabela.appendChild(headTabela);
    tabela.appendChild(bodyTabela);
    local.appendChild(tabela);

    document.querySelector('#inclui-op').value = null;
    document.querySelector('#metragem-op').value = null;
    document.querySelector('#data-inicio-op').value = null;
    document.querySelector('#hora-inicio-op').value = null;
    document.querySelector('#data-termino-op').value = null;
    document.querySelector('#hora-termino-op').value = null;
    document.querySelector('.comprimento-op').textContent = 'Comprimento:';
    document.querySelector('.largura-op').textContent = 'Largura:';
    document.querySelector('.peso-impresso-op').textContent = 'Peso Imp.:';
    document.querySelector('.material-op').textContent = 'Material Imp.:';
    document.querySelector('.nomeServico').textContent = 'Clichê:'
}
criaTabela(listaTab, listaOps);