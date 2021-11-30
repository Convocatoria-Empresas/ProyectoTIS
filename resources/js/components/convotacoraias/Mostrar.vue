<template>
    <div class="row">
        <div class="text-center col">
            <h1>Convocatorias de empresas</h1>
            <hr>
        </div>
        <div class="mb-2 col-12">
            <router-link :to='{name:"crearBlog"}' class="btn btn-success"><i class="fas fa-plus-circle"> Nueva Convocatoria</i></router-link>
        </div>
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-hover table-bordered">
                    <thead class="text-white bg-dark">
                        <tr>
                            <th>Gestión</th>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="blog in blogs" :key="blog.id">
                            <td>{{ blog.Gestion }}</td>
                            <td>{{ blog.Titulo }}</td>
                            <td>{{ blog.Descripcion }}</td>
                            <td>
                                <!-- llamamos al componente para Editar     -->
                                <router-link :to='{name:"editarBlog",params:{gestion:blog.gestion}}' class="btn btn-info"><i class="fas fa-edit"></i></router-link>
                                <a type="button" @click="borrarBlog(blog.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"blogs",
    data(){
        return {
            blogs:[]
        }
    },
    mounted(){
        this.mostrarBlogs()
    },
    methods:{
        async mostrarBlogs(){
            await this.axios.get('/api/convocatoria').then(response=>{
                console.log(response.data)
                this.blogs = response.data
            }).catch(error=>{
                console.log(error)
                this.blogs = []
            })
        },
        borrarBlog(id){
            if(confirm("¿Confirma eliminar el registro?")){
                    this.axios.delete('/api/convocatoria' + id).then(response=>{
                    this.mostrarBlogs()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
