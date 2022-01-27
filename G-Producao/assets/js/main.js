const usuarios = [
    {usuario: 'adm', codigo: 1, senha:'123'},
    {usuario: 'teste teste teste', codigo: 2, senha: '123'}
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
    cores: ['branco', 'amarelo', 'magenta', 'cyan', 'p485', 'p355', '', 'preto']},
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
        cores: ['branco', 'amarelo', 'magenta', 'cyan', 'p485', '', 'p021' , 'preto']},
        {
            op: 300003, 
            nomeServico: 'QUEIJO PRATO TESTE 3KG', 
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
            cores: ['branco', 'amarelo', 'magenta', 'cyan', 'p485', '', 'p021' , 'p871']},
];

document.querySelector(".container-tela-inicial").style.visibility = "hidden";
document.querySelector(".programacao").style.visibility = "hidden";
document.querySelector(".bobinas").style.visibility = "hidden";
document.querySelector("#botaoCriaBobina").style.visibility = "hidden";
document.querySelector(".impressao").style.display = "none";
document.querySelector(".resultados").style.display = "none";

const pegaErroUsuario = document.querySelector("#erroUsuario");
const erroUsuario = "<div class='erro1' id='erroUsuario'>Usuário incorreto</div>"
const vazio = null;

const pegaErroSenha = document.querySelector("#erroSenha");
const erroSenha = "<div class='erro1' id='erroSenha'>Senha incorreta</div>";

const form = document.querySelector('#formulario');
form.addEventListener('submit', function(e) {
    e.preventDefault();
});

let usuario = null;

function adm(usuarios) {
    this.usuario.value = "adm"
    senha.value = "123"
    login(usuarios);   
}

function login(usuarios) {
      
    usuario = document.querySelector("#usuario").value;
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
    };

};

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
    nomeMaquina()
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
        if (diaI < 10) diaI = (zero + diaI);
        if (mesI < 10) mesI = (zero + mesI);
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

        
        let minhaData = moment(`${dataIPos} ${horaIPos}`, "YYYY/M/DD h:m").add(minutosGastosImpressao, 'minutes').locale("pt").format('L');
        let minhaHora = moment(`${dataIPos} ${horaIPos}`, "YYYY/M/DD h:m").add(minutosGastosImpressao, 'minutes').locale("pt").format('LT');
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
        };
    };         
};

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

let maquinasProg = [[{
    "op": 300002,
    "pesoImp": 350,
    "pesoSeparado": 0,
    "cliche": "QUEIJO MUSSARELA TESTE 4KG",
    "material": "Termoencolhível Artflex",
    "pigmento": "Natural",
    "espessura": 0.09,
    "tipoBobina": "Tubular",
    "solda": "Fundo",
    "c1": "branco",
    "c2": "amarelo",
    "c3": "magenta",
    "c4": "cyan",
    "c5": "p485",
    "c7": "p021",
    "c8": "preto",
    "dtI": "2021-12-10",
    "hrI": "16:07",
    "dtF": "2021-12-10",
    "hrF": "18:52",
    "comprimento": 460,
    "largura": 240,
    "bobinas": [],
    "producoes": []
}],[],[]];

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
            producoes: []
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
            if (ops[i] === undefined || ops[i] === '') {
                t.appendChild(document.createTextNode('Vázio'));
                t.className += " vazio";
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

let listaBobinas = [{
    "material": "Nylon Poli",
    "tipo": "Folha",
    "largura": 600,
    "espessura": 5,
    "pigmento": "Natural",
    "pesoBruto": 60,
    "pesoTubete": 5,
    "pesoLiquido": 55,
    "codigo": 1000000000001,
    "disponivel": 55,
    "usadaPor": []
}];

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
    indiceMaquina = retornaIndiceMaquina(maquinaSelecionada);
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
        botao.id = 'botao' + maquinasProg[indiceMaquina][i].op;
        botao.name = botao.id
        botao.classList = "btn-selecionar-apontamento";
        botao.textContent = `Posi: ${[i +1]}`;
        botao.value = maquinasProg[indiceMaquina][i];
        botao.onclick = () => {
            abrirApontamento(maquinasProg[indiceMaquina][i].op);
            apagaTabApSel(i, indiceMaquina, maquinasProg[indiceMaquina][i].pesoSeparado)
        }
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
        if (maquinasProg[indiceMaquina][i].pesoSeparado <= 0) {
            botao.style.backgroundColor = 'red';
            botao.style.color = 'white'
            botao.style.borderStyle = 'none';
            botao.style.marginTop = '10px';
        }
        if (maquinasProg[indiceMaquina][i].pesoSeparado > 0) {
            botao.style.backgroundColor = 'yellow';
            botao.style.color = 'black';
            botao.style.borderStyle = 'none';
            botao.style.marginTop = '10px';
        }
        if (maquinasProg[indiceMaquina][i].pesoSeparado >= maquinasProg[indiceMaquina][i].pesoImp) {
            botao.style.backgroundColor = 'green';
            botao.style.color = 'white';
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
    document.querySelector("#botao-confirmacao-apontamento").style.visibility = "hidden";
    document.querySelector(".molde-etiqueta-apontar").style.visibility = "hidden";
    document.querySelector(".bobinas").style.visibility = "hidden";
    document.querySelector(".apontar-bobina").style.visibility = "hidden";
    document.querySelector(".apontar-selecionado").style.visibility = "visible";
    let maquinaSelecionada = document.querySelector("#maquina-apontar-bobina").value;
    indexMaquina = retornaIndiceMaquina(maquinaSelecionada);

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
let numeroOp;

function visualizarEtiquetaApontada() {
    volumeDigitado = Number(document.querySelector("#volumes").value);
    bobinaDigitada = Number(document.querySelector("#apontou").value);
    usarDigitado = Number(document.querySelector("#pesoUtilizado").value);
    let indexBobina = listaBobinas.findIndex((bob) => bob.codigo == bobinaDigitada);
    if (indexBobina === -1 || ! Number) {
        alert("Bobina inexistente !!!");
        return;
    }else {
        document.querySelector("#cliche-apontar-selecioado").textContent = achaOp.cliche;
        document.querySelector("#op-apontar-selecioado").textContent = achaOp.op;
        document.querySelector("#material-apontar-selecioado").textContent = listaBobinas[indexBobina].material;
        document.querySelector("#largura-apontar-selecioado").textContent = `L.: ${listaBobinas[indexBobina].largura}`;
        document.querySelector("#espessura-apontar-selecioado").textContent = `E.: ${listaBobinas[indexBobina].espessura}`;
        document.querySelector("#pigmento-apontar-selecioado").textContent = `Pigmento: ${listaBobinas[indexBobina].pigmento}`;
        document.querySelector("#tipo-apontar-selecioado").textContent = `Bob. tipo: ${listaBobinas[indexBobina].tipo}`;
        document.querySelector("#pesoBobina-apontar-selecioado").textContent = `Peso bobina: ${listaBobinas[indexBobina].pesoLiquido} Kg's`;
        document.querySelector("#pesoSeparado-apontar-selecioado").textContent = `Peso separado: ${usarDigitado} Kg's`;
       
        numeroBobinaAtual = maquinasProg[indexMaquina][indexOp].bobinas.length + 1; 
        let volumesOk = `VOL.: ${numeroBobinaAtual}/${volumeDigitado}`;
        document.querySelector("#volume-apontar-selecioado").textContent = volumesOk;

        JsBarcode('#codBarras-apontar', bobinaDigitada);

        document.querySelector(".molde-etiqueta-apontar").style.visibility = "visible";
        document.querySelector("#botao-confirmacao-apontamento").style.visibility = "visible";
    };
};
function confirmarApontamento() {  
    document.querySelector("#botao-confirmacao-apontamento").style.visibility = "hidden";
    document.querySelector(".molde-etiqueta-apontar").style.visibility = "hidden";
 
    let bobinaApontada = {codigo: Number(document.querySelector("#apontou").value), pesoA: usarDigitado};
    maquinasProg[indexMaquina][indexOp].pesoSeparado += usarDigitado;
    maquinasProg[indexMaquina][indexOp].bobinas.push(bobinaApontada);
    try {
        for (let i in producoes[indexMaquina]) {
            let leituraAtual = producoes[indexMaquina][i].op;
            if (leituraAtual === achaOp.op) {
                producoes[indexMaquina][i].bobinas = maquinasProg[indexMaquina][indexOp].bobinas;
            }
        }
    } catch {

    }

    desenharGraficoApontamento(
        (maquinasProg[indexMaquina][indexOp].pesoImp), 
        (maquinasProg[indexMaquina][indexOp].pesoSeparado),
        ((maquinasProg[indexMaquina][indexOp].pesoImp) - (maquinasProg[indexMaquina][indexOp].pesoSeparado))
        );

    if (maquinasProg[indexMaquina][indexOp].bobinas.length === volumeDigitado) {
        document.querySelector("#volumes").value = null;
        alert("Todos os volumes separados !!!");
    };

    var botao = document.getElementById("botao" + maquinasProg[indexMaquina][indexOp].op);
    
    avaliarPeso = function avaliaPesos() {
        if (maquinasProg[indexMaquina][indexOp].pesoSeparado > 0) {
            botao.style.backgroundColor = 'yellow';
            botao.style.color = 'black';
            botao.style.marginTop = '10px';
        };
    
        if (maquinasProg[indexMaquina][indexOp].pesoSeparado > maquinasProg[indexMaquina][indexOp].pesoImp) {
            botao.style.backgroundColor = 'green';
            botao.style.color = 'white';
        };
    }
    apagaTabApSel(indexOp, indexMaquina, usarDigitado);
    avaliarPeso();
    document.querySelector("#apontou").value = null;
    document.querySelector("#pesoUtilizado").value = null;
}

function fecharApontarSelecionado() {
    nomeMaquinaBobina()
    document.querySelector(".bobinas").style.visibility = "visible";
    document.querySelector(".apontar-bobina").style.visibility = "visible";
    document.querySelector(".apontar-selecionado").style.visibility = "hidden";
    document.querySelector(".fixos-apontar-bobina").textContent = null;
    document.querySelector("#volumes").value = null;
}

function desenharGraficoApontamento(solicitado, separado, faltam) {
  let barData = google.visualization.arrayToDataTable([
    ["status", "Solicitado", "Separado", "Faltam"],
    ["Quilos", solicitado, separado, faltam]
  ]);
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
      color: "green",
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
      duration: 2700,
      easing: "out",
      startup: true
    }
  };
  var barChart = new google.visualization.ColumnChart(
    document.getElementById("grafico-apontamento")
  );
  barChart.draw(barData, barOptions);
};

