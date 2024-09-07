function pesquisar(){
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    console.log(campoPesquisa);

    //se o campoPesquisa for string sem nada...
    if(!campoPesquisa || campoPesquisa == " "){
      section.innerHTML = "<p>Nada foi encontrado: Você precisa digitar o nome do atleta ou esporte</p>"
      return null;
    }

    /*if(campoPesquisa != dados){
      section.innerHTML = "<p>Nada foi encontrado</p>"
      return null;
    }
    */
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado na lista de dados
    for(let dado of dados){
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      //Se o dado tiutlo includes o campo de pesquisa então será executado
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //cria um novo elemento
              resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <a href=${dado.link} target="_blank">Saiba mais</a>
        </div>
      `;
      } 
    }

    if(!resultados){
      resultados = "<p>Atleta naõ foi encontrado</p>";
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }
//console.log(dados);






