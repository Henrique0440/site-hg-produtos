document.addEventListener('DOMContentLoaded', async () => {

    const container = document.querySelector('.container');
    fetch('https://api-hg-produtos-git-main-henrique0440s-projects.vercel.app/api/produtos') // URL da API ou recurso
        .then(response => {
            // Verificando se a resposta foi bem-sucedida (status 200-299)
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.status);
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            if (data.length === 0) {
                console.log('Nenhum item adicionado no banco de dados!')
            } else {
                for (let i = 0; i < data.length; i++) {
                    container.innerHTML =
                        `<div class="produtos">
                        <img src="${data[i].link}" alt="">
                        <h3>${data[i].name}</h3>
                        <p>R$ <strong>${data[i].price}</strong></p>
                        </div>`
                }

                console.log(data.length);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
})