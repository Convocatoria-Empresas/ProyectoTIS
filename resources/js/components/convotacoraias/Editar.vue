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
                                <input class="form-control" id="Gestion" type="text" v-model="convocatoria.Gestion">
                                <label for="floatingTextarea2">Asesor</label>
                                <input class="form-control" id="Asesor" type="text" v-model="convocatoria.Asesor">
                                <label for="floatingTextarea2">Fecha</label>
                                <input class="form-control" id="Fecha" type="date" v-model="convocatoria.Fecha">
                                <label for="content">Descripción</label>
                                <input class="form-control" id="Descripcion" type="text" v-model="convocatoria.Descripcion">
                                <label for="content">Información sobre A</label>
                                <input class="form-control" id="Informacion_1" type="text" v-model="convocatoria.Informacion_A">
                                <label for="content">Información sobre B</label>
                                <input class="form-control" id="Informacion_2" type="text" v-model="convocatoria.Informacion_B">
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
        //this.mostrarBlog()
    },
    methods:{
        async mostrarBlog(){
            await this.axios.get(`/api/convocatoria/${this.$route.params.id}`).then(response=>{
                const { titulo, contenido } = response.data
                this.convocatoria.titulo = titulo
                this.convocatoria.contenido = contenido
            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/convocatoria/${this.$route.params.id}`,this.convocatoria).then(response=>{
                console.log(response.data)
                this.$router.push({name:"mostrarBlogs"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