function apagaTabApSel(iOp, iMaquina, pesoSeparado) {
    try {
        document.querySelector("#tabelaApSel").remove();
        tabelaApontamentoSelecionado(iOp, iMaquina, pesoSeparado);  
    }catch {
        tabelaApontamentoSelecionado(iOp, iMaquina, pesoSeparado);
    }
};

function tabelaApontamentoSelecionado(iOp, iMaquina, pesoSeparado) {
    let local = document.querySelector(".tabela-bobinas-apontadas");
    let table = document.createElement('table');
    table.id = "tabelaApSel"
    let headTabela = document.createElement('thead');
    headTabela.id = "headApSel"
    let bodyTabela = document.createElement('tbody');

    head = ['Deletar', 'Código', 'Material', 'Larg.', 'Esp.', 'Pigmento', 'Total bobina(Kg)', 'Total apontado(Kg)', 'Registro'];
        let trC = document.createElement("tr");

        for (let o in head) {
            let th = document.createElement("th");
            th.appendChild(document.createTextNode(head[o]));
            trC.appendChild(th);
            headTabela.appendChild(trC);
        }
   

    for (var i in maquinasProg[iMaquina][iOp].bobinas){

        let bobina = maquinasProg[iMaquina][iOp].bobinas[i].codigo;
        let bob = listaBobinas.find((bob) => bob.codigo == bobina);

        let tr = document.createElement("tr");
        let botao = document.createElement("button");
        botao.onclick = () => {
            let index = (maquinasProg[indexMaquina][indexOp].bobinas).findIndex((bob) => bob.codigo == bobina);
            maquinasProg[iMaquina][iOp].pesoSeparado = (maquinasProg[iMaquina][iOp].pesoSeparado - maquinasProg[iMaquina][iOp].bobinas[index].pesoA);
            maquinasProg[iMaquina][iOp].bobinas.splice(index, 1);
            let faltam = (maquinasProg[iMaquina][iOp].pesoImp - maquinasProg[iMaquina][iOp].pesoSeparado);
            desenharGraficoApontamento(maquinasProg[iMaquina][iOp].pesoImp, maquinasProg[iMaquina][iOp].pesoSeparado, faltam);
            apagaTabApSel(iOp, iMaquina, pesoSeparado);
        };
        botao.textContent = `Deletar - ${Number(i) + 1}`;

        let registro = new Date();

        tabela = [
            botao, 
            document.createTextNode(bobina),
            document.createTextNode(bob.material),
            document.createTextNode(bob.largura),
            document.createTextNode(bob.espessura),
            document.createTextNode(bob.pigmento),      
            document.createTextNode(bob.pesoLiquido), 
            document.createTextNode(maquinasProg[iMaquina][iOp].bobinas[i].pesoA),
            document.createTextNode(
                `Apontado por: ${usuario}, em 
                ${registro.toLocaleDateString("pt-BR", {dateStyle: "short"})} às 
                ${registro.toLocaleTimeString("pt-BR", {timeStyle: "short"})}.`)
        ];
            
        for (var i in tabela) {
            let th = document.createElement("th");
            th.appendChild(tabela[i]);
            tr.appendChild(th);
        }
        bodyTabela.appendChild(tr);
    };
    table.appendChild(headTabela);
    table.appendChild(bodyTabela);
    local.appendChild(table);
};

// ---------IMPRESSÃO----------

const tudoImpressao = document.querySelector(".tudo-impressao");

function impressao() {
    document.querySelector(".tabela-impressas").style.visibility = "hidden"
    document.querySelector(".tabela-lisas").style.visibility = "hidden";
    document.querySelector("#grafico-lisas").style.visibility = "hidden";
    document.querySelector(".tabela-informacoes-imp").style.visibility = "hidden";
    /* document.documentElement.style.overflow = 'hidden'; */
    document.querySelector(".lancarBobinaImpressa").style.visibility = "hidden";
    document.querySelector(".finalizar-impressa").style.visibility = "hidden";
    document.querySelector(".abrir-inclui-lisa").style.visibility = "hidden";
    document.querySelector(".cliche-impressao").textContent = "Clichê:";
    document.querySelector(".detalhes-impressao").textContent = "Detalhes:";
    document.querySelector(".metros-impressao").textContent = "Metragem ideal:";
    document.querySelector(".op-impressao").value = null;
    document.querySelector(".bobina-lisa-adicionada").value = null;
    document.querySelector(".inclui-bobina-lisa").style.visibility = "hidden";
    document.querySelector(".impressao").removeAttribute("style");
    document.querySelector(".op-impressao").removeAttribute("readonly");
    document.querySelector(".op-impressao").style.backgroundColor = "white";
    document.querySelector(".op-impressao").style.color = "black";
    document.querySelector(".maquina-impressao").removeAttribute("style");
    document.querySelector(".maquinaImp").removeAttribute("style");
    document.querySelector(".confirmar-impressao").style.visibility = "visible"
    try {
        document.querySelector("#tabelaImpressas").remove();
        document.querySelector("#tabelaLisas").remove();
    } catch {

    }
};

function fecharImpressao() {
    document.documentElement.style.overflow = 'visible';
    try {
        document.querySelector("#painelCoresImp").remove();
        document.querySelector(".tbodyTabInfosImp").remove();
    }
    catch {
        
    }   
    document.querySelector(".lancarBobinaImpressa").reset();
    fecharIncluiLisa()
    document.querySelector(".impressao").style.display = "none";
    try {
        document.querySelector(".inputMaquinaImp").remove();
        document.querySelector("#grafico-lisas").style.visibility = "hidden";
    } catch {

    }
};

