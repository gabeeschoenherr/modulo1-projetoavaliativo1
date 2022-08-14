let cards = [
    {
        titulo: 'O que é o Scrum?',
        skill: 'Trabalho',
        categoria:'SoftSkill',
        descricao: 'O Scrum é uma estrutura que ajuda as equipes a trabalharem juntas. Semelhante a uma equipe de rugby (de onde vem o nome) treinando para o grande jogo, o Scrum estimula as equipes a aprenderem com as experiências, a se organizarem enquanto resolvem um problema e a refletirem sobre os êxitos e fracassos para melhorarem sempre.',
        video: 'https://www.youtube.com/embed/XfvQWnRgxG0'
    },
    {
        titulo: 'A TAG div do HTML5',
        skill: 'HTML5',
        categoria:'FrontEnd',
        descricao: 'O elemento de divisão HTML <div> é um container genérico para conteúdo de fluxo, que de certa forma não representa nada.',
        video: 'https://www.youtube.com/embed/FyOsoRALEG0'
    },
    {
        titulo: 'O método forEach()',
        skill: 'JavaScript',
        categoria:'FullStack',
        descricao: 'O método forEach() executa uma dada função em cada elemento de um array.',
        video: ''
    },
    {
        titulo: 'As Funções',
        skill: 'JavaScript',
        categoria:'FullStack',
        descricao: 'Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.',
        video: ''
    },   
];

let titulo;
let skill;
let cat;
let descri;
let ytvideo;
let jsonCardsJson;
let jsonCardsObj;
let cardsAlt=cards;


//Salva as infos
function salvarCard(){
    let cardsSalva = {};
    cardsSalva.titulo = document.getElementById("tithtml").value;
    cardsSalva.skill = document.getElementById("skillhtml").value;
    cardsSalva.categoria = document.getElementById("cathtml").value;
    cardsSalva.descricao = document.getElementById("deshtml").value;
    cardsSalva.video = document.getElementById("vidhtml").value;
    //Validação do título
    let tituloExiste; 
    cardsAlt.forEach(function (element){
        if(element.titulo == cardsSalva.titulo){ 
            tituloExiste = true;
        }
    });

    //Validação ausentes 
    if (cardsSalva.titulo.length <= 0){
        alert("Digite um título!");  
       
    }

    else if(cardsSalva.skill.length <= 0){
        alert("Digite uma linguagem/skill!");
    }

    else if(cardsSalva.categoria.length <= 0){
        alert("Selecione uma categoria!");
    }

    else if(cardsSalva.descricao.length <= 0){
        alert("Digite uma descrição!");
    }

    //Validação tamanho
    else if(cardsSalva.titulo.length < 8  || cardsSalva.titulo.length > 64){
        alert("Digite um título entre 8 e 64 caracteres!");
    }

    else if(cardsSalva.skill.length < 4  || cardsSalva.skill.length > 16){
        alert("Digite uma Linguagem/Skill entre 4 e 16 caracteres!");
    }

    else if(cardsSalva.descricao.length < 32  || cardsSalva.descricao.length > 512){
        alert("Digite uma descrição entre 32 e 512 caracteres!");
    }
    //Validação do título
    else if(tituloExiste==true){
        alert ("Esse título já existe!");
    }

    //A validação é um sucesso
    else{
        cardsAlt.push(cardsSalva);
        jsonCardsJson = JSON.stringify(cardsAlt);
        localStorage.setItem("cardsAlt", jsonCardsJson);
        document.location.reload();
        cardsAlt.forEach(element =>{
            exibirCardIndividual(element);
        })
        return true;
    } 
}

//Apaga as infos
function limparInfo(){
    document.getElementById("tithtml").value = "";
    document.getElementById("skillhtml").value = "";
    document.getElementById("cathtml").value = "";
    document.getElementById("deshtml").value = "";
    document.getElementById("vidhtml").value = "";
}

//Exibir card individual
function exibirCardIndividual(cards){
    //Criação do card
    const divCard = document.createElement("div");
    divCard.innerHTML = (`<h1> ${cards.titulo} </h1> `);
    divCard.innerHTML += (`<p><strong> Linguagem/ Skill: </strong> ${cards.skill} </p> `);
    divCard.innerHTML += (`<p><strong> Categoria: </strong> ${cards.categoria} </p> `);
    divCard.innerHTML += (`<div> ${cards.descricao} </div> `);
    divCard.classList.add('card');
    document.getElementById("cards").appendChild(divCard);
    //Criação dos botões do card
    const divCardbt = document.createElement("div");
    divCardbt.classList.add('cardbuttondiv')
    divCard.appendChild(divCardbt);

    const carddel = document.createElement("button");
    const cardedita = document.createElement("button");
    const cardvideo = document.createElement("button");

    carddel.setAttribute('class','carddel');
    carddel.setAttribute('onclick',`carddelf("${cards.titulo}")`);
    cardedita.setAttribute('class','cardedita');
    cardedita.setAttribute('onclick',`cardeditaf("${cards.titulo}")`);
    cardvideo.setAttribute('class','cardvideo');
    divCardbt.appendChild(carddel);
    divCardbt.appendChild(cardedita);
    //Botão para add o vídeo caso ele exista
    if(cards.video.length>0){
        divCardbt.appendChild(cardvideo);
    }
        //Botão do Vídeo
    cardvideo.addEventListener("click", function(){
        const divdomodulo = document.createElement("div");
        divdomodulo.setAttribute('id','divdomodulo');
        document.getElementById("main").appendChild(divdomodulo);

        const moduloVideo = document.createElement("div");
        moduloVideo.classList.add('modulovideo');
        divdomodulo.appendChild(moduloVideo);
            
        const video = document.createElement("iframe");
        video.setAttribute('src',cards.video);
        moduloVideo.appendChild(video);

        const btvideo = document.createElement("button");
        btvideo.classList.add('btvideo');
        moduloVideo.appendChild(btvideo); 
        btvideo.addEventListener("click", function(){
            divdomodulo.remove();
        });
    });
}


