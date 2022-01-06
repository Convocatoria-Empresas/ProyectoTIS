<template>
    <div class="row">
        <div class="text-center col">
            <h1>REGISTRO DE CONVOCATORIA</h1><h2></h2>
        </div>
        <div class="col-12">
            <div class="card">

                <div class="card-header"><h4> <strong>Registrar Convocatoria</strong></h4></div>
                <div class="card-body">
                    <form class="form-group" @submit.prevent="submit">
        <label for="title">El registro</label>
        <hr>
        <label for="content">Título</label>
        <input class="form-control" id="Titulo" type="text" v-model="convocatoria.Titulo">
        <label for="content">Código</label>
        <input maxlength="5" class="form-control" id="Codigo_Conv" type="text" v-model="convocatoria.Codigo_Conv">
        <label for="content">Gestión</label>
        <input class="form-control" id="Gestion" type="text" v-model="convocatoria.Gestion">
        <label for="content">Asesor</label>
        <input class="form-control" id="Asesor" type="text" v-model="convocatoria.Asesor">
        <label for="content">Correo Asesor</label>
        <input class="form-control" id="Asesor_corr" type="text" v-model="convocatoria.Correo_Ase">
        <label for="content">Fecha</label>
        <input class="form-control" id="Fecha" type="date" v-model="convocatoria.Fecha">
        <label for="content">Descripción</label>
        <input class="form-control" id="Descripcion" type="text" v-model="convocatoria.Descripcion">



        <label for="content">Información sobre A</label>
        <input class="form-control" id="Informacion_1" type="file" @change="processFileInf1">
        <!--<embed :src="algo" type="application/pdf" width="100%" height="600px" /> -->
        <label for="content">Información sobre B</label>
        <input class="form-control" id="Informacion_2" type="file" @change="processFileInf2">

        <div class="col-lg-4">
            <button type="submit" class="btn btn-primary mt-3">Crear Convocatoria</button>
            <router-link :to='{name:"convocatoria"}' class="btn btn-danger mt-3"><i class="far fa-ballot-check"></i> Cancelar
            </router-link>
        </div>

        <!--{{ convocatoria }} -->


    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    /*async mounted(){
        const response = await axios.get("/create");
        const data= response.data;
        console.log(data);
    },*/

    data() {
        return{
        convocatoria:{

            Titulo:"",
            Codigo_Conv:"",
            Gestion:"",
            Asesor:"",
            Correo_Ase:"",
            Fecha:"",
	        Descripcion:"",
            Informacion_A:"",
            Informacion_B:"",
            },
            algo: ''

        }


    },

    methods:{

        async submit(){

            await axios.post('/api/convocatoria', this.convocatoria);



            this.convocatoria.Titulo="";
            this.convocatoria.Codigo_Conv="";
            this.convocatoria.Gestion="";
            this.convocatoria.Asesor="";
            this.convocatoria.Correo_Ase="";
            this.convocatoria.Fecha="";
	        this.convocatoria.Descripcion="";
            this.convocatoria.Informacion_A="";
            this.convocatoria.Informacion_B="";
            //console.log(this.response);

            this.$router.push({name:"convocatoria"});

        },
        processFileInf1(event){
            const self= this;
             var In1file= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {
            //console.log(evt.target.result);

            self.convocatoria.Informacion_A=reader.result;
            //console.log(self.algo);
            };
            reader.readAsDataURL(In1file);

        },

         processFileInf2(event){
             const self= this;
            var In2file= event.target.files[0];
            const reader = new FileReader();
             reader.onload = function(evt) {
            self.convocatoria.Informacion_B=reader.result;
            };
            reader.readAsDataURL(In2file);

        },

    },
}
</script>