function ConfirmarImpressao(indexSelecionado) { 
    let opDigitada = document.querySelector(".op-impressao").value;
    let iOp = ops.findIndex((ordem) => ordem.op == opDigitada);

    this.op = function() {
        return opDigitada
    };

    let indexMaquina = null;
    this.maquina = function() {
        let maquinaSelecionada = document.querySelector(".maquina-impressao").value;
        if (maquinaSelecionada === 'IMP-01') indexMaquina = 0;
        if (maquinaSelecionada === 'IMP-02') indexMaquina = 1;
        if (maquinaSelecionada === 'IMP-03') indexMaquina = 2;
        return indexMaquina;
    };
    this.maquina();

    let indexOpNaProducoes = producoes[this.maquina()].findIndex((ordem) => ordem.op == opDigitada);

    this.indexOpProd = function() {
        return indexOpNaProducoes
    };

    let verificaProgramacao = maquinasProg[indexMaquina].find(obj => obj.op == opDigitada);
    if (!verificaProgramacao) {
        alert("Esta O.P. não está programada para tal máquina. Verifique as informações ou consulte o líder.")
    } else {

        this.producao = function() {
            return producoes[this.maquina()][indexOpNaProducoes].producoes
        };

        document.querySelector(".cliche-impressao").textContent = `Clichê:   ${ops[iOp].nomeServico}`
        document.querySelector(".detalhes-impressao").textContent = `Detalhes:   
        Material: ${ops[iOp].material} | 
        Larg.: ${ops[iOp].largura}mm | 
        Comp.: ${ops[iOp].comprimento}mm | 
        Esp.: ${ops[iOp].espessura}mm | 
        Solda: ${ops[iOp].tipoSolda}`
        document.querySelector(".metros-impressao").textContent = `Metragem ideal: ${ops[iOp].metros} metros`;
        document.querySelector(".confirmar-impressao").style.visibility = "hidden";
        confirmaOpImpressao(verificaProgramacao);
        try {
            let ultimaBobina = producoes[this.maquina()][indexOpNaProducoes].producoes.length;
            if (producoes[this.maquina()][indexOpNaProducoes].producoes[ultimaBobina - 1].dataTermino.data === null) {
                document.querySelector(".finalizar-impressa").style.visibility = "visible";
            } else {
                document.querySelector(".finalizar-impressa").style.visibility = "hidden";
                document.querySelector(".abrir-inclui-lisa").style.visibility = "visible";
            }
            apagaTabelaImpressas(producoes[this.maquina()][indexOpNaProducoes].producoes, indexSelecionado)
            apagaTabelaLisas(producoes[this.maquina()][indexOpNaProducoes].producoes, ultimaBobina - 1);
        }
        catch {
            document.querySelector(".abrir-inclui-lisa").style.visibility = "visible";
        }
    };
    let a = document.querySelector("#selecaoTabelaImp");
    if (a !== null) {
        document.querySelector(".tabela-impressas").style.visibility = "visible"; 
        document.querySelector(".tabela-lisas").style.visibility = "visible";
        document.querySelector("#grafico-lisas").style.visibility = "visible";
        document.querySelector(".tabela-informacoes-imp").style.visibility = "visible";
    }    
};

function painelImp(op) {
    try {
        document.querySelector("#painelCoresImp").remove();
    } catch {

    }
    let local = document.querySelector(".painel-impressao");
    let section = document.createElement("section");
    section.id = "painelCoresImp";
    let ordemP = ops.find((ordem) => ordem.op == op.op);
    
    for (let i in ordemP.cores) {
        let div = document.createElement("div");
        let cor = document.createTextNode(ordemP.cores[i]);
        if (ordemP.cores[i] === '') {
            div.className += "vazio";
            div.textContent = "Vázio";
        } else {
            div.className += ordemP.cores[i];
        }
        div.className += " colorPainelImp"
        div.appendChild(cor);
        section.appendChild(div);
    }
    local.appendChild(section);
};

function confirmaOpImpressao(op) {
    try {
        document.querySelector(".inputMaquinaImp").remove();
    } catch {

    }
    painelImp(op);
    document.querySelector(".painel-impressao").reset();
    document.querySelector(".op-impressao").readOnly = "true";
    document.querySelector(".op-impressao").style.backgroundColor = "green";
    document.querySelector(".op-impressao").style.color = "white";
    let valorMaquina = document.createTextNode(document.querySelector(".maquina-impressao").value);
    document.querySelector(".maquina-impressao").style.display = "none"
    document.querySelector(".maquinaImp").style.display = "none"
    let p = document.createElement("p");
    p.className = "inputMaquinaImp"
    p.appendChild(valorMaquina);
    document.querySelector(".cab-imp1").appendChild(p);   
};

let producoes = [
    [
        {
            "op": 300002,
            "pesoImp": 350,
            "pesoSeparado": 0,
            "cliche": "QUEIJO MUSSARELA TESTE 4KG",
            "material": "Termoencolhível Artflex",
            "pigmento": "Natural",
            "espessura": 0.09,
            "tipoBobina": "Tubular",
            "solda": "Fundo",
            "c1": "branco",
            "c2": "amarelo",
            "c3": "magenta",
            "c4": "cyan",
            "c5": "p485",
            "c7": "p021",
            "c8": "preto",
            "dtI": "2021-12-10",
            "hrI": "16:07",
            "dtF": "2021-12-10",
            "hrF": "18:52",
            "comprimento": 460,
            "largura": 240,
            "bobinas": [],
            "producoes": [
                {
                    "codigo": 5000000000001,
                    "operador": {
                        "nome": "adm",
                        "codigo": 1
                    },
                    "metros": 3520,
                    "tubete": 5,
                    "pesoBruto": 90,
                    "pesoLiquido": 85,
                    "perdaAcerto": 5,
                    "perdaImp": 0,
                    "perdaExt": 0,
                    "bobinasLisas": [
                        {
                            "material": "Nylon Poli",
                            "tipo": "Folha",
                            "largura": 600,
                            "espessura": 5,
                            "pigmento": "Natural",
                            "pesoBruto": 60,
                            "pesoTubete": 5,
                            "pesoLiquido": 55,
                            "codigo": 1000000000001,
                            "disponivel": 55,
                            "usadaPor": []
                        }
                    ],
                    "dataInicio": {
                        "data": "11/01/2022",
                        "hora": "11:15",
                        "dataNumerica": 1641910525955
                    },
                    "dataTermino": {
                        "data": "11/01/2022",
                        "hora": "11:15",
                        "dataNumerica": 1641910529561
                    },
                    "status": "Finalizada",
                    "maquina": 0
                },
                {
                    "codigo": 5000000000001,
                    "operador": {
                        "nome": "adm",
                        "codigo": 1
                    },
                    "metros": 10000,
                    "tubete": 5,
                    "pesoBruto": 105,
                    "pesoLiquido": 100,
                    "perdaAcerto": 5,
                    "perdaImp": 0,
                    "perdaExt": 0,
                    "bobinasLisas": [
                        {
                            "material": "Nylon Poli",
                            "tipo": "Folha",
                            "largura": 600,
                            "espessura": 5,
                            "pigmento": "Natural",
                            "pesoBruto": 60,
                            "pesoTubete": 5,
                            "pesoLiquido": 55,
                            "codigo": 1000000000001,
                            "disponivel": 55,
                            "usadaPor": []
                        }
                    ],
                    "dataInicio": {
                        "data": "14/01/2022",
                        "hora": "09:56",
                        "dataNumerica": 1642164977578
                    },
                    "dataTermino": {
                        "data": "14/01/2022",
                        "hora": "09:56",
                        "dataNumerica": 1642164989464
                    },
                    "status": "Finalizada",
                    "maquina": 0
                }
            ]
        }
    ],
    [
        {
            "op": 300001,
            "pesoImp": 320,
            "pesoSeparado": 0,
            "cliche": "QUEIJO TIPO COALHO TESTE 1KG",
            "material": "Nylon Poli",
            "pigmento": "Natural",
            "espessura": 0.11,
            "tipoBobina": "Tubular",
            "solda": "Fundo",
            "c1": "branco",
            "c2": "amarelo",
            "c3": "magenta",
            "c4": "cyan",
            "c5": "p485",
            "c6": "p355",
            "c7": "",
            "c8": "preto",
            "dtI": "2022-01-11",
            "hrI": "11:16",
            "dtF": "2022-01-11",
            "hrF": "13:26",
            "comprimento": 240,
            "largura": 160,
            "bobinas": [],
            "producoes": [
                {
                    "codigo": 5000000000002,
                    "operador": {
                        "nome": "adm",
                        "codigo": 1
                    },
                    "metros": 3200,
                    "tubete": 5,
                    "pesoBruto": 115,
                    "pesoLiquido": 110,
                    "perdaAcerto": 4,
                    "perdaImp": 0,
                    "perdaExt": 0,
                    "bobinasLisas": [
                        {
                            "material": "Nylon Poli",
                            "tipo": "Folha",
                            "largura": 600,
                            "espessura": 5,
                            "pigmento": "Natural",
                            "pesoBruto": 60,
                            "pesoTubete": 5,
                            "pesoLiquido": 55,
                            "codigo": 1000000000001,
                            "disponivel": 55,
                            "usadaPor": []
                        }
                    ],
                    "dataInicio": {
                        "data": "11/01/2022",
                        "hora": "11:16",
                        "dataNumerica": 1641910588347
                    },
                    "dataTermino": {
                        "data": "11/01/2022",
                        "hora": "11:16",
                        "dataNumerica": 1641910595808
                    },
                    "status": "Finalizada",
                    "maquina": 1
                }
            ]
        }
    ],
    [
        {
            "op": 300003,
            "pesoImp": 350,
            "pesoSeparado": 0,
            "cliche": "QUEIJO PRATO TESTE 3KG",
            "material": "Termoencolhível Artflex",
            "pigmento": "Natural",
            "espessura": 0.09,
            "tipoBobina": "Tubular",
            "solda": "Fundo",
            "c1": "branco",
            "c2": "amarelo",
            "c3": "magenta",
            "c4": "cyan",
            "c5": "p485",
            "c6": "",
            "c7": "p021",
            "c8": "p871",
            "dtI": "2022-01-11",
            "hrI": "13:34",
            "dtF": "2022-01-11",
            "hrF": "16:35",
            "comprimento": 460,
            "largura": 240,
            "bobinas": [],
            "producoes": [
                {
                    "codigo": 5000000000001,
                    "operador": {
                        "nome": "adm",
                        "codigo": 1
                    },
                    "metros": 4720,
                    "tubete": 5,
                    "pesoBruto": 123.47,
                    "pesoLiquido": 118.47,
                    "perdaAcerto": 4.37,
                    "perdaImp": 0,
                    "perdaExt": 0,
                    "bobinasLisas": [
                        {
                            "material": "Nylon Poli",
                            "tipo": "Folha",
                            "largura": 600,
                            "espessura": 5,
                            "pigmento": "Natural",
                            "pesoBruto": 60,
                            "pesoTubete": 5,
                            "pesoLiquido": 55,
                            "codigo": 1000000000001,
                            "disponivel": 55,
                            "usadaPor": []
                        }
                    ],
                    "dataInicio": {
                        "data": "11/01/2022",
                        "hora": "13:34",
                        "dataNumerica": 1641918886449
                    },
                    "dataTermino": {
                        "data": "11/01/2022",
                        "hora": "13:35",
                        "dataNumerica": 1641918911362
                    },
                    "status": "Finalizada",
                    "maquina": 2
                },
                {
                    "codigo": 5000000000004,
                    "operador": {
                        "nome": "Teste",
                        "codigo": 1
                    },
                    "metros": 3520,
                    "tubete": 5,
                    "pesoBruto": 78.3,
                    "pesoLiquido": 73.3,
                    "perdaAcerto": 4.5,
                    "perdaImp": 0,
                    "perdaExt": 0,
                    "bobinasLisas": [
                        {
                            "material": "Nylon Poli",
                            "tipo": "Folha",
                            "largura": 600,
                            "espessura": 5,
                            "pigmento": "Natural",
                            "pesoBruto": 60,
                            "pesoTubete": 5,
                            "pesoLiquido": 55,
                            "codigo": 1000000000001,
                            "disponivel": 55,
                            "usadaPor": []
                        }
                    ],
                    "dataInicio": {
                        "data": "24/01/2022",
                        "hora": "14:03",
                        "dataNumerica": 1643043826209
                    },
                    "dataTermino": {
                        "data": "24/01/2022",
                        "hora": "14:04",
                        "dataNumerica": 1643043848582
                    },
                    "status": "Finalizada",
                    "maquina": 2
                }
            ]
        }
    ]
];

