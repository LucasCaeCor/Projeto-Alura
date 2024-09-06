function pesquisar(){
    let section = document.getElementById("resultados");
    
    // Corrigir chamada do método toLowerCase()
    let campoPesquisa = document.getElementById("search-input").value.toLowerCase();
    
    // Verificar se o campo de pesquisa está vazio
    if (campoPesquisa === "") {
        section.innerHTML = `
        <div id="no-results-container" class="text-center">
            <img src="https://wallpapers-clan.com/wp-content/uploads/2022/08/meme-gif-pfp-18.gif" alt="No results icon" class="no-results-icon">
            <p id="no-results" class="no-results-message">Nenhuma estrela encontrada. Por favor, Tente Novamente!.</p>
        </div>`;
        return;
    }

    let resultado = "";
    
    // Verificar se a variável 'dados' está definida corretamente como um array de objetos
    for (let dado of dados) {
        let name = dado.name.toLowerCase();
        let description = dado.description.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Verifica se o nome, descrição ou tags contêm o texto da pesquisa (case insensitive)
        if (name.includes(campoPesquisa) || description.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultado += `
            <div class="card mb-3">
                <img src="${dado.image}" class="card-img-top" alt="${dado.name}">
                <div class="card-body">
                    <h5 class="card-title">${dado.name}</h5>
                    <p class="card-text">${dado.description}</p>
                    <a href="${dado.link}" class="btn btn-primary" target="_blank">Mais Informações</a>
                </div>
            </div>`;
        }
    }

    // Exibir os resultados ou mensagem de "nenhuma estrela encontrada"
    if (!resultado) {
        section.innerHTML = `
        <div id="no-results-container" class="text-center">
            <img src="https://wallpapers-clan.com/wp-content/uploads/2022/08/meme-gif-pfp-18.gif" alt="No results icon" class="no-results-icon">
            <p id="no-results" class="no-results-message">Não foi encontrado "${campoPesquisa}" na base de dados. Por favor, Tente Novamente!.</p>
        </div>`;
    } else {
        section.innerHTML = resultado;
    }
}
