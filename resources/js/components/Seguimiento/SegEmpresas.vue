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
                            <th>Revisar Información</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="blog in blogs" :key="blog.id" >
                          
                            <td v-if="blog.Estado_Aprob == 1">{{ blog.id }}</td>
                            <td v-if="blog.Estado_Aprob == 1">{{ blog.GetiodeEmp }}</td>
                            <td v-if="blog.Estado_Aprob == 1">{{ blog.Nombre_Largo }}</td>
                            <td v-if="blog.Estado_Aprob == 1">{{ blog.AsesordeEmp }}</td>
                           
                            <td v-if="blog.Estado_Aprob == 1">
                                <!-- llamamos al componente para Editar     -->
                                <router-link :to='{name:"RevSegEmpre",params: {id:blog.id,asesorCorr:blog.AsesordeEmp} }' class="btn btn-info"><i class="fas fa-eye"></i> Revisar</router-link>
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
            await this.axios.get('/api/empresa').then(response=>{
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
