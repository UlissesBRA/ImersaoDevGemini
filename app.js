function pesquisar() {
  /**
   * Renderiza os resultados de uma pesquisa em uma seção HTML.
   *
   * **Objetivo:**
   *  - Busca os dados de uma pesquisa em um array `dados`.
   *  - Cria elementos HTML para cada resultado.
   *  - Insere os elementos criados na seção HTML com o ID "resultados-pesquisa".
   */

  // Seleciona a seção onde os resultados serão exibidos
  const section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML = "Dado não encontrado";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Itera sobre cada dado da pesquisa e cria um elemento HTML para cada um
  for (const dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p>${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  if (!resultados) {
    section.innerHTML = "Dado não encontrado";
  }
  // Atualiza o conteúdo da seção com os resultados gerados
  section.innerHTML = resultados;
}
