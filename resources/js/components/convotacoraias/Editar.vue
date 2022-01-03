<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Editar Convocatoria</h4></div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                         <div class="row">
                            <div class="mb-2 col-12">
                                <div class="form-group">
                        
                                    <label for="content">Título</label>
                                    <input class="form-control" id="Titulo" type="text" v-model="convocatoria.Titulo">
                                </div>
                            </div>
                            <div class="mb-2 col-12">

                                <div>
                                <label for="content">Gestión</label>    
                                <input class="form-control" id="Gestion" type="text" :placeholder="this.convocatoria.Gestion" v-model="convocatoria.Gestion">
                                <label for="floatingTextarea2">Asesor</label>
                                <input class="form-control" id="Asesor" type="text" :placeholder="this.convocatoria.Asesor" v-model="convocatoria.Asesor">
                                <label for="floatingTextarea2">Correo Asesor</label>
                                <input class="form-control" id="Asesor_corr" type="text" :placeholder="this.convocatoria.Correo_Ase" v-model="convocatoria.Correo_Ase">
                                <label for="floatingTextarea2">Fecha</label>
                                <input class="form-control" id="Fecha" type="date" :placeholder="this.convocatoria.Fecha" v-model="convocatoria.Fecha">
                                <label for="content">Descripción</label>
                                <input class="form-control" id="Descripcion" type="text" :placeholder="this.convocatoria.Descripcion" v-model="convocatoria.Descripcion">
                                <label for="content">Información sobre A</label>
                                <input class="form-control" id="Informacion_1" type="file" @change="processFileInf1">
                                <label for="content">Información sobre B</label>
                                <input class="form-control" id="Informacion_2" type="file" @change="processFileInf2">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-success">Guardar Cambios</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-blog",
    data(){
        return {
            convocatoria:{
            Titulo:"",
            Gestion:"",
            Asesor:"",
            Fecha:"",
	        Descripcion:"",
            Informacion_A:"",
            Informacion_B:"",
            }
        }
    },
    mounted(){
        this.mostrarBlog()
    },
    methods:{
        async mostrarBlog(){
            await this.axios.put(`/api/convocatoria/mostrar/${this.$route.params.id}`, this.convocatoria).then(response=>{              

                this.convocatoria.Codigo_Conv= response.data.Codigo_Conv
                this.convocatoria.Titulo= response.data.Titulo
                this.convocatoria.Descripcion= response.data.Descripcion
                this.convocatoria.Asesor= response.data.Asesor
                this.convocatoria.Correo_Ase= response.data.Correo_Ase
                this.convocatoria.Fecha= response.data.Fecha
                this.convocatoria.Informacion_A= response.data.Informacion_A
                this.convocatoria.Informacion_B= response.data.Informacion_B
                this.convocatoria.Gestion= response.data.Gestion

            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/convocatoria/${this.$route.params.id}`,this.convocatoria).then(response=>{
                console.log(response.data)
                this.$router.push({name:"convocatoria"})
            }).catch(error=>{
                console.log(error)
            })
        },
        processFileInf1(event){
            const self= this;
             var In1file= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {
            self.convocatoria.Informacion_A=reader.result;
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
    }
}
</script>