//Botão de editar
function cardeditaf(titulo2){
    const divdomoduloeditar = document.createElement("div");
    divdomoduloeditar.setAttribute('class','divdomoduloeditar');
    document.getElementById("main").appendChild(divdomoduloeditar);

    const divdomoduloeditarinterno = document.createElement("div");
    divdomoduloeditarinterno.classList.add('divdomoduloeditarinterno');
    divdomoduloeditar.appendChild(divdomoduloeditarinterno);
    
    const btdomoduloeditar = document.createElement("button");
    btdomoduloeditar.classList.add('btdomoduloeditar');
    divdomoduloeditarinterno.appendChild(btdomoduloeditar); 

    //Campo do editar
    const divmoduloeditarexterno = document.createElement("div");
    divdomoduloeditarinterno.appendChild(divmoduloeditarexterno);

    //Infos dentro dos inputs

    let cardsTitulo=cardsAlt.findIndex( element => element.titulo == titulo2);

    divmoduloeditarexterno.innerHTML += (`<form onsubmit="return false"><p>Título (Não pode ser alterado): </p> 
    <input type="text" name="tithtml" readonly="readonly" id="tithtmleditar" value="${cardsAlt[cardsTitulo].titulo}">
    <p>Linguagem/Skill:</p>
    <input type="text" name="skillhtml" id="skillhtmleditar" value="${cardsAlt[cardsTitulo].skill}">
    <p>Categoria:</p>
    <select name="Categorias" id="cathtmleditar" value="">
        <option value="${cardsAlt[cardsTitulo].categoria}">${cardsAlt[cardsTitulo].categoria}</option>
        <option value="FrontEnd">FrontEnd</option>
        <option value="BackEnd">BackEnd</option>
        <option value="FullStack">FullStack</option>
        <option value="SoftSkill"> SoftSkill</option>
    </select>
    <p>Descrição:</p>
    <textarea type="text" name="deshtml" id="deshtmleditar">${cardsAlt[cardsTitulo].descricao}</textarea>
    <p>Vídeo do Youtube:</p>
    <input type="text" name="vidhtml" id="vidhtmleditar" value="${cardsAlt[cardsTitulo].video}"></form>`);
    //Botão de salvar

    const btsalvareditardiv = document.createElement("div");
    btsalvareditardiv.setAttribute('class', 'btsalvareditardiv');
    divdomoduloeditarinterno.appendChild(btsalvareditardiv);

    const btsalvareditar = document.createElement("button");
    btsalvareditar.setAttribute('class','btsalvareditar');
    btsalvareditardiv.appendChild(btsalvareditar);
    btsalvareditar.innerHTML = "Salvar Edição";
   

    //Alterando os dados do array
    btsalvareditar.addEventListener("click", function(){

        //Atualização do array
        cardsAlt[cardsTitulo].titulo = document.getElementById("tithtmleditar").value;
        cardsAlt[cardsTitulo].skill = document.getElementById("skillhtmleditar").value;
        cardsAlt[cardsTitulo].categoria = document.getElementById("cathtmleditar").value;
        cardsAlt[cardsTitulo].descricao = document.getElementById("deshtmleditar").value;
        cardsAlt[cardsTitulo].video = document.getElementById("vidhtmleditar").value;

        //Validação ausentes 
        if (cardsAlt[cardsTitulo].titulo.length <= 0){
            alert("Digite um título!");  
   
        }

        else if(cardsAlt[cardsTitulo].skill.length <= 0){
            alert("Digite uma linguagem/skill!");
        }

        else if(cardsAlt[cardsTitulo].categoria.length <= 0){
            alert("Selecione uma categoria!");
        }

        else if(cardsAlt[cardsTitulo].descricao.length <= 0){
            alert("Digite uma descrição!");
        }

        //Validação tamanho
        else if(cardsAlt[cardsTitulo].titulo.length < 8  || cardsAlt[cardsTitulo].titulo.length > 64){
            alert("Digite um título entre 8 e 64 caracteres!");
        }

        else if(cardsAlt[cardsTitulo].skill.length < 4  || cardsAlt[cardsTitulo].skill.length > 16){
            alert("Digite uma Linguagem/Skill entre 4 e 16 caracteres!");
        }

        else if(cardsAlt[cardsTitulo].descricao.length < 32  || cardsAlt[cardsTitulo].descricao.length > 512){
            alert("Digite uma descrição entre 32 e 512 caracteres!");
        }

        else{
       
            console.log("Depois da alteração: ", cardsAlt[cardsTitulo]);

            jsonCardsJson = JSON.stringify(cardsAlt);
            localStorage.setItem("cardsAlt", jsonCardsJson);

            alert("Dados atualizados!");

            document.location.reload();
        }

    });
    

    btdomoduloeditar.addEventListener("click", function(){
        divdomoduloeditar.remove();
        
    });

    let cardsTituloedita=cardsAlt.findIndex( element => element.titulo == titulo2);
}

