function realizar_login(login, senha)
{
    Notiflix.Loading.standard('Acessando a plataforma')
           
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({login, senha});
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(`${ENDPOINT}/login`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
        if(!result.status)
        {
            avisar_erro(result.mensagem);
            return false
        }

        Notiflix.Loading.change('Salvando informações');
        localStorage.setItem('goAccessToken', result.access_token)
        window.location.href="home.php"

        console.log(result)
    })
    .catch((error) => {
        console.log(error)
        avisar_erro('Não foi possível realizar o login.');
    });
}