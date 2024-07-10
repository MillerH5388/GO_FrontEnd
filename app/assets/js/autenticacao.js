async function iniciar_autenticacao()
{
    Notiflix.Loading.standard();
    const access_token = localStorage.getItem('goAccessToken')
    if(!access_token)
    {
        window.location.href = "index.php"
        return false
    }

    const usuario = await verificar_autenticacao(access_token)

    if(!usuario)
    {
        window.location.href = "index.php"
        return false
    }

    Notiflix.Loading.remove();

    if(!usuario.foto) usuario.foto = 'assets/img/foto_usuario_padrao.png'
    usuario_global = usuario
    const event = new Event('go_authetication');
    document.dispatchEvent(event);

}

function verificar_autenticacao(access_token)
{
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        
        fetch(`${ENDPOINT}/autenticacao_access_token?access_token=${access_token}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if(!result.status) 
            {
                localStorage.removeItem('goAccessToken')
                resolve(false)
            }
            else
            {
                resolve(result.usuario)
            }
        })
        .catch((error) => {
            console.log(error)
            localStorage.removeItem('goAccessToken')
            resolve(false)
        });
    })
}