document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#produtosForm');
    const buttonLogin = document.querySelector('#buttonLogin');

    const loginsPermitidos = [
        { user: "riquearaujo11@gmail.com", password: "Henrique123" },
        { user: "andradedasilvaaraujoguilherme@gmail.com", password: "Guilherme123" },
        { user: "edilsonandrade33@gmail.com", password: "Edilson123" }
    ]

    function verificarLogin(username, senha) {
        const verificado = loginsPermitidos.find(user => user.user === username && user.password === senha)

        return verificado ? true : false
    }

    buttonLogin.addEventListener('click', async (e) => {
        e.preventDefault()

        const username = document.querySelector('#user').value;
        const senha = document.querySelector('#password').value;

        if (verificarLogin(username, senha)) {
            form.innerHTML = `
                <input type="text" placeholder="Nome do Produto" id="name" required> <br>
                <input type="text" placeholder="Valor do Produto" id="price" required> <br>
                <textarea placeholder="Descrição do Produto" id="description" required></textarea> <br>
                <select id="category" name="category">
                    <option value="autolimpe">Autolimpe</option>
                    <option value="start">Start</option>
                    <option value="casa_da_quimica">Casa da Química</option>
                    <option value="c9">C9</option>
                </select> <br>
                <input type="url" placeholder="Link da imagem do Produto" id="link"> <br>
                <button type="submit">Adicionar</button>`
        } else {
            alert('Usuário ou senha invalido!')
            return;
        }
    })

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const name = document.querySelector('#name').value;
        const price = document.querySelector('#price').value;
        const description = document.querySelector('#description').value;
        const link = document.querySelector('#link').value;

        if (!/^[0-9]+(,[0-9]*)?$/.test(price)) {
            alert("Insira um preço válido (ex: 100,50).");
            return;
        }

        try {
            const response = await fetch('https://api-hg-produtos-git-main-henrique0440s-projects.vercel.app/api/produtos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, price, description, link }),
            });

            const data = await response.json()

            alert(data.message || data.error)
        } catch (error) {
            alert('Erro ao enviar dados:' + error.message)
        }
    })
})