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
                container.innerHTML += `
                <div  class="produtos">
                    <img src="https://webinsider.com.br/wp-content/uploads/2019/01/Erro-404-1-1-1024x645.jpg" alt="">
                    <h3>BANCO DE DADOS FORA DO AR</h3>
                    <p>Contate nos via whatsapp</p>
                    <a href="#" target="_blank">
                        <button id="">WHATSAPP</button>
                    </a>`
            } else {
                data.map((val, index) => {
                    container.innerHTML +=
                        `<div class="produtos">
                    <img src="${val.link}" alt="">
                    <h3>${val.name}</h3>
                    <p>R$ <strong>${val.price}</strong></p>
                    </div>`
                })
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            container.innerHTML += `
            <div class="produtos">
                <img src="https://webinsider.com.br/wp-content/uploads/2019/01/Erro-404-1-1-1024x645.jpg" alt="">
                <h3>BANCO DE DADOS FORA DO AR</h3>
                <p>Contate nos via whatsapp</p>
                <a href="#" target="_blank">
                    <button id="">WHATSAPP</button>
                </a>`
        });
})