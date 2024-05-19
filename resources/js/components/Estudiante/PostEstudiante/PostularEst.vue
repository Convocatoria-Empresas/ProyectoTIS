<template>
    <div class="row">
        <div class="text-center col">
            <h1>Registro de Postulación</h1>
            <hr>
        </div>
        <div class="col-12">
            <div class="card">

                <div class="card-header"><h4> <strong>Llenar los datos para el registro a la Postulación</strong></h4></div>
                <div class="card-body">
               
                    <form class="form-group" @submit.prevent="submit">

        <label for="content"><i class="fas fa-signature"></i> Nombre Largo</label>
        <input class="form-control" placeholder="Nombre completo con la cual estan fundando la empresa" id="Nombre_Largo" type="text" v-model="empresa.PNombre_Largo">
        <label for="content"><i class="fas fa-file-signature"></i> Nombre corto</label>
        <input class="form-control" placeholder="Las siglas del nombre de la empresa" id="Nombre_Corto" type="text" v-model="empresa.PNombre_Corto">
        <label for="content"><i class="far fa-envelope"></i> Correo</label>
        <input class="form-control" placeholder="Correo de la empresa / representante legal" id="Correo_electronico" type="text" v-model="empresa.PCorreo_electronico">
        <label for="content"><i class="fas fa-mobile-alt"></i> Telefono</label>
        <input class="form-control" placeholder="Número de celular del representante legal" id="title" type="text" v-model="empresa.PTelefono">

        <label for="content"><i class="fas fa-address-card"></i> NIT</label>
        <input class="form-control" placeholder="Número NIT" id="nit" type="text" v-model="empresa.PNIT">
        <hr>

        <label for="content"><i class="fas fa-file-pdf"></i> Solvencia</label>
        <input class="form-control"  id="Solvencia" type="file" @change="processFileSolv" accept=".pdf" required>

        <label for="content"><i class="fas fa-file-pdf"></i> Constitución</label>
        <input class="form-control"  id="Constitucion" type="file" @change="processFileConst" accept=".pdf" required>
        <label for="content"><i class="fas fa-file-pdf"></i> Plan de Pago</label>
        <input class="form-control" id="Plan_Pago" type="file" @change="processFilePlan" accept=".pdf" required>
        <label for="content"><i class="fas fa-file-pdf"></i> Carta</label>
        <input class="form-control" id="Carta" type="file" @change="processFileCarta" accept=".pdf" required>

        <hr>
        <h5><i class="fas fa-user-friends"></i> Socios que conforman la empresa (Código SIS)</h5>
        <h6><p>Requisito: Mínimo deben ser 3 integrantes para conformar una Empresa</p></h6>
        <label for="content">Socio 1</label>
        <input class="form-control" placeholder="Código SIS del representante legal" id="Socio_1" type="text" v-model="empresa.PSocio_1">
        <label for="content">Socio 2</label>
        <input class="form-control" placeholder="Código SIS" id="Socio_2" type="text" v-model="empresa.PSocio_2">
        <label for="content">Socio 3</label>
        <input class="form-control" placeholder="Código SIS" id="Socio_3" type="text" v-model="empresa.PSocio_3">
        <label for="content">Socio 4</label>
        <input class="form-control" placeholder="Código SIS" id="Socio_4" type="text" v-model="empresa.PSocio_4">
        <label for="content">Socio 5</label>
        <input class="form-control" placeholder="Código SIS" id="Socio_5" type="text" v-model="empresa.PSocio_5">

        <router-link :to='{name:"ConvoEst"}' type="submit" class="btn btn-warning mt-3"> Volver</router-link>
        <button type="submit" class="btn btn-primary mt-3">Registrar mi Empresa</button>
    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {



    data() {
        return{
            empresa:{
                PNombre_Largo:"",
                PNombre_Corto:"",
                PCorreo_electronico:"",
                PTelefono:"",
	            PNIT:"",
                PSolvencia:"",
                PConstitucion:"",
                PPlan_Pago:"",
                PCarta:"",
                PSocio_1:"",
                PSocio_2:"",
                PSocio_3:"",
                PSocio_4:"",
                PSocio_5:"",
                PAsesordeEmp:"",
                PGetiodeEmp:"",
                PEstado_Aprob:"",
            },
            notificacion:{
                NTitulo:"",
                Texto:"",
                Emisor:"",
                Receptor:"",
                Leido:"", 
            }
        }

    },

     methods:{

        async submit(){

            this.empresa.PAsesordeEmp=this.$route.params.asesorCorr;
            this.empresa.PGetiodeEmp=this.$route.params.convoGestio;
            console.log("Se enviará ahora...");
            await axios.post('/api/postulacion', this.empresa);


            this.notificacion.NTitulo=`Postulación a Convocatoria de ${this.empresa.PNombre_Largo}`;
            this.notificacion.Texto="";
            this.notificacion.Emisor=this.empresa.PCorreo_electronico;
            this.notificacion.Receptor=this.$route.params.asesorCorr;
            this.notificacion.Leido=0;

            console.log("Ya etá registrado la postulación");
            await axios.post('/api/notificacion', this.notificacion);


            //Se regresa todo a las convocatorias
            this.$router.push({name:"convocatoria"});

        },
        processFileSolv(event){
             const self= this;
             var Solv= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {

            self.empresa.PSolvencia=reader.result;
            };
            reader.readAsDataURL(Solv);
        },

         processFileConst(event){
            const self= this;
             var Consti= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {

            self.empresa.PConstitucion=reader.result;
            };
            reader.readAsDataURL(Consti);
        },
         processFilePlan(event){
            const self= this;
             var Plande= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {

            self.empresa.PPlan_Pago=reader.result;
            };
            reader.readAsDataURL(Plande);
        },
         processFileCarta(event){
            const self= this;
             var Car= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {

            self.empresa.PCarta=reader.result;
            };
            reader.readAsDataURL(Car);
        }
    },
}
</script>
