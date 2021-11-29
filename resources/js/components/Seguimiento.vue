<template>
    <div class="container mt-4">
        <div class="row">
            <div class="text-center col">
                <h1>Tabla de Seguimiento</h1>
                <hr>
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">N°</th>
                    <th scope="col">Gestión</th>
                    <th scope="col">Nombre de la Empresa</th>
                    <th scope="col">Representante Legal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
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
            await this.axios.get('/api/convoEmpre').then(response=>{
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
