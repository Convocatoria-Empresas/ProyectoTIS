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
               <!--     <form @submit.prevent="submit">
                        <div  class="row">
                            <div  class="row needs-validation" novalidate>
                                <div class="col-lg-5 offset-md-1" >
                                <label for="validationCustom01" class="form-label"><strong>Nombre Largo</strong></label>
                                <input maxlength="30" type="text" placeholder="Nombre Largo Empresa" name="Nombre_Largo" class="form-control" id="Nombre_Largo" v-model="empresa.Nombre_Largo" required pattern="[a-zA-Z- -\.]+"
                                oninvalid="setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Socios (Codigo SIS)</strong></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Representante Legal" name="Socio_1" class="form-control" id="Socio_1" v-model="empresa.Socio_1"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-5 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Nombre Corto</strong></label>
                                <input maxlength="20"  type="text" placeholder="Nombre Corto Empresa" name="Nombre_Corto" class="form-control" id="Nombre_Corto" v-model="empresa.Nombre_Corto"  required pattern="[a-zA-Z- -\.]+"
                                oninvalid="setCustomValidity('Porfavor llena el nombre corto con caracteres de la A-Z')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Integrante" name="Socio_2" class="form-control" id="Socio_2" v-model="empresa.Socio_2" required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS  ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-5 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Correo de la Empresa</strong></label>
                                <input type="email" name="email" class="form-control"  id="Correo_electronico" v-model="empresa.Correo_electronico" required pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                                oninvalid="setCustomValidity('Por favor ingresa una dirección de correo valida ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Integrante" name="Socio_3" class="form-control" id="Socio_3" v-model="empresa.Socio_3" required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Telefono</strong></label>
                                <input maxlength="8" minlength="7" type="text" placeholder="Telefono Empresa" name="Telefono" class="form-control" id="Telefono" v-model="empresa.Telefono"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llene el Telefono, solo se aceptan numeros y el minumo son 7 digitos')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                <label for="validationCustom01" class="form-label"></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Integrante" name="Socio_4" class="form-control" id="Socio_4" v-model="empresa.Socio_4"  pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>NIT</strong></label>
                                <input maxlength="7" minlength="7" type="text" placeholder="NIT Empresa" name="NIT" class="form-control" id="NIT"  v-model="empresa.NIT" required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llene el NIT de la Empresa, solo se aceptan numeros ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                 <label for="validationCustom01" class="form-label"></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Integrante" name="Socio_5" class="form-control" id="Socio_5" v-model="empresa.Socio_5" pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS  ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                            </div>
                            <div class="row">
                               <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Solvencia Tecnica</strong></label>
                                <input class="form-control" accept=".pdf" type="file" id="Solvencia" required>
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                <label for="formFile" class="form-label"><strong>Plan de Pago</strong></label>
                                <input class="form-control"  accept=".pdf" type="file" id="Plan_Pago" required>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Constitución de la Empresa</strong></label>
                                <input class="form-control" accept=".pdf" type="file" id="Constitucion" required>
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                <label for="formFile" class="form-label"><strong>Carta de Presentación</strong></label>
                                <input class="form-control" accept=".pdf" type="file" id="Carta" required>
                                </div>
                            </div>
                            <div class="row">
                                   <div class="col-lg-5 offset-md-1">
                                  <li> <a href="https://www.facebook.com/lacocoyodotcom/" target="_blank" class="nav-link text-info">Mas información</a></li>
                                  </div>
                                     <div class="col-lg-6">
                                     <label for="validationCustom01" class="form-label"></label>
                                     <div class="row">
                                     <div class="col-lg-6 offset-md-2">
                                     <button type="submit" class="btn btn-lg btn-danger">Cancelar</button>
                                     </div>
                                     <div class="col-lg-4">
                                     <button type="submit" class="btn btn-lg btn-success">Registrar</button>
                                     {{ empresa }}
                                     </div>
                                     </div>
                                     </div>
                            </div>
                        </div>
                    </form>-->
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
