let proximoId = 1

function adicionarLinha (){
    //Entrada de valores do formulário
    const nome = document.getElementsById("nome") .value;
    const idade = document.getElementsById ("idade").value;
    const admissao = document.getElementsById ("admissao").value;
    const demissao = document.getElementsById ("demissao").value;

    // se for preenchido vazio
    if (nome === '' || idade === '' admissao === '') {
        alert("Preencha os valores do formulário!")
    }
    const tabela = document.getElementsById ("tabelaDados").getElementsByTagName ('tbody') [0];

    //inserindo uma nova linha
    const novaLinha = tabela.insertRow;

    //inserindo os valores da linha
    const celId = novaLinha.insertCell (0);
    const celNome = novaLinha.insertCell (1);
    const celIdade = novaLinha.insertCell (2);
    const celIdAdmissao = novaLinha.insertCell (3);
    const celDemissao = novaLinha.insertCell (4);

    //Inserindo os valores dentro das celulas
    celId.innerHTML = proximoId;
    celNome.innerHTML = nome;
    celIdade.innerHTML = idade;
    celAdmissao.innerHTML = admissao;
    celDemissao.innerHTML = demissao;
    
    proximoId++;
    document.getElementById ("linhaForm").reset()
   
}