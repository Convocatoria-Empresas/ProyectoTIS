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
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tablaSeg in tablasSeg" :key=" tablaSeg.id">
                        <th scope="row">{{ tablaSeg.id}}</th>
                        <td>{{ tablaSeg.GetiodeEmp}}</td>
                        <td>{{ tablaSeg.Nombre_Largo}}</td>
                        <td>{{ tablaSeg.Socio_1}}</td>
                        <td>{{ tablaSeg.Estado}}</td>
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
            await this.axios.get('/api/empresa').then(response=>{
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