let bobinasImpressas = [];

var indexTemporario = false;

function incluirImpressa(indexSel) {

    if (indexSel >= 0) {
        avaliaInclusaoLisa = true;
        indexTemporario = indexSel;
    } else {
        avaliaInclusaoLisa = false;
        indexTemporario = false;
    }
    
    document.querySelector(".inclui-bobina-lisa").style.visibility = "visible";
    let bobDigitada = document.querySelector(".bobina-lisa-adicionada");
    let botaoAdciocionaBob = document.querySelector(".confirma-bobina-lisa");
    botaoAdciocionaBob.style.visibility = "hidden";

    let valorAcima;

    let procura = function() {
        document.querySelector(".bobina-lisa-adicionada").focus();
        bobDigitada.style.backgroundColor = "white";
        bobDigitada.addEventListener('keyup', function(e) {
            let bobina = listaBobinas.findIndex((codigo) => codigo.codigo == bobDigitada.value);
            if ((bobDigitada.value).length === 13) {
                if (bobina > -1) {
                    bobDigitada.style.backgroundColor = "green";
                    botaoAdciocionaBob.style.visibility = "visible";
                }else {
                    bobDigitada.style.backgroundColor = "red";
                    botaoAdciocionaBob.style.visibility = "hidden";
                };
                valorAcima = bobDigitada.value;
            };
            if ((bobDigitada.value).length > 13) {
                bobDigitada.style.backgroundColor = "red";
                bobDigitada.value = valorAcima;
            };
        });

    };
    procura();
};
function fecharIncluiLisa() {
    document.querySelector(".inclui-bobina-lisa").style.visibility = "hidden";
    document.querySelector(".confirma-bobina-lisa").style.visibility = "hidden";
};

var avaliaInclusaoLisa;

function confirmaEntradaLisa() {
    document.querySelector(".inclui-bobina-lisa").style.visibility = "hidden";
    document.querySelector(".confirma-bobina-lisa").style.visibility = "hidden";
    let bobinaDigitada = document.querySelector(".bobina-lisa-adicionada").value;
    try {
        var indexAddLisa = document.querySelector("#selecaoTabelaImp").className;
    } catch {
        
    }
    let maquina = new ConfirmarImpressao(indexAddLisa);
    let indexMaq = maquina.maquina();
    let op = maquina.op();

    let indexOpNaProgramacao = maquinasProg[indexMaq].findIndex((ordem) => ordem.op == op);

    if (indexOpNaProgramacao < 0) {
        alert("Esta O.P. não está programada para essa máquina");
        return
    } else if (avaliaInclusaoLisa === true) { 
        let indexOpNaProducoes = producoes[indexMaq].findIndex((ordem) => ordem.op == op);
        let bobinaLisaCadastrada = listaBobinas.findIndex((bob) => bob.codigo == bobinaDigitada);

        if (bobinaLisaCadastrada < 0) {
            alert("Bobina Inexistente");
            return
        } else {
            producoes[indexMaq][indexOpNaProducoes].producoes[indexTemporario].bobinasLisas.push(listaBobinas[bobinaLisaCadastrada]);
            apagaTabelaImpressas(producoes[indexMaq][indexOpNaProducoes].producoes, indexAddLisa);
            apagaTabelaLisas(producoes[indexMaq][indexOpNaProducoes].producoes, indexAddLisa);
        }

    } else {
        let dataCadastro = new Date();
        let dataFormatoOk = dataCadastro.toLocaleDateString("pt-BR", {dateStyle: "short"});
        let horaFormatoOk = dataCadastro.toLocaleTimeString("pt-BR", {timeStyle: "short"});

        try {
            let lengthBobinasImpressas = bobinasImpressas.length;
            let ultimoValor = bobinasImpressas[lengthBobinasImpressas -1].codigo;
            geraCodigo = ultimoValor + 1;
        } catch {
            geraCodigo = 5000000000001;
        };  

        const achaUsuario = usuarios.find((user) => user.usuario == usuario);

        let prod = {
            codigo: geraCodigo,
            operador: {nome: achaUsuario.usuario, codigo: achaUsuario.codigo},
            metros: 0,
            tubete: 0,
            pesoBruto: 0,
            pesoLiquido: 0,
            perdaAcerto: 0,
            perdaImp: 0,
            perdaExt: 0,
            bobinasLisas: [],
            dataInicio: {
                data: dataFormatoOk,
                hora: horaFormatoOk,
                dataNumerica: dataCadastro.getTime(),
            },
            dataTermino: {
                data: null,
                hora: null,
                dataNumerica: null
            },
            status: "Não Finalizada", 
            maquina: indexMaq
        };        
        
        let bobinaLisaCadastrada = listaBobinas.findIndex((bob) => bob.codigo == bobinaDigitada);
        if (bobinaLisaCadastrada < 0) {
            alert("Bobina Inexistente");
            return
        }else {     
            let encontraOpIgual = producoes[indexMaq].findIndex((ordem) => ordem.op == op);
            if (encontraOpIgual < 0) {
                producoes[indexMaq].push(maquinasProg[indexMaq][indexOpNaProgramacao]);
            }      
            let indexOpNaProducoes = producoes[indexMaq].findIndex((ordem) => ordem.op == op);
            producoes[indexMaq][indexOpNaProducoes].producoes.push(prod);

            let indiceEmProducoes = producoes[indexMaq][indexOpNaProducoes].producoes.length;
            producoes[indexMaq][indexOpNaProducoes].producoes[indiceEmProducoes -1].bobinasLisas.push(listaBobinas[bobinaLisaCadastrada]);


            if (avaliaInclusaoLisa === true) {
                try {
                    ultimaLinhaTabImp();
                    graficoLisas(producoes[indexMaq][indexOpNaProducoes].producoes, indexAddLisa, true);
                } catch {
    
                };     

            } else if (avaliaInclusaoLisa === false) {
                bobinasImpressas.push(producoes[indexMaq][indexOpNaProducoes].producoes[indiceEmProducoes -1]);
                apagaTabelaImpressas(producoes[indexMaq][indexOpNaProducoes].producoes);
                apagaTabelaLisas(producoes[indexMaq][indexOpNaProducoes].producoes, indiceEmProducoes -1);
                try {
                    ultimaLinhaTabImp();
                    graficoLisas(producoes[indexMaq][indexOpNaProducoes].producoes, indiceEmProducoes -1, true);
                } catch {
    
                };  
            }
          
            document.querySelector(".finalizar-impressa").style.visibility = "visible";
            document.querySelector(".abrir-inclui-lisa").style.visibility = "hidden";
            document.querySelector(".bobina-lisa-adicionada").value = '';
        };
    };
};

