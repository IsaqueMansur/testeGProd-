google.load("visualization", "1", { packages: ["corechart"] });


const usuarios = [
    {usuario: 'adm', senha:'123'},
    {usuario: 'teste teste teste', senha: '123'}
];

const materiais = ['Nylon Poli', 'Termoencolhível Artflex', 'Pet Transparente'];

const folhaOuTubular = ['Folha', 'Tubular'];

const soldas = ['Fundo', 'Lateral']

const ops = [{
    op: 300001, 
    nomeServico: 'QUEIJO TIPO COALHO TESTE 1KG', 
    material: materiais[0],
    pigmento: 'Natural',
    espessura: 0.11, 
    tipoBobina: folhaOuTubular[1], 
    pesoImpresso: 320,
    largura: 160, 
    comprimento: 240, 
    tipoSolda: soldas[0], 
    quantidadeEmMilheiros: 40, 
    metros: 10560, 
    pistas: 1, 
    imagens: 2, 
    cilindro: 480,
    cores: ['branco', 'amarelo', 'magenta', 'cyan', 'p485', 'p355', , 'preto']},
    {
        op: 300002, 
        nomeServico: 'QUEIJO MUSSARELA TESTE 4KG', 
        material: materiais[1],
        pigmento: 'Natural',
        espessura: 0.09, 
        tipoBobina: folhaOuTubular[1], 
        pesoImpresso: 350,
        largura: 240, 
        comprimento: 460, 
        tipoSolda: soldas[0], 
        quantidadeEmMilheiros: 30, 
        metros: 15800, 
        pistas: 1, 
        imagens: 1, 
        cilindro: 460,
        cores: ['branco', 'amarelo', 'magenta', 'cyan', 'p485', , 'p021' , 'preto']},
];

document.querySelector(".container-tela-inicial").style.visibility = "hidden";
document.querySelector(".programacao").style.visibility = "hidden";
document.querySelector(".bobinas").style.visibility = "hidden";
document.querySelector("#botaoCriaBobina").style.visibility = "hidden";

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
    document.querySelector(".programacao").id = 'sobeFull';
}


//Programação

