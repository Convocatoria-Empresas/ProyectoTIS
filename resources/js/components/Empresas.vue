<template>
    <div class="container mt-4">
        <div class="row">
            <div class="mb-5 text-center col">
            <h1>Historial de Empresas Registradas</h1>
            <hr>
            <div class="mb-5 input-group">
                <router-link :to='{name:"regEmpresa"}' class="btn btn-success">
                    <i class="fas fa-user-plus"></i> Registrar Empresa
                </router-link>
                <span class="input-group-text" id="basic-addon1"><i class="fad fa-file-signature"></i>  Nombre de la empresa -></span>
                <input type="text" class="form-control" placeholder="Buscar el nombre de la empresa registrada" aria-label="Burcar el nombre de la empresa registrada" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button type="button" class="btn btn-primary"><i class="fas fa-search"></i> Buscar</button>
                </div>
            </div>
            <!-- <table class="table table-hover table-dark ">
                <thead>
                    <tr>
                    <th scope="col">N°</th>
                    <th scope="col">Gestión</th>
                    <th scope="col">Nombre de la Empresa</th>
                    <th scope="col">Asesor</th>
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
                    <td >Larry the Bird</td>
                    <td></td>
                    <td>@twitter</td>
                    </tr>
                    <tr>
                        <td scope="row">4</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table> -->
             <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre Largo</th>
                    <th scope="col">Nombre Corto</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">NIT</th>
                    <th scope="col">Socio 1</th>
                    <th scope="col">Socio 2</th>
                    <th scope="col">Socio 3</th>
                    <th scope="col">Socio 4</th>
                    <th scope="col">Socio 5</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="blog of blogs" :key="blog.id">
                    <th scope="row">{{ blog.id }}</th>
                    <td>{{blog.Nombre_Largo}}</td>
                    <td>{{blog.Nombre_Corto}}</td>
                    <td>{{blog.Correo_electronico}}</td>
                    <td>{{blog.Telefono}}</td>
                    <td>{{blog.NIT}}</td>
                    <td>{{blog.Socio_1}}</td>
                    <td>{{blog.Socio_2}}</td>
                    <td>{{blog.Socio_3}}</td>
                    <td>{{blog.Socio_4}}</td>
                    <td>{{blog.Socio_5}}</td>
                    <td>
                        <!-- llamamos al componente para Editar     -->
                        <router-link :to='{name:"editarEmpre",params:{id:blog.id}}' class="btn btn-info"><i class="fas fa-edit"></i></router-link>
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
        this.mostrarEmp()
    },
    methods:{

        
        async mostrarEmp(){
            await this.axios.get('/api/empresa').then(response=>{
                console.log(response.data)
                this.blogs = response.data
            }).catch(error=>{
                console.log(error)
                this.blogs = []
            })
            
 
        },
        async  borrarBlog(id){
           // if(confirm("¿Confirma eliminar el registro?")){
                console.log(id)
                    await this.axios.delete('/api/empresa/' +id).then(response=>{
                console.log(response.data)
                this.blogs = response.data
            }).catch(error=>{
                console.log(error)

            })
            
        }
    }
}
</script>

