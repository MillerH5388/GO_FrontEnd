function avisar_erro(message)
{
    Notiflix.Loading.remove()
    Notiflix.Notify.failure(message);
}
var usuario_global = {}

function sair_da_plataforma()
{
    localStorage.removeItem('goAccessToken')
    window.location.href="index.php"
}