function apagaTabelaImpressas(producoes, indexSelecionado) {
    try {
        document.querySelector("#tabelaImpressas").remove();
        tabelaImpressas(producoes, indexSelecionado); 
    } catch {
        tabelaImpressas(producoes, indexSelecionado);
    } 
};

function tabelaImpressas(producoes, indexSelecionado = (producoes.length -1)) {
    let local = document.querySelector(".tabela-impressas");
    let table = document.createElement('table');
    table.id = "tabelaImpressas";
    let headTabela = document.createElement('thead');
    headTabela.id = "headImpressas";
    let bodyTabela = document.createElement('tbody');
    bodyTabela.id = "bodyImpressas";

    head = ['Código', 'Tubete', 'Peso Líquido', 'Metros', 'Status'];
        let trC = document.createElement("tr");

        for (let o in head) {
            let th = document.createElement("th");
            th.appendChild(document.createTextNode(head[o]));
            trC.appendChild(th);
            headTabela.appendChild(trC);
        };

        for (let i in producoes) {
            let tr = document.createElement("tr");

            let status = document.createTextNode(producoes[i].status);

            tabela = [
                document.createTextNode(producoes[i].codigo),
                document.createTextNode(producoes[i].tubete),
                document.createTextNode(producoes[i].pesoLiquido),
                document.createTextNode(producoes[i].metros),
                document.createTextNode(status.textContent)      
            ];

            for (let o in tabela) {
                let th = document.createElement("th");
                th.appendChild(tabela[o]);
                if ((th.textContent === "Não Finalizada") || (th.textContent === "Finalizada")) {
                    th.className = `posi${i}`;      
                }
                tr.className = i;
                tr.appendChild(th);
                bodyTabela.appendChild(tr);
            };       
        };
        table.appendChild(headTabela);
        table.appendChild(bodyTabela);
        local.appendChild(table);  
        mostraLisasImpressas(producoes);    
        try {
            let local = document.querySelector("#bodyImpressas");
            local.children[indexSelecionado].id = "selecaoTabelaImp";
        } catch {
        }; 
};

let mostraLisasImpressas = function(producoes) {
    let local = document.querySelector("#bodyImpressas");
    local.addEventListener('click', function(e) {
        if (e.target.className !== '' || e.target.id !== '') return
        try {
            let encontraAntiga = document.querySelector("#selecaoTabelaImp");
            encontraAntiga.id = null;
        } catch {
        }
        let linhaSelecionada = e.composedPath()[1];
        linhaSelecionada.id = "selecaoTabelaImp";
        let localDoIndex = e.composedPath();
        let index = localDoIndex[1].className;
        apagaTabelaLisas(producoes, index);   
    });
};

function apagaTabelaLisas(producoes, index) {
    try {
        document.querySelector("#tabelaLisas").remove();    
    } catch {
        
    } finally {
        tabelaLisas(producoes, index);
        tabelaInfosImp(producoes, index);
    }
};

function tabelaLisas(producoes, index) {
    let local = document.querySelector(".tabela-lisas");
    let table = document.createElement('table');
    table.id = "tabelaLisas";
    let headTabela = document.createElement('thead');
    headTabela.id = "headLisas";
    let bodyTabela = document.createElement('tbody');
    bodyTabela.id = "bodyLisas";

    head = ['Código', 'Peso Líquido', 'Material', 'Largura', 'Espessura'];
        let trC = document.createElement("tr");

        for (let o in head) {
            let th = document.createElement("th");
            th.appendChild(document.createTextNode(head[o]));
            trC.appendChild(th);
            headTabela.appendChild(trC);
        };

        let bobina = producoes[index].bobinasLisas;

        for (let i in producoes[index].bobinasLisas) {
            let tr = document.createElement("tr");

            tabela = [
                document.createTextNode(bobina[i].codigo),
                document.createTextNode(bobina[i].pesoLiquido),
                document.createTextNode(bobina[i].material),
                document.createTextNode(bobina[i].largura),
                document.createTextNode(bobina[i].espessura)
            ];

            for (let i in tabela) {
                let th = document.createElement("th");
                th.appendChild(tabela[i]);
                tr.appendChild(th);
                bodyTabela.appendChild(tr);
            }
            table.appendChild(bodyTabela);
            table.appendChild(headTabela);
            local.appendChild(table);
        };
        graficoLisas(producoes, index);
};

function graficoLisas(producoes, index, verifica) {
    if (verifica === true) {
        setTimeout( function() {
            index = (producoes.length -1);
            graficoLisas(producoes, index);
        }, 100);
    };
    try {
        document.querySelector("#grafico-lisas").remove();
    } catch {
        
    }
    
    let pesoLisas = producoes[index].bobinasLisas.map((valor) => valor)
    .map((valor => valor.pesoLiquido))
    .reduce(((ac, valor) => ac + valor),0);
    let pesoImpresso = producoes[index].pesoLiquido;
    let perdasAcerto = producoes[index].perdaAcerto;
    let perdasImp = producoes[index].perdaImp;
    let perdasExt = producoes[index].perdaExt;
    let perdas = (perdasAcerto + perdasExt + perdasImp);
    let local = document.querySelector(".aba2-imp");
    let div = document.createElement("div");
    div.id = "grafico-lisas";
    local.appendChild(div);
    GraficoPizza3(div.id, pesoImpresso, pesoLisas, perdas);
};

function GraficoPizza3(local, v1, v2, v3) {
    let pieData = google.visualization.arrayToDataTable([      
      ['Situações', 'Números'],
      ['Produção',   v1],
      ['Entrada lisa',   v2],
      ['Perda',   v3]
    ]);
    let pieOptions = {
      pieSliceTextStyle: {
        color: 'black',
        fontSize: 15,
        alignment: 'center'
      },
      backgroundColor: 'transparent',
      pieHole: 0.4,
      colors: [ "#41e141", 
                "#10fdcb",
                "#f56464" 
            ],
      pieSliceText: 'value',
      tooltip: {
        fontName: "Verdana",
        text: 'percentage' + 'value'
      },
      fontName: "Verdana",
      chartArea: {
        right: 50,
        width: '80%',
        height: '90%',
      },
      legend: {
          position: 'relative',
          alignment: 'center',
        textStyle: {
          color: "black",
          fontName: "Verdana",
          fontSize: 16,
          left: 50,
        },
      },   
    };
    let pieChart = new google.visualization.PieChart(document.getElementById(local));
    pieChart.draw(pieData, pieOptions);
  };

function ultimaLinhaTabImp(){
    let localProducao = new ConfirmarImpressao();
    let prod = localProducao.producao();
    let linhaSelecioada = document.querySelector(`.posi${prod.length -1}`).parentElement;
    let encontraAntiga = document.querySelector("#selecaoTabelaImp");
    encontraAntiga.id = null;
    linhaSelecioada.id = "selecaoTabelaImp";
};
        
function campoFinalizarImpressa() {
    document.querySelector(".lancarBobinaImpressa").style.visibility = "visible";
    try {
        ultimaLinhaTabImp()       
    } catch {

    }
};

const formularioLancaImp = document.querySelector(".lancarBobinaImpressa");
formularioLancaImp.addEventListener('submit', (e) => {
    e.preventDefault();
});

function confirmarLancamentoImpressao() {
    let achaIndex = new ConfirmarImpressao();
    let indexOpProd = achaIndex.indexOpProd();
    let maquina = achaIndex.maquina();
    let ultimaProd = producoes[maquina][indexOpProd].producoes.length;
    let pesoTubete = Number(document.querySelector(".tubeteLancaImpressa").value);
    let pesoBruto = Number(document.querySelector(".pesoBrutoLancaImpressa").value);
    let metragem = Number(document.querySelector(".metrosLancaImpressa").value);
    let perdaAcerto = Number(document.querySelector(".acertoLancaImpressa").value);
    let perdaImp = Number(document.querySelector(".perdaImpLancaImpressa").value);
    let perdaExt = Number(document.querySelector(".perdaExtLancaImpressa").value);
    let motivoPerdaImp = document.querySelector(".motivosPerdaImp").value;
    let motivoPerdaExt = document.querySelector(".motivosPerdaExt").value;
    let pesoLiquido = pesoBruto - pesoTubete;
    let liquidoOk = Number(pesoLiquido.toFixed(2));

    if ((pesoTubete && pesoBruto && metragem) <= 0) {
        alert("Tubete, Peso bruto ou Metragem incorretos !");
        return
    } else {
        if (perdaImp > 0 && motivoPerdaImp === '') {
            alert("Motivo 'Perda IMP' vázio !");
            return
        }
        if (perdaExt > 0 && motivoPerdaExt === '') {
            alert("Motivo 'Perda Ext' vázio !");
            return
        } else {
            autorizaLancamentoImp(liquidoOk);       
        }
};

    function autorizaLancamentoImp(pesoLiquido) {
        let dataTermino = new Date();
        let dataOk = dataTermino.toLocaleDateString("pt-BR", {dateStyle: "short"});
        let horaOk = dataTermino.toLocaleTimeString("pt-BR", {timeStyle: "short"});

        producoes[maquina][indexOpProd].producoes[ultimaProd -1].tubete = pesoTubete;
        producoes[maquina][indexOpProd].producoes[ultimaProd -1].pesoBruto = pesoBruto;
        producoes[maquina][indexOpProd].producoes[ultimaProd -1].metros = metragem;
        producoes[maquina][indexOpProd].producoes[ultimaProd -1].perdaAcerto = perdaAcerto;
        producoes[maquina][indexOpProd].producoes[ultimaProd -1].perdaImp = perdaImp;
        producoes[maquina][indexOpProd].producoes[ultimaProd -1].perdaExt = perdaExt;
        producoes[maquina][indexOpProd].producoes[ultimaProd -1].pesoLiquido = pesoLiquido;
        producoes[maquina][indexOpProd].producoes[ultimaProd -1].dataTermino.data = dataOk;
        producoes[maquina][indexOpProd].producoes[ultimaProd -1].dataTermino.dataNumerica = dataTermino.getTime();
        producoes[maquina][indexOpProd].producoes[ultimaProd -1].dataTermino.hora = horaOk;
        producoes[maquina][indexOpProd].producoes[ultimaProd -1].status = "Finalizada";

        document.querySelector(".lancarBobinaImpressa").style.visibility = "hidden";
        document.querySelector(".lancarBobinaImpressa").reset();

        apagaTabelaImpressas(producoes[maquina][indexOpProd].producoes);
        graficoLisas(producoes[maquina][indexOpProd].producoes, ultimaProd -1, true);
        ultimaLinhaTabImp();
    };   
};

function tabelaInfosImp(producoes, index) {
    try {
        document.querySelector(".tbodyTabInfosImp").remove();
    } catch {

    }
    
    const local = document.querySelector(".tabela-informacoes-imp");
    let tbody = document.createElement("tbody");
    tbody.className = "tbodyTabInfosImp";
    let tr = document.createElement("tr");

    let listaTabela = [
        producoes[index].operador.nome,
        producoes[index].dataInicio.data,
        producoes[index].dataInicio.hora,
        producoes[index].dataTermino.data,  
        producoes[index].dataTermino.hora
     ];

    for (let i in listaTabela) {
        let th = document.createElement("th");
        th.appendChild(document.createTextNode(listaTabela[i]));
        tr.appendChild(th);
    }
    tbody.appendChild(tr);
    local.appendChild(tbody);
}

function adicionarBobinaLisa() {
    let encontraLinha = document.querySelector("#selecaoTabelaImp");
    let infos = new ConfirmarImpressao(encontraLinha.className);
    let maquina = infos.maquina();
    let indexOpProd =  infos.indexOpProd();
    if (producoes[maquina][indexOpProd].producoes[encontraLinha.className].status === "Finalizada") {
        alert("Esta produção já está finalizada !!!");
        ultimaLinhaTabImp();
        return
    } else {
        avaliaInclusaoLisa = false;
        incluirImpressa(encontraLinha.className); 
    }
};

setas();
function setas() {
    let body = document.querySelector("body");
    body.addEventListener("keyup", function(e) {

        let local = document.querySelector(".impressao"); 

        if (local.style.display !== "none") {
            if (e.keyCode === 38) {
                try {
                    let linhaSel = document.querySelector("#selecaoTabelaImp");                  
                    let index = Number(linhaSel.children[4].className.split("posi")[1]);
                    if (index === 0) {   
                    } else {
                        let prod = new ConfirmarImpressao(index);
                        let producoes = prod.producao();
                        let linhaRecebe = document.querySelector(`.posi${index - 1}`);
                        linhaSel.children[4].parentElement.id = null;
                        linhaRecebe.parentElement.id = "selecaoTabelaImp"
                        apagaTabelaImpressas(producoes, index -1);
                        apagaTabelaLisas(producoes, index -1); 
                    };
                }    catch {
                     };
            };
            if (e.keyCode === 40) {
                try {
                    let linhaSel = document.querySelector("#selecaoTabelaImp");                   
                    let index = Number(linhaSel.children[4].className.split("posi")[1]);  
                    let prod = new ConfirmarImpressao(index);
                    let producoes = prod.producao(); 
                    if (index === (producoes.length - 1)) {   
                    } else {
                        let linhaRecebe = document.querySelector(`.posi${index + 1}`);
                        linhaSel.children[4].parentElement.id = null;
                        linhaRecebe.parentElement.id = "selecaoTabelaImp"
                        apagaTabelaImpressas(producoes, index + 1);
                        apagaTabelaLisas(producoes, index + 1); 
                    };
                }    catch {
                    };
            };
        };               
    });
};

function resultados() {
    document.querySelector(".resultados").style.display = null;
    document.querySelector(".seleciona-maquina-resultado").style.display = 'none';
    document.querySelector(".modelo-grafico-resultado").style.display = 'none';
    document.querySelector(".gerar-grafico").style.display = 'none';  
}
function fecharResultados() {
    document.querySelector(".resultados").style.display = "none";    
}

document.querySelector(".cab-resultados").addEventListener("click", function(e) {
    try {
        var tipoRelatorio = document.querySelector(".tipo-resultado").value;
        if (tipoRelatorio === "Máquina específica" || tipoRelatorio === "Operador por máquina" ) {
            document.querySelector(".seleciona-maquina-resultado").style.display = null;
        } else {
            document.querySelector(".seleciona-maquina-resultado").style.display = 'none';
        }
    } catch {
    }
    let tipoGrafico = document.querySelector(".tipo-grafico-resultado").value;
    if (tipoGrafico === "Pizza") {
        document.querySelector(".modelo-grafico-resultado").style.display = null;
    } else {
        document.querySelector(".modelo-grafico-resultado").style.display = 'none';
    }
    let dataI = document.querySelector(".data-inicio-grafico").value;
    let dataF = document.querySelector(".data-final-grafico").value;
    function avaliaCamposResultado() {
        if (tipoRelatorio && tipoGrafico && dataI && dataF !== '') {
            document.querySelector(".gerar-grafico").style.display = null;  
        }
        else {
            document.querySelector(".gerar-grafico").style.display = 'none';
        }
    };
    avaliaCamposResultado(); 
});

function retornaNomeMaquina(indice) {
    if (indice === 0) return 'IMP-01';
    if (indice === 1) return 'IMP-02';
    if (indice === 2) return 'IMP-03';
}
function retornaIndiceMaquina(nome) {
    if (nome === 'IMP-01') return 0;
    if (nome === 'IMP-02') return 1;
    if (nome === 'IMP-03') return 2;
}

function gerargrafico(listaVetada = false) {
    var avalia3D = false;
    let valorAvaliado = document.querySelector(".valor-modelo-grafico-resultados").value;
    if (valorAvaliado === "3D") avalia3D = true;
    try {
        document.querySelectorAll(".quilos-grafico-resultados").remove();
        document.querySelectorAll(".aparas-grafico-resultados").remove();
        document.querySelectorAll(".metros-grafico-resultados").remove();
    } catch {
        
    }
    let local = document.querySelector(".local-graficos-resultado");

    let tipoRelatorio = document.querySelector(".tipo-resultado").value;
    let tipoGrafico = document.querySelector(".tipo-grafico-resultado").value;
    let dataI = document.querySelector(".data-inicio-grafico").value + ' 00:00';
    let dataF = document.querySelector(".data-final-grafico").value + ' 23:59:59';
    let dataInicioEmNumeros = new Date(dataI).getTime();
    let dataTerminoEmNumeros = new Date(dataF).getTime();


    if (tipoRelatorio === "Todas as máquinas" || tipoRelatorio === "Máquina específica") {
        gerarPorMaquina()
    }


    function gerarPorMaquina() {
        let divQuilos = document.createElement("div");
        divQuilos.className = "quilos-grafico-resultados"
        local.appendChild(divQuilos);
        let divMetros = document.createElement("div");
        divMetros.className = "metros-grafico-resultados"
        local.appendChild(divMetros);
        let divAparas = document.createElement("div");
        divAparas.className = "aparas-grafico-resultados"
        local.appendChild(divAparas);
        var listaProducoes = [];

        for (let i in producoes) {
            listaProducoes.push([]);
        }

        for (let i in producoes) {
            for (let o in producoes[i]) {
                for(let u in producoes[i][o].producoes) {
                    if (producoes[i][o].producoes[u].dataTermino.dataNumerica !== null) {
                        listaProducoes[i].push(producoes[i][o].producoes[u]);
                    }
                    listaProducoes[i] = listaProducoes[i].filter((prod) => (prod.dataInicio.dataNumerica >= dataInicioEmNumeros && prod.dataTermino.dataNumerica <= dataTerminoEmNumeros));
                }       
            }
        }
        
        for (let i in listaProducoes) {
            if (listaProducoes[i].length === 0) {
                listaProducoes.splice(i, 1)
            }
        }

        let listaInformacoesFiltradas = [];
        
        for (let i in listaProducoes) {
            listaInformacoesFiltradas.push(listaProducoes[i]);
            listaInformacoesFiltradas[i] = {quilos: 0, metros: 0, aparas: 0, maquina: undefined};
            for (let o in listaProducoes[i]) {
                let quilos = 0;
                let aparas = 0;
                quilos = Number(listaProducoes[i][o].pesoLiquido);
                aparas = Number(listaProducoes[i][o].perdaAcerto + listaProducoes[i][o].perdaExt + listaProducoes[i][o].perdaImp);
                listaInformacoesFiltradas[i].maquina = listaProducoes[i][o].maquina;
                listaInformacoesFiltradas[i].quilos += quilos;
                listaInformacoesFiltradas[i].metros += parseInt(listaProducoes[i][o].metros);
                listaInformacoesFiltradas[i].aparas += aparas;
            }      
        }

        let localQuilos = document.querySelector(".quilos-grafico-resultados");
        let localMetros = document.querySelector(".metros-grafico-resultados");
        let localAparas = document.querySelector(".aparas-grafico-resultados");
        let locais = [localQuilos, localMetros, localAparas];

        if (listaVetada !== false) {
            listaInformacoesFiltradas = listaVetada;
        }

        if (tipoRelatorio === "Todas as máquinas") {
            gerarTodasAsMaquinas(listaInformacoesFiltradas, locais, "Quilos")
        }

        if (tipoRelatorio === "Máquina específica") {
            gerarMaquinaEspecifica(listaInformacoesFiltradas, locais, "Quilos")
        }
    }

    function gerarTodasAsMaquinas(lista, locais, tipoAtual) {
        let valoresGrafico = [[tipoAtual, 'Valores']];
        let nomeAtual = document.createElement("h2");
        nomeAtual.className = "legenda-tipo-grafico-resultados";
        nomeAtual.textContent = tipoAtual;
        let localAtual = null;

        for (let i in lista) {
            let maquina = retornaNomeMaquina(lista[i].maquina);
    
            if (tipoAtual === "Quilos") {
                valoresGrafico.push([maquina, lista[i].quilos]);
                localAtual = locais[0];
                if (i == (lista.length -1 )) gerarTodasAsMaquinas(lista, locais, "Metros");
            }
            
            if (tipoAtual === "Metros") {
                valoresGrafico.push([maquina, lista[i].metros]);
                localAtual = locais[1];
                if (i == (lista.length -1 )) gerarTodasAsMaquinas(lista, locais, "Aparas");
            } 

            if (tipoAtual === "Aparas") {
                valoresGrafico.push([maquina, lista[i].metros]);
                localAtual = locais[2];
                if (listaVetada == false) {
                    vetarInformacoes(lista);
                }
            } 
        }
        if (tipoGrafico === "Pizza") GraficoPizza(localAtual, valoresGrafico, avalia3D); 
        localAtual.appendChild(nomeAtual);
        return
    }

    function gerarMaquinaEspecifica(lista, locais, tipoAtual) {
        try {
            document.querySelector(".vetador-resultados").remove();
        } catch {

        }
        let valoresGrafico = [[tipoAtual, 'Valores']];
        let nomeAtual = document.createElement("h2");
        nomeAtual.className = "legenda-tipo-grafico-resultados";
        nomeAtual.textContent = tipoAtual;
        let localAtual = null;
        let nomeMaquina = document.querySelector(".maquina-resultado").value;
        let indiceMaquina = retornaIndiceMaquina(nomeMaquina);
        let maquina = retornaNomeMaquina(indiceMaquina);
    
        if (tipoAtual === "Quilos") {
            valoresGrafico.push([maquina, lista[indiceMaquina].quilos]);
            localAtual = locais[0];
            gerarMaquinaEspecifica(lista, locais, "Metros");
        }
            
        if (tipoAtual === "Metros") {
            valoresGrafico.push([maquina, lista[indiceMaquina].metros]);
            localAtual = locais[1];
            gerarMaquinaEspecifica(lista, locais, "Aparas");
        }

        if (tipoAtual === "Aparas") {
            valoresGrafico.push([maquina, lista[indiceMaquina].aparas]);
            localAtual = locais[2];
        }

        if (tipoGrafico === "Pizza") GraficoPizza(localAtual, valoresGrafico, avalia3D);
        localAtual.appendChild(nomeAtual);
        return   
    }
 
        
    if (tipoRelatorio === "Operador por máquina") {
        let divQuilos = document.createElement("div");
        divQuilos.className = "quilos-grafico-resultados"
        local.appendChild(divQuilos);
        let divMetros = document.createElement("div");
        divMetros.className = "metros-grafico-resultados"
        local.appendChild(divMetros);
        let divAparas = document.createElement("div");
        divAparas.className = "aparas-grafico-resultados"
        local.appendChild(divAparas);

        let nomeMaquina = document.querySelector(".maquina-resultado").value;
        let indiceMaquina = retornaIndiceMaquina(nomeMaquina);
        maquina = retornaNomeMaquina(indiceMaquina);

        var listaProducoes = [];

        for (let i in producoes[indiceMaquina]) {
            for (let o in producoes[indiceMaquina][i].producoes) {
                if (producoes[indiceMaquina][i].producoes[o].dataInicio.dataNumerica >= dataInicioEmNumeros && producoes[indiceMaquina][i].producoes[o].dataTermino.dataNumerica <= dataTerminoEmNumeros) {    
                    let prodDataFiltrada = Object.assign(producoes[indiceMaquina][i].producoes[o]);
                    listaProducoesPuxa(prodDataFiltrada);
                }
            }                                      
        };
        function listaProducoesPuxa(recebe) {
            listaProducoes.push(recebe); 
        }

        var listaOperadores = [];
        for (let i in listaProducoes) {
                let operadores = listaProducoes[i].operador
                var encontra = listaOperadores.findIndex((operador) => operador.producoesDe == operadores.nome)
                if (encontra === -1) {
                    listaOperadores.push({producoesDe: operadores.nome, todasProducoes: [{...listaProducoes[i]}]})
                }else {
                    var objeto = Object.assign(listaProducoes[i]);
                }     
        }
        puxarProducoes(objeto)
            function puxarProducoes(recebe) {
                if (recebe) listaOperadores[encontra].todasProducoes.push(Object.assign(objeto))
            }

        let listaFiltrada = []
        for (let i in listaOperadores) {
            listaFiltrada.push({
                quilos: 0,
                metros: 0,
                aparas: 0,
                operador: listaOperadores[i].producoesDe
            });
            let quilos = 0;
            let metros = 0;
            let aparas = 0;
            for (let o in listaOperadores[i].todasProducoes) {
                quilos += listaOperadores[i].todasProducoes[o].pesoLiquido;
                metros += listaOperadores[i].todasProducoes[o].metros;
                aparas += (listaOperadores[i].todasProducoes[o].perdaAcerto + listaOperadores[i].todasProducoes[o].perdaExt + listaOperadores[i].todasProducoes[o].perdaImp) 
                listaFiltrada[i].quilos = quilos;
                listaFiltrada[i].metros = metros;
                listaFiltrada[i].aparas = aparas;              
            }            
        }
        var listaSemVetar = new Array(...listaFiltrada);  
        if (listaVetada !== false) {
            listaFiltrada = listaVetada;
        }
          
        var localQuilos = document.querySelector(".quilos-grafico-resultados");
        var localMetros = document.querySelector(".metros-grafico-resultados");
        var localAparas = document.querySelector(".aparas-grafico-resultados");

        let tipoAtual = "Quilos"
        let valoresGrafico = [[tipoAtual, 'Valores']];

        for (let i in listaFiltrada) {
            var nomeAtual = document.createElement("h2");
            nomeAtual.className = "legenda-tipo-grafico-resultados";
            nomeAtual.textContent = "PESO"
            let operador = listaFiltrada[i].operador;   
            valoresGrafico.push(
                [operador, listaFiltrada[i].quilos]
            ); 
        }
        GraficoPizza(localQuilos, valoresGrafico, avalia3D);
        let elementoClone = nomeAtual.cloneNode(true);
        localQuilos.appendChild(elementoClone);

        tipoAtual = "Metros"
        valoresGrafico = [[tipoAtual, 'Valores']];

        for (let i in listaFiltrada) {
            nomeAtual.textContent = "METROS"   
            let operador = listaFiltrada[i].operador;  
            valoresGrafico.push(
                [operador, listaFiltrada[i].metros]
            ); 
        }
        GraficoPizza(localMetros, valoresGrafico, avalia3D);
        let elementoClone1 = nomeAtual.cloneNode(true);
        localMetros.appendChild(elementoClone1);  
        
        tipoAtual = "Aparas"
        valoresGrafico = [[tipoAtual, 'Valores']];

        for (let i in listaFiltrada) {
            nomeAtual.textContent = "APARAS"   
            let operador = listaFiltrada[i].operador;  
            valoresGrafico.push(
                [operador, listaFiltrada[i].aparas]
            ); 
        }
        GraficoPizza(localAparas, valoresGrafico, avalia3D);
        localAparas.appendChild(nomeAtual);
        if (listaVetada == false) {
            vetarInformacoes(listaSemVetar)
        }
    }
}


