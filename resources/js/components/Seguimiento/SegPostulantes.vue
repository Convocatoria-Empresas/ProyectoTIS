<template>
    <div class="container mt-4">
        <div class="row">
            <div class="text-center col">
                <h1>Tabla de Postulantes</h1>
                <hr>
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">N°</th>
                    <th scope="col">Gestión</th>
                    <th scope="col">Nombre de la Empresa</th>
                    <th scope="col">Representante Legal</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Revisar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tablaSeg in tablasSeg" :key=" tablaSeg.id">
                        <th scope="row">{{ tablaSeg.id}}</th>
                        <td>{{ tablaSeg.PNIT}}</td>
                        <td>{{ tablaSeg.PNombre_Largo}}</td>
                        <td>{{ tablaSeg.PSocio_1}}</td>
                        <a v-if="tablaSeg.PEstado_Aprob == 1">
                             <td>Aceptado</td>
                        </a>
                        <a v-else>
                             <td>Rechazado</td>
                        </a>     
                        <td>
                            <!-- llamamos al componente para Editar     -->
                            <router-link :to='{name:"RevSegPost",params: {id:tablaSeg.id}}' class="btn btn-info"><i class="fas fa-eye"></i></router-link>
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
    name:"tablasSeg",
    data(){
        return {
            tablasSeg:[]
        }
    },
    mounted(){
        this.mostrarSeg()
    },
    methods:{
        async mostrarSeg(){
            await this.axios.get('/api/postulacion').then(response=>{
                console.log(response.data)
                this.tablasSeg = response.data
            }).catch(error=>{
                console.log(error)
                this.tablasSeg = []
            })
        },

    }
}
</script>
