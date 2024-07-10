const VueLoginData = {
    data(){
        return{
            login: '',
            senha: ''
        }
    },
    methods:{
        async realizar_login()
        {
            realizar_login(this.login, this.senha)
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