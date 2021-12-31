<template>
    <div class="container mt-4">
        <div class="row">
            <div class="text-center col">
                <h1>Tabla de Seguimiento para las Empresas</h1>
                <hr>
                <table class="table">
                <thead class="text-white bg-dark">
                        <tr>
                            <th>N°</th>
                            <th>Gestión</th>
                            <th>Nombre de la Empresa</th>
                            <th>Asesor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="blog in blogs" :key="blog.id">
                            <td>{{ blog.id }}</td>
                            <td>{{ blog.Gestion }}</td>
                            <td>{{ blog.nomb_empre }}</td>
                            <td>{{ blog.asesor }}</td>
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
                    this.axios.delete(`/api/blog/${id}`).then(response=>{
                    this.mostrarBlogs()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
