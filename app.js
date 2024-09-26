function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
  //Se o campoPesquisa for uma string sem nada
  if (!campoPesquisa){
    section.innerHTML = "<p>Nenhuma receita encontrada. Por favor, digite o nome de uma receita, como: 'bolo'.</p>"
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = '';
  let titulo = '';
  let ingredientes = '';
  let preparo = '';
  let tags = '';
  
  // Itera sobre cada dado da pesquisa  
  for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      ingredientes = dado.ingredientes.join(', ').toLowerCase(); // Concatena os ingredientes em uma string
      preparo = dado.preparo.join(' ').toLowerCase(); // Concatena o preparo em uma string
      tags = dado.tags.toLowerCase();
  
      if (titulo.includes(campoPesquisa) || ingredientes.includes(campoPesquisa) || preparo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // Cria o HTML para cada resultado
          resultados += `
            <div class="item-resultado">
              <h2>
                <a href="${dado.link}" target="_blank">${dado.titulo}</a>
              </h2>
              <h3>Ingredientes:</h3>
              <ul>
                ${dado.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
              </ul>
              <h3>Preparo:</h3>
              <ol>
                ${dado.preparo.map(passo => `<li>${passo}</li>`).join('')}
              </ol>
              <a href=${dado.link} target="_blank">Para mais informações sobre a receita!</a>
            </div>
          `;
      }
  }

        if (!resultados) {
          resultados = "<p>Nada foi encontrado</p>"
        }

        // Atribui os resultados gerados à seção HTML
        section.innerHTML = resultados;

      
      }
        
 