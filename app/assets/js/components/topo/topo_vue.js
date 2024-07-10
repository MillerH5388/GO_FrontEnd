document.addEventListener('go_authetication', async () => {

    const container_topo = document.querySelector("#component_topo")
    if(!container_topo) return false


    const VueTopoData = {
        data(){
            return{
                usuario: usuario_global
            }
        },
        methods:{
            
        },
        async mounted() {
            
        }
    }

    const VueTopo = Vue.createApp(VueTopoData).mount('#component_topo')
    
});