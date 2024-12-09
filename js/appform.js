const objeto = [{
    nombre: '',
    apellido: '',
    hobby: '',
    nacimiento: ''
}];

const app = Vue.createApp({
    
    methods: {
        
        guardarDatos() {

            if (this.nombre !== '' || this.apellido !== '' || this.hobby !== '' || this.nacimiento !== '') {
                
                console.log(this.nombre);
                console.log(this.apellido);
                console.log(this.hobby);
                console.log(this.nacimiento);

                const nuevosObjetos = {
                    nombre: this.nombre,
                    apellido: this.apellido,
                    hobby: this.hobby,
                    nacimiento: this.nacimiento
                };

            
            this.listaObjetos.unshift(nuevosObjetos);

            this.limpiaDatos();
            }
            else{

                alert('Por favor, rellene todos los campos');
            }
        },

        limpiaDatos() {
            this.nombre = '';
            this.apellido = '';
            this.hobby = '';
            this.nacimiento = '';
        }
    },
    
    data() {
        return {
            listaObjetos: objeto,
        }
    }
});

app.mount('#app');