function vetarInformacoes(lista) {
    try {
        document.querySelector(".vetador-resultados").remove();
    } catch {

    }
    let local = document.querySelector(".resultados");
    let vetador = document.createElement('div');
    let ocultar = document.createElement("img");
    ocultar.src = "./assets/img/ocultar.png"
    vetador.appendChild(ocultar);
    let listaAVetar = []
    vetador.classList = "vetador-resultados";
    for (let i in lista) {
        let localNovoVetador = document.createElement("div");
        let novoVetador = document.createElement("input");
        novoVetador.type = 'checkbox';
        novoVetador.name = i;
        listaAVetar.push(lista[i]);
        let nome = null;
        if (lista[i].maquina == undefined && lista[i].operador !== undefined) {
            nome = document.createTextNode(lista[i].operador);
        }else {
            if (retornaNomeMaquina(lista[i].maquina) !== undefined) {
                nome = document.createTextNode(retornaNomeMaquina(lista[i].maquina));
            }    
        }
        if (nome !== null) {
            localNovoVetador.appendChild(novoVetador);
            localNovoVetador.appendChild(nome);   
            vetador.appendChild(localNovoVetador);       
        } 
    }
    local.appendChild(vetador);
    ligarVetador(listaAVetar);
}

function ligarVetador(lista) {
    for (let i in lista) {
        lista[i].indice = i;
    }
    let indicesAFiltrar = [];
    let novaLista = new Array(...lista);
    document.querySelector(".vetador-resultados").addEventListener('click', function(e) {
        let target = e.target;
        if (target.type !== "checkbox") return
        if (target.checked) {
            indicesAFiltrar.push(lista[target.name]);
            let encontraEmNovaLista = novaLista.findIndex((index) => index == lista[target.name]);
            if (encontraEmNovaLista !== -1) {
                novaLista.splice(encontraEmNovaLista, 1)
            }     
        }
        if (target.checked == false) {
            let encontraIndice = indicesAFiltrar.findIndex((index) => index.indice == target.name);
            if (encontraIndice !== -1) {
                novaLista.push(indicesAFiltrar[encontraIndice]);
                indicesAFiltrar.splice(encontraIndice, 1);
            } 
        }    
        for (let i in novaLista) {
            if (novaLista[i].maquina == undefined && novaLista[i].operador == undefined) novaLista.splice(i, 1);
        }
        if (novaLista.length === 0) {
            alert("Você não pode vetar todos os dados !");
            novaLista.push(lista[target.name]);
            target.checked = false;
            gerargrafico(novaLista);
            return
        }else {
            gerargrafico(novaLista);
        } 
    })   
}

function GraficoPizza(local, valores, avalia3D, avaliaVetador) {
    if (avaliaVetador) {

    }
    let pieData = google.visualization.arrayToDataTable(valores);
    let pieOptions = {
      pieSliceTextStyle: {
        color: 'rgb(230, 230, 230)',
        fontSize: 15,
        alignment: 'center',
      },
      backgroundColor: 'white',
      pieHole: 0.0,
      is3D: avalia3D,
      colors: [ "rgb(47, 114, 78)", 
                "rgb(213, 121, 9)",
                "rgb(45, 94, 139)" 
            ],
      pieSliceText: 'value',
      tooltip: {
        fontName: "Verdana",
        text: 'percentage' + 'value',
      },
      fontName: "Verdana",
      chartArea: {
        right: 50,
        width: '80%',
        height: '90%',
      },
      legend: {
          position: 'relative',
          alignment: 'center',
        textStyle: {
          color: "black",
          fontName: "Verdana",
          fontSize: 16,
          left: 50,
          toolbar: {
              text: 'value'
          },
        },
      },   
    };
    let pieChart = new google.visualization.PieChart(local);
    pieChart.draw(pieData, pieOptions);
  };
