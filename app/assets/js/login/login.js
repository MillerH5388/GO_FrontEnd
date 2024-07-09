const VueLoginData = {
    date(){
        return{
            login: '',
            senha: ''
        }
    },
    methods:{
        async realizar_login()
        {
            Notiflix.Loading.standard('Acessando a plataforma')
           
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({login: this.login, senha: this.senha});
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
    },
    async mounted() {
        const access_token = localStorage.getItem('goAccessToken')
        if(access_token)
        {
            Notiflix.Loading.standard('Realizando Login automatico')
            const usuario = await verificar_autenticacao(access_token)
            if(!usuario)
            {
                avisar_erro('Não foi´ possível realizar o login automático');
                return false
            }
            else
            {
                window.location.href="home.php"
            }
        }
    }
}

const VueLogin = Vue.createApp(VueLoginData).mount('#viewLogin')