//Botão de deletar
function carddelf(titulo2){
    let resultado = confirm("Tem certeza que deseja apagar o item? Pressione e segure o botão antes de soltar.");
    if (resultado == true) {
        if(cardsAlt.length==1){
            cardsAlt.length = 0;
            jsonCardsJson = JSON.stringify(cardsAlt);
            localStorage.setItem("cardsAlt", jsonCardsJson);
            document.location.reload();
            console.log (cardsAlt);
        }
        else{
            let cardsTitulo=cardsAlt.findIndex( element => element.titulo == titulo2);
            cardsAlt.splice(cardsTitulo, 1);
            jsonCardsJson = JSON.stringify(cardsAlt);
            localStorage.setItem("cardsAlt", jsonCardsJson);
            document.location.reload();
            console.log (cardsAlt);
                       
        }
    }
}
//Botão de resetar lista
const resetacardbt = document.getElementById("resetacardbt");
resetacardbt.addEventListener("click", function(){
    let resultado2 = confirm("Tem certeza que deseja resetar a lista para os cards padrão? Pressione e segure o botão antes de soltar.");
    if (resultado2 == true) {
        localStorage.clear();
        cardsAlt=[];
    
        for(i=0;i<cards.length;i++){
            cardsAlt[i] = cards[i];
        }
        console.log(cardsAlt);
        jsonCardsJson = JSON.stringify(cardsAlt);
        localStorage.setItem("cardsAlt", jsonCardsJson);
        document.location.reload();
        exibirCard(cardsAlt);
    }
    
});
//Botão de busca
const buscabt = document.getElementById("buscabt");
buscabt.addEventListener("click", function(e){
    jsonCardsObj = localStorage.getItem("cardsAlt");
    cardsAlt = JSON.parse(jsonCardsObj);
    let cardsBusca = document.getElementById("buscahtml").value;
    
    let cardsBuscaArray = {};
    let divCardBusca= document.getElementById("cards");
    divCardBusca.innerHTML = "";
    cardsAlt.forEach(element => {
        const letras = cardsBusca.toLowerCase();
  
        if(element.titulo.toLowerCase().includes(letras)){
            console.log(cardsBuscaArray)
            exibirCardIndividual(element);
            jsonCardsJson = JSON.stringify(cardsAlt);
            localStorage.setItem("cardsAlt", jsonCardsJson);
        }
        
    });
});

//Botão de limpa busca
const limpabuscabt = document.getElementById("limpabuscabt");
limpabuscabt.addEventListener("click", function(){
    document.location.reload();

});

//Total de cards e sub categorias
function totalCards(){
    //Total
    const total = document.getElementById("total");
    total.innerHTML = (`${cardsAlt.length}`);
    //FrontEnd
    const frontend = document.getElementById("frontend");
    let frontendI = 0;
    cardsAlt.forEach(element => {
        if(element.categoria=="FrontEnd"){
            frontendI++;
        }

    });
    frontend.innerHTML = (`${frontendI}`);
    //BackEnd
    const backend = document.getElementById("backend");
    let backendI = 0;
    cardsAlt.forEach(element => {
        if(element.categoria=="BackEnd"){
            backendI++;
        }

    });
    backend.innerHTML = (`${backendI}`);
    //FullStack
    const fullstack = document.getElementById("fullstack");
    let fullstackI = 0;
    cardsAlt.forEach(element => {
        if(element.categoria=="FullStack"){
            fullstackI++;
        }

    });
    fullstack.innerHTML = (`${fullstackI}`);
    //SoftSkill
    const softskill = document.getElementById("softskill");
    let softskillI = 0;
    cardsAlt.forEach(element => {
        if(element.categoria=="SoftSkill"){
            softskillI++;
        }

    });
    softskill.innerHTML = (`${softskillI}`);

}

jsonCardsObj = localStorage.getItem("cardsAlt");
cardsAlt = JSON.parse(jsonCardsObj);

//exibirCard(cardsAlt);
cardsAlt.forEach(element =>{
    exibirCardIndividual(element);
})


totalCards();