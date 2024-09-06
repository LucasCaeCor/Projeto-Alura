/*document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('results-container');
    const noResultsContainer = document.getElementById('no-results-container');
    resultsContainer.innerHTML = '';

    const stars = [
        { name: 'Sol', description: 'A estrela central do nosso sistema solar, fornecendo luz e calor para a Terra.', image: 'https://s2-g1.glbimg.com/59Q0Xu-HkCRrY0OFBdDi_prC5Ko=/525x0:2351x1800/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/f/y/Tm9nhGTnucvVYqPLQz3A/bildschirmfoto-2022-04-12-um-10.50.41.png', link: 'https://pt.wikipedia.org/wiki/sol?variant=zh-cn' },
        { name: 'Sirius', description: 'A estrela mais brilhante no céu noturno, localizada na constelação do Cão Maior.', image: 'https://media.istockphoto.com/id/1171916258/es/foto/sirius-brightest-estrella-en-el-cielo-nocturno-sirius-star.jpg?s=612x612&w=0&k=20&c=Q9XlWZnte28DqKbaCRwSLEOWn3i1OGvvosOEkGKseAU=', link: 'https://pt.wikipedia.org/wiki/Sirius' },
        { name: 'Betelgeuse', description: 'Uma supergigante vermelha na constelação de Órion, conhecida por seu brilho intenso.', image: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3454578:1702325785/betelgeuse-cold-spot-dust-cloud.jpg?f=16x9&$p$f=e2ede51', link: 'https://pt.wikipedia.org/wiki/Betelgeuse' },
        { name: 'Antares', description: 'A estrela mais brilhante na constelação de Escorpião, uma supergigante vermelha.', image: 'https://www.espacotempo.com.br/wp-content/uploads/2024/01/antares-1280x795.jpeg', link: 'https://pt.wikipedia.org/wiki/Antares' },
        { name: 'Polaris', description: 'Também conhecida como a Estrela do Norte, é a estrela mais próxima do polo celeste norte.', image: 'https://img.freepik.com/vetores-premium/estrela-polaris-no-espaco-profundo-do-ceu-noturno-estrelado-com-estrelas_392339-3304.jpg', link: 'https://pt.wikipedia.org/wiki/Polaris' }
    ];

    const filteredStars = stars.filter(star => star.name.toLowerCase().includes(query));

    if (filteredStars.length > 0) {
        filteredStars.forEach(star => {
            const resultItem = `
                <div class="card mb-3">
                    <img src="${star.image}" class="card-img-top" alt="${star.name}">
                    <div class="card-body">
                        <h5 class="card-title">${star.name}</h5>
                        <p class="card-text">${star.description}</p>
                        <a href="${star.link}" class="btn btn-primary" target="_blank">Mais Informações</a>
                    </div>
                </div>`;
            resultsContainer.innerHTML += resultItem;
        });
        noResultsContainer.style.display = 'none'; // Oculta a mensagem se houver resultados
    } else {
        noResultsContainer.style.display = 'block'; // Exibe a mensagem se não houver resultados
    }
});
*/
