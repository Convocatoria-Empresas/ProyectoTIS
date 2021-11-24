<template>
    <div>
        <h1 class="text-center">Empresas Registradas</h1>
        <hr>
        <!-- Button trigger modal -->
        <button @click="update=false; openModal();" type="button" class="btn btn-primary"  >
        Nueva Empresa
        </button>

        <!-- Modal -->
        <div class="modal" :class="{show:modal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{titleModal}}</h5>
                <button @click="closeModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button @click="closeModal" type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success">Guardar cambios</button>
            </div>
            </div>
        </div>
        </div>
        <table class="table table-striped table-hover">
        <thead class="thead-dark">
            <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre(s)</th>
            <th scope="col">Apellido(s)</th>
            <th scope="col">Email</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Codigo SIS</th>
            <th scope="col">Domicilio</th>
            <th scope="col" colspan="2" class="text-center">Usabilidad</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="empresa in empresas" :key="empresa.id">
            <th scope="row">{{empresa.id}}</th>
            <td>{{empresa.first_name}}</td>
            <td>{{empresa.last_name}}</td>
            <td>@{{empresa.email}}</td>
            <td>@{{empresa.phone}}</td>
            <td>@{{empresa.cod_sis}}</td>
            <td>@{{empresa.domicilio}}</td>
            <th>
                <button @click="update=true; openModal(empresa.id);" class="btn btn-warning">Editar</button>
            </th>
            <th>
                <button @click="eliminar(empresa.id)" class="btn btn-danger">Elminar</button>
            </th>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                update:true,
                modal: 0,
                titleModal:'',
                empresas:[],
            }
        },
        methods:{
            async list(){
                const res = await axios.get('empresa');
                this.empresas = res.data;
            },
            async eliminar(id){
                const res = await axios.delete('/empresa/' +id);
                this.list();
            },
            openModal(id=0){
                this.modal=1;
                if(this.update){
                    this.titleModal="Modificar Empresa";
                }else{
                    this.titleModal="Crear Contacto";
                }
            },
            closeModal(){
                this.modal=0;
            }
        },
        created(){
            this.list();
        }
    }
</script>

<style>
    .show{
        display: list-item;
        opacity:1;
        background: rgba(44,38,75,0.849);
    }
</style>
