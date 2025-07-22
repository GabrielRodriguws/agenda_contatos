//constante para armazenar e manipular o formulario
const form = document.getElementById('formAdd')



//Array para para atividades e notas
const nomes =[];

let comprimentoNomes = '';

let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault ();

    addLinha();
    atualizaTabela();
    atualizaContador();
});

function addLinha(){
    const inputNomeContato = document.getElementById('nomeContato');
    const inputNumeroContato = document.getElementById('numeroContato');

    if(nomes.includes(inputNomeContato.value)){
        alert(`O contato <b>${inputNomeContato.value}</b> já existe !`)
    }else{
    nomes.push(inputNomeContato.value);

    let contador = `<tr><th>Nome</th><th>Numero contato</th><th>${nomes.length}</th></tr>`;
    comprimentoNomes = contador
    let linha = `<tr><td>${inputNomeContato.value}</td><td>${inputNumeroContato.value}</td></tr>`;
    linhas += linha;
    }
    inputNomeContato.value ='';
    inputNumeroContato.value ='';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContador(){
    const headerTabela = document.querySelector('thead');
    headerTabela.innerHTML = comprimentoNomes;
}