function nomeMaquina() {
    let x = document.querySelector('#tabelaProgramacao');
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
        let zero = '0';
        let pegaDiaI = diaI;
        if (diaI < 10) diaI = (zero + pegaDiaI);
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
    let x = document.querySelector('#tabelaProgramacao');
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
            pesoImp: op.pesoImpresso,
            pesoSeparado : 0,
            cliche: op.nomeServico,
            material: op.material,
            pigmento: op.pigmento,
            espessura: op.espessura,
            tipoBobina: op.tipoBobina,
            solda: op.tipoSolda,
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
            largura: op.largura,
            bobinas: [],
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
    let local = document.querySelector("#tabelaProgramacao");
    

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
            t.className = (ops[i]);
            if (ops[i] === undefined) {
                t.appendChild(document.createTextNode('Vázio'));
                tr.appendChild(t);
            } else {
                t.appendChild(document.createTextNode(ops[i]));
                tr.appendChild(t);
                bodyTabela.appendChild(tr);
            } 
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

//--------Final--------Programação

//Bobinas

function bobinas() {
    document.querySelector(".apontar-selecionado").style.visibility = "hidden";
    document.querySelector(".programacao").id = "desce1";
    document.querySelector(".bobinas").style.visibility = "visible";
    document.querySelector(".bobinas").id = "sobe2";
    document.querySelector(".container-tela-inicial").style.visibility = 'hidden';
    document.querySelector("#escopo").style.visibility = "hidden";
    document.querySelector(".criar-bobina").style.visibility = "hidden";
    document.querySelector(".apontar-bobina").style.visibility = "hidden";
    document.querySelector(".molde-etiqueta").style.visibility = "hidden";
    document.querySelector(".apontar-bobina").id = 'sobe3';
}

function fechaBobinas() {
    document.querySelector(".bobinas").style.visibility = "hidden";
    document.querySelector(".container-tela-inicial").style.visibility = 'visible';
    document.querySelector("#escopo").style.visibility = "visible";
    document.querySelector(".criar-bobina").style.visibility = "hidden";
    document.querySelector("#botaoCriaBobina").style.visibility = "hidden";
    document.querySelector("#selecionaLarguraBobina").value = null;
    document.querySelector("#selecionaEspessuraBobina").value = null;
    document.querySelector("#selecionaPesoBruto").value = null;
    document.querySelector("#selecionaTubete").value = null;
    document.querySelector(".peso-liquido-bobina-criada-valor").textContent = null;
    document.querySelector(".codigo-bobina-criada").textContent = null;
    document.querySelector(".molde-etiqueta").style.visibility = "hidden";
    document.querySelector(".apontar-bobina").style.visibility = "hidden";   
}

function criarBobina() {
    document.querySelector(".criar-bobina").style.visibility = "visible";
    document.querySelector(".apontar-bobina").id = null;
    document.querySelector(".apontar-bobina").style.visibility = "hidden";
    document.querySelector(".apontar-bobina").id = 'sobe3';
}

function fechaCriarBobinas() {
    document.querySelector(".criar-bobina").style.visibility = "hidden";
    document.querySelector("#botaoCriaBobina").style.visibility = "hidden";
    document.querySelector("#botaoCriaBobina").style.visibility = "hidden";
    document.querySelector("#selecionaLarguraBobina").value = null;
    document.querySelector("#selecionaEspessuraBobina").value = null;
    document.querySelector("#selecionaPesoBruto").value = null;
    document.querySelector("#selecionaTubete").value = null;
    document.querySelector(".peso-liquido-bobina-criada-valor").textContent = null;
    document.querySelector(".codigo-bobina-criada").textContent = null;
    document.querySelector(".molde-etiqueta").style.visibility = "hidden";
}

let listaBobinas = [];

function visualizarBob() {
    let local = document.querySelector(".informacoes-molde-direito");
    local.innerHTML = null;
    let larguraCriada = Number(document.querySelector("#selecionaLarguraBobina").value);
    if (larguraCriada < 10) {
        alert("Largura errada !!!");
        document.querySelector("#botaoCriaBobina").style.visibility = "hidden";
        document.querySelector("#selecionaLarguraBobina").value = null;
        return
    } else {
        let pesoBrutoCriado = Number(document.querySelector("#selecionaPesoBruto").value);
        let pesoTubeteCriado = Number(document.querySelector("#selecionaTubete").value);

        if (pesoTubeteCriado >= pesoBrutoCriado) {
            alert("Pesos não corretos !!! (peso bruto menor ou igual ao peso do tubete)");
            document.querySelector("#botaoCriaBobina").style.visibility = "hidden";
            document.querySelector("#selecionaTubete").value = null;
            document.querySelector("#selecionaPesoBruto").value = null;
            return
        } else {
            let pesoLiquido = (pesoBrutoCriado - pesoTubeteCriado);
            document.querySelector(".peso-liquido-bobina-criada-valor").textContent = pesoLiquido;  
            
            try {
                let achaUltimoCodBobina = listaBobinas[listaBobinas.length - 1].codigo;
                let codigoBobinaCriada = Number(achaUltimoCodBobina + 1);

                let codigoBobinaQr = `<img src ="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl=https://${codigoBobinaCriada}">`
                let localQrCode = document.querySelector(".qrCode");
                localQrCode.innerHTML = codigoBobinaQr;
                
                document.querySelector(".codigo-bobina-criada").textContent = codigoBobinaCriada;
                JsBarcode('#codBarras', codigoBobinaCriada);

                
                
            } catch {
                let codigoBobinaQr = `<img src ="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl=https://1000000000001">`
                let localQrCode = document.querySelector(".qrCode");
                localQrCode.innerHTML = codigoBobinaQr;
                document.querySelector(".codigo-bobina-criada").textContent = 1000000000001;
                JsBarcode('#codBarras', 1000000000001);
            }

            let materialN = document.createTextNode((document.querySelector("#tipoMaterialBobina").value));
            let larguraN = document.querySelector("#selecionaLarguraBobina").value;
            let espessuraN = document.querySelector("#selecionaEspessuraBobina").value;
            let pigmentoN = document.querySelector("#pigmentoMaterialBobina").value;
            let pesoBrutoN = document.querySelector("#selecionaPesoBruto").value;
            let pesoTubeteN = document.querySelector("#selecionaTubete").value;
            let pesoLiquidoN = document.querySelector(".peso-liquido-bobina-criada-valor").textContent;
            let codigoN = document.querySelector(".codigo-bobina-criada").textContent;
            let tipoN = document.querySelector("#folhaOuTubular").value;

            let p2 = document.createElement('p2');
            p2.className = 'materialExibidoCriacaoBobina';
            p2.appendChild(materialN);
            local.appendChild(p2);

            listaMostrarEtiqueta = [
                document.createTextNode(`Código: ${codigoN}`), 
                document.createTextNode(`Tipo: ${tipoN}`),
                document.createTextNode(`Largura: ${larguraN}mm`), 
                document.createTextNode(`Espessura: ${espessuraN}mm`),
                document.createTextNode(`Pigmento: ${pigmentoN}`), 
                document.createTextNode(`Peso bruto: ${pesoBrutoN} Kg's`), 
                document.createTextNode(`Peso tubete: ${pesoTubeteN} Kg's`),
                document.createTextNode(`Peso líquido: ${pesoLiquidoN} Kg's`)
            ];

            for (let i in listaMostrarEtiqueta) {
                let p = document.createElement('p');
                p.appendChild(listaMostrarEtiqueta[i]);
                local.appendChild(p);
            }
            document.querySelector(".molde-etiqueta").style.visibility = "visible";
            document.querySelector("#botaoCriaBobina").style.visibility = "visible";
        }
    }
    
}

function confirmaCriacaoBobina(listaBobinas) {
    let materialCriado = document.querySelector("#tipoMaterialBobina").value;
    let tipoCriado = document.querySelector("#folhaOuTubular").value;
    let larguraCriada = Number(document.querySelector("#selecionaLarguraBobina").value);
    let espessuraCriada = Number(document.querySelector("#selecionaEspessuraBobina").value);
    let pigmentoCriado = document.querySelector("#pigmentoMaterialBobina").value;
    let pesoBrutoCriado = Number(document.querySelector("#selecionaPesoBruto").value);
    let pesoTubeteCriado = Number(document.querySelector("#selecionaTubete").value);
    let pesoLiquidoCriado = Number(document.querySelector(".peso-liquido-bobina-criada-valor").textContent);
    let codigoCriado = Number(document.querySelector(".codigo-bobina-criada").textContent);

    let bobinaCriada = {
        material: materialCriado,
        tipo: tipoCriado, 
        largura: larguraCriada,
        espessura: espessuraCriada, 
        pigmento: pigmentoCriado , 
        pesoBruto: pesoBrutoCriado, 
        pesoTubete: pesoTubeteCriado, 
        pesoLiquido: pesoLiquidoCriado, 
        codigo: codigoCriado,
        disponivel: pesoLiquidoCriado,
        usadaPor: []
    };

    listaBobinas.push(bobinaCriada)
    document.querySelector("#botaoCriaBobina").style.visibility = "hidden";
    document.querySelector("#selecionaEspessuraBobina").value = null;
    document.querySelector("#selecionaLarguraBobina").value = null;
    document.querySelector("#selecionaPesoBruto").value = null;
    document.querySelector("#selecionaTubete").value = null;
    document.querySelector(".peso-liquido-bobina-criada-valor").textContent = null;
    document.querySelector(".codigo-bobina-criada").textContent = null;
    document.querySelector(".molde-etiqueta").style.visibility = "hidden";
}

function apontaBobina() {
    document.querySelector(".apontar-bobina").style.visibility = "visible";
    document.querySelector(".criar-bobina").style.visibility = "hidden"
    document.querySelector("#botaoCriaBobina").style.visibility = "hidden";
    document.querySelector("#selecionaEspessuraBobina").value = null;
    document.querySelector("#selecionaLarguraBobina").value = null;
    document.querySelector("#selecionaPesoBruto").value = null;
    document.querySelector("#selecionaTubete").value = null;
    document.querySelector(".peso-liquido-bobina-criada-valor").textContent = null;
    document.querySelector(".codigo-bobina-criada").textContent = null;
    document.querySelector(".molde-etiqueta").style.visibility = "hidden";
    document.querySelector(".apontar-bobina").id = 'sobe3';
}

function nomeMaquinaBobina() {
    let x = document.querySelector('#tabelaProgramacao-apontar-bobina');
    x.innerHTML = '<div><div>'
    let maquinaSelecionada = document.querySelector("#maquina-apontar-bobina").value;
    let indiceMaquina = null;

    if (maquinaSelecionada === 'IMP-01') indiceMaquina = 0;
    if (maquinaSelecionada === 'IMP-02') indiceMaquina = 1;
    if (maquinaSelecionada === 'IMP-03') indiceMaquina = 2;
    criaTabelaApontarBobinas(indiceMaquina);      
}
let listaTabApontarBobinas = ['Selecionar', 'Material', 'Pigmento', 'Esp.', 'Largura.', 'Comp.', 'Tipo', 'Tipo Solda', 'Kgs', 'OP', 'Clichê', 'Data Inicio', 'Hora inicio', 'Data Final', 'Hora final'];

function criaTabelaApontarBobinas(indiceMaquina) {
    var listaProg = [];
    let tabela = document.createElement('table');
    let headTabela = document.createElement('thead');
    let bodyTabela = document.createElement('tbody');
    let trTabela = document.createElement('tr');
    let local = document.querySelector("#tabelaProgramacao-apontar-bobina");

    for (let i = 0; i < listaTabApontarBobinas.length; i++) {
        let texto = document.createTextNode(listaTabApontarBobinas[i]);
        let t = document.createElement('th');
        t.appendChild(texto);
        trTabela.appendChild(t);
        headTabela.appendChild(trTabela);
    }  

    for (let i = 0; i < maquinasProg[indiceMaquina].length; i++) { 
        var tr = document.createElement('tr');  
        let th = document.createElement("th");
        let botao = document.createElement('button')
        botao.id = 'botao' + maquinasProg[indiceMaquina][i];
        botao.name = botao.id
        botao.textContent = `Posi: ${[i +1]}`;
        botao.value = maquinasProg[indiceMaquina][i];
        botao.onclick = () => abrirApontamento(maquinasProg[indiceMaquina][i].op);
        th.appendChild(botao);
        tr.appendChild(th);

        listaProg.push({
            material: maquinasProg[indiceMaquina][i].material,
            pigmento: maquinasProg[indiceMaquina][i].pigmento,
            espessura: maquinasProg[indiceMaquina][i].espessura,
            largura: maquinasProg[indiceMaquina][i].largura,
            comprimento: maquinasProg[indiceMaquina][i].comprimento,
            tipoBobina: maquinasProg[indiceMaquina][i].tipoBobina,
            solda: maquinasProg[indiceMaquina][i].solda,
            pesoImp: maquinasProg[indiceMaquina][i].pesoImp,
            op: maquinasProg[indiceMaquina][i].op,
            cliche: maquinasProg[indiceMaquina][i].cliche,
            dtI: maquinasProg[indiceMaquina][i].dtI,
            hrI: maquinasProg[indiceMaquina][i].hrI,
            dtF: maquinasProg[indiceMaquina][i].dtF,
            hrF: maquinasProg[indiceMaquina][i].hrF
        });

        for(let i in listaProg) {
            let ops = [
                listaProg[i].material, 
                listaProg[i].pigmento, 
                listaProg[i].espessura,
                listaProg[i].largura,
                listaProg[i].comprimento,
                listaProg[i].tipoBobina,
                listaProg[i].solda,
                listaProg[i].pesoImp,
                listaProg[i].op,
                listaProg[i].cliche,
                listaProg[i].dtI,
                listaProg[i].hrI,
                listaProg[i].dtF,
                listaProg[i].hrF
            ];

            for (let i = 0; i < ops.length; i++) {
                let td = document.createElement("th");
                td.appendChild(document.createTextNode(ops[i]));
                tr.appendChild(td)
                bodyTabela.appendChild(tr);                  
            } 
            listaProg = [];
        }
    }            
    tabela.className = 'TabelaProg-x'
    tabela.appendChild(headTabela);
    tabela.appendChild(bodyTabela);
    local.appendChild(tabela);
}

let achaOp;
let indexMaquina;

function abrirApontamento(op) {
    document.querySelector(".molde-etiqueta-apontar").style.visibility = "hidden";
    document.querySelector(".bobinas").style.visibility = "hidden";
    document.querySelector(".apontar-bobina").style.visibility = "hidden";
    document.querySelector(".apontar-selecionado").style.visibility = "visible";
    let maquinaSelecionada = document.querySelector("#maquina-apontar-bobina").value;
    if (maquinaSelecionada === 'IMP-01') indexMaquina = 0;
    if (maquinaSelecionada === 'IMP-02') indexMaquina = 1;
    if (maquinaSelecionada === 'IMP-03') indexMaquina = 2;

    achaOp = (maquinasProg[indexMaquina]).find((ordem) => ordem.op == op);
    indexOp = (maquinasProg[indexMaquina]).findIndex((ordem) => ordem.op == achaOp.op);
    
    let listaPush = [
        ('Clichê: ' + achaOp.cliche),
        ('O.P.: ' + achaOp.op), 
        ('Material: ' + achaOp.material), 
        ('Pigmento: ' + achaOp.pigmento),
        ('Solda: ' + achaOp.solda), 
        ('Largura: ' + achaOp.largura + 'mm'),
        ('Comprimento: ' + achaOp.comprimento + 'mm'), 
        ('Espessura: ' + achaOp.espessura + 'mm'),
        ('Tipo: ' + achaOp.tipoBobina), 
        ('Peso a separar: ' + achaOp.pesoImp + "Kg's")
    ];

    let local = document.querySelector(".fixos-apontar-bobina");

    for (let i in listaPush) {
        let p = document.createElement("p");
        let puxar = document.createTextNode(listaPush[i]);
        p.appendChild(puxar)
        local.appendChild(p);
    }
    desenharGraficoApontamento(
        (maquinasProg[indexMaquina][indexOp].pesoImp), 
        (maquinasProg[indexMaquina][indexOp].pesoSeparado),
        ((maquinasProg[indexMaquina][indexOp].pesoImp) - (maquinasProg[indexMaquina][indexOp].pesoSeparado))
        );
}

let volumeDigitado;
let bobinaDigitada;
let usarDigitado;
let indexOp;

function visualizarEtiquetaApontada() {

    document.querySelector(".molde-etiqueta-apontar").style.visibility = "visible";
    
    volumeDigitado = Number(document.querySelector("#volumes").value);
    bobinaDigitada = Number(document.querySelector("#apontou").value);
    usarDigitado = Number(document.querySelector("#pesoUtilizado").value);
    let indexBobina = listaBobinas.findIndex((bob) => bob.codigo == bobinaDigitada);
    if (indexBobina === -1 || ! Number) {
        alert("Bobina inexistente !!!");
        return;
    }else {
        maquinasProg[indexMaquina][indexOp].bobinas.push('v');
        document.querySelector("#cliche-apontar-selecioado").textContent = achaOp.cliche;
        document.querySelector("#op-apontar-selecioado").textContent = achaOp.op;
        document.querySelector("#material-apontar-selecioado").textContent = listaBobinas[indexBobina].material;
        document.querySelector("#largura-apontar-selecioado").textContent = `L.: ${listaBobinas[indexBobina].largura}`;
        document.querySelector("#espessura-apontar-selecioado").textContent = `E.: ${listaBobinas[indexBobina].espessura}`;
        document.querySelector("#pigmento-apontar-selecioado").textContent = `Pigmento: ${listaBobinas[indexBobina].pigmento}`;
        document.querySelector("#tipo-apontar-selecioado").textContent = `Bob. tipo: ${listaBobinas[indexBobina].tipo}`;
        document.querySelector("#pesoBobina-apontar-selecioado").textContent = `Peso bobina: ${listaBobinas[indexBobina].pesoLiquido} Kg's`;
        document.querySelector("#pesoSeparado-apontar-selecioado").textContent = `Peso separado: ${usarDigitado} Kg's`;

        
        numeroBobinaAtual = maquinasProg[indexMaquina][indexOp].bobinas.length;
        
        let volumesOk = `VOL.: ${numeroBobinaAtual}/${volumeDigitado}`;

        document.querySelector("#volume-apontar-selecioado").textContent = volumesOk;


        JsBarcode('#codBarras-apontar', bobinaDigitada);
    }


}

function confirmarApontamento() {  
    document.querySelector(".molde-etiqueta-apontar").style.visibility = "hidden";
    

    for (let i of maquinasProg[indexMaquina][indexOp].bobinas) {
        index = (maquinasProg[indexMaquina][indexOp].bobinas).findIndex((bob) => bob.bobinas == 'v');
        maquinasProg[indexMaquina][indexOp].bobinas.pop(index);
    }
    let bobinaApontada = Number(document.querySelector("#apontou").value);
    maquinasProg[indexMaquina][indexOp].pesoSeparado += usarDigitado;
    maquinasProg[indexMaquina][indexOp].bobinas.push(bobinaApontada);

    desenharGraficoApontamento(
        (maquinasProg[indexMaquina][indexOp].pesoImp), 
        (maquinasProg[indexMaquina][indexOp].pesoSeparado),
        ((maquinasProg[indexMaquina][indexOp].pesoImp) - (maquinasProg[indexMaquina][indexOp].pesoSeparado))
        );

    if (maquinasProg[indexMaquina][indexOp].bobinas.length === volumeDigitado) {
        document.querySelector("#volumes").value = null;
        alert("Todos os volumes separados !!!");
    }
    document.querySelector("#apontou").value = null;
    document.querySelector("#pesoUtilizado").value = null;
}

function fecharApontarSelecionado() {
    document.querySelector(".bobinas").style.visibility = "visible";
    document.querySelector(".apontar-bobina").style.visibility = "visible";
    document.querySelector(".apontar-selecionado").style.visibility = "hidden";
    document.querySelector(".fixos-apontar-bobina").textContent = null;
}

function desenharGraficoApontamento(solicitado, separado, faltam) {
  let barData = google.visualization.arrayToDataTable([
    ["status", "Solicitado", "Separado", "Faltam"],
    ["Quilos", solicitado, separado, faltam]
  ]);
  // set bar chart options
  var barOptions = {
      focusTarget: "category",
      backgroundColor: "transparent",
      colors: ["rgb(47, 255, 116)", "rgb(35, 99, 62)", "red"],
      fontName: 'Verdana',
      chartArea: {
      left: 50,
      top: 10,
      width: "90%",
      height: "70%"
    },
    bar: {
      groupWidth: "60%"
    },
    hAxis: {
      textStyle: {
      fontSize: 11
      }
    },
    vAxis: {
      minValue: 0,
      maxValue: 0,
      baselineColor: "rgb(35, 99, 62)",
      gridlines: {
      color: "rgb(107, 146, 197)",
      count: 4
      },
      textStyle: {
      fontSize: 11
      }
    },
    legend: {
      position: "bottom",
      textStyle: {
      fontSize: 12
      }
    },
    animation: {
      duration: 1200,
      easing: "out",
      startup: true
    }
  };
  // draw bar chart twice so it animates
  var barChart = new google.visualization.ColumnChart(
    document.getElementById("grafico-apontamento")
  );
  //barChart.draw(barZeroData, barOptions);
  barChart.draw(barData, barOptions);
}
