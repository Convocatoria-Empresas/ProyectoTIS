<template>
    <div class="row">
        <div class="text-center col">
            <h1>REGISTRO DE EMPRESA</h1><h2></h2>
        </div>
        <div class="col-12">
            <div class="card">

                <div class="card-header"><h4> <strong>Registrar Empresa</strong></h4></div>
                <div class="card-body">
               <form @submit.prevent="submit">
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
                                oninvalid="setCustomValidity('Revise el codigo SIS deben ser 9 números')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-5 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Nombre Corto</strong></label>
                                <input maxlength="10"  type="text" placeholder="Nombre Corto Empresa" name="Nombre_Corto" class="form-control" id="Nombre_Corto" v-model="empresa.Nombre_Corto"  required pattern="[a-zA-Z- -\.]+"
                                oninvalid="setCustomValidity('Porfavor llena el nombre corto con caracteres de la A-Z ,máximo 10 char')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Integrante" name="Socio_2" class="form-control" id="Socio_2" v-model="empresa.Socio_2" required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS deben ser 9 números')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-5 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Correo de la Empresa</strong></label>
                                <input type="email" placeholder="Correo Empresa" name="email" class="form-control"  id="Correo_electronico" v-model="empresa.Correo_electronico" required pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                                oninvalid="setCustomValidity('Por favor ingresa una dirección de correo valida ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Integrante" name="Socio_3" class="form-control" id="Socio_3" v-model="empresa.Socio_3" required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS deben ser 9 números')" onchange="try{setCustomValidity('')}catch(e){}" />
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
                                oninvalid="setCustomValidity('Revise el codigo SIS deben ser 9 números')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>NIT</strong></label>
                                <input maxlength="7" minlength="7" type="text" placeholder="NIT Empresa" name="NIT" class="form-control" id="NIT"  v-model="empresa.NIT" required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llene el NIT de la Empresa, solo se aceptan numeros y deben ser 7 ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                 <label for="validationCustom01" class="form-label"></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Integrante" name="Socio_5" class="form-control" id="Socio_5" v-model="empresa.Socio_5" pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS deben ser 9 números')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                            </div>
                            <div class="row">
                               <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Solvencia Tecnica</strong></label>
                                <input class="form-control" accept=".pdf" type="file" @change="processFileSolv" id="Solvencia" required>
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                <label for="formFile" class="form-label"><strong>Plan de Pago</strong></label>
                                <input class="form-control"  accept=".pdf" type="file" @change="processFilePlan" id="Plan_Pago" required>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Constitución de la Empresa</strong></label>
                                <input class="form-control" accept=".pdf" type="file" @change="processFileConst" id="Constitucion" required>
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                <label for="formFile" class="form-label"><strong>Carta de Presentación</strong></label>
                                <input class="form-control" accept=".pdf" type="file" @change="processFileCarta" id="Carta" required>
                                </div>
                            </div>
                            <div class="row">
                                
                                     <div class="col-lg-6">
                                     <label for="validationCustom01" class="form-label"></label>
                                     <div class="row">
                                     <div class="col-lg-6 offset-md-2">
                                     <router-link :to='{name:"empresas"}' class="btn btn-danger mt-3"><i class="far fa-ballot-check"></i> Cancelar
            </router-link>
                                     </div>
                                     <div class="col-lg-4">
                                     <button type="submit" class="btn btn-lg btn-success">Registrar</button>
                                     </div>
                                     </div>
                                     </div>
                            </div>
                        </div>
                    </form>
                  <!--  <form class="form-group" @submit.prevent="submit">

        <hr>
        <label for="content"><i class="far fa-building"></i> Nombre Largo</label>
        <input class="form-control" id="Nombre_Largo" type="text" v-model="empresa.Nombre_Largo">
        <label for="content"><i class="fas fa-file-signature"></i> Nombre corto</label>
        <input class="form-control" id="Nombre_Corto" type="text" v-model="empresa.Nombre_Corto">
        <label for="content"><i class="fas fa-at"></i> Correo electrónico</label>
        <input class="form-control" id="Correo_electronico" type="text" v-model="empresa.Correo_electronico">
        <label for="content"><i class="fas fa-phone-volume"></i> Telefono</label>
        <input class="form-control" id="title" type="text" v-model="empresa.Telefono">
        <label for="content"><i class="fab fa-digg"></i> NIT</label>
        <input class="form-control" id="NIT" type="text" v-model="empresa.NIT">
        <hr>

        <label for="content"><i class="fas fa-file-pdf"></i> Solvencia</label>
        <input class="form-control"  id="Solvencia" type="file" @change="processFileSolv" >

        <label for="content"><i class="fas fa-file-pdf"></i> Constitución</label>
        <input class="form-control"  id="Constitucion" type="file" @change="processFileConst" >
        <label for="content"><i class="fas fa-file-pdf"></i> Plan de Pago</label>
        <input class="form-control" id="Plan_Pago" type="file" @change="processFilePlan">
        <label for="content"><i class="fas fa-file-pdf"></i> Carta</label>
        <input class="form-control" id="Carta" type="file" @change="processFileCarta">

        <hr>
        <label for="content"><i class="fas fa-user-tie"></i> Socio 1</label>
        <input class="form-control" id="Socio_1" type="text" v-model="empresa.Socio_1">
        <label for="content"><i class="fas fa-user-tie"></i> Socio 2</label>
        <input class="form-control" id="Socio_2" type="text" v-model="empresa.Socio_2">
        <label for="content"><i class="fas fa-user-tie"></i> Socio 3</label>
        <input class="form-control" id="Socio_3" type="text" v-model="empresa.Socio_3">
        <label for="content"><i class="far fa-user"></i> Socio 4</label>
        <input class="form-control" id="Socio_4" type="text" v-model="empresa.Socio_4">
        <label for="content"><i class="far fa-user"></i> Socio 5</label>
        <input class="form-control" id="Socio_5" type="text" v-model="empresa.Socio_5">

        <div class="col-lg-4">
            <button type="submit" class="btn btn-primary mt-3">Registrar</button>
            <router-link :to='{name:"EmpresaEst"}' class="btn btn-danger mt-3"><i class="far fa-ballot-check"></i> Cancelar
            </router-link>
        </div>



    </form>-->
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
            Nombre_Largo:"",
            Nombre_Corto:"",
            Correo_electronico:"",
            Telefono:"",
	        NIT:"",
            Solvencia:"",
            Constitucion:"",
            Plan_Pago:"",
            Carta:"",
            Socio_1:"",
            Socio_2:"",
            Socio_3:"",
            Socio_4:"",
            Socio_5:"",
            AsesordeEmp:"",
            GetiodeEmp:"",
            Estado_Aprob:"",
            }
        }

    },

     methods:{

        async submit(){
            console.log("Todo bien aquí");
 
           await axios.post('/api/empresa', this.empresa);
           console.log("El problema es aquí");
            this.empresa.Nombre_Largo = "";
            this.empresa.Nombre_Corto = "";
            this.empresa.Correo_electronico = "";
            this.empresa.Telefono = "";
	        this.empresa.NIT = "";
            this.empresa.Solvencia = "";
            this.empresa.Constitucion = "";
            this.empresa.Plan_Pago = "";
            this.empresa.Carta = "";
            this.empresa.Socio_1 = "";
            this.empresa.Socio_2 = "";
            this.empresa.Socio_3 = "";
            this.empresa.Socio_4 = "";
            this.empresa.Socio_5 = "";
            this.empresa.AsesordeEmp = "";
            this.empresa.GetiodeEmp = "";
            this.empresa.Estado_Aprob= 0;
            //onsole.log(this.response);

            this.$router.push({name:"empresas"});

        },
        processFileSolv(event){
             const self= this;
             var Solv= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {

            self.empresa.Solvencia=reader.result;
            };
            reader.readAsDataURL(Solv);


            console.log("Esto me mostrará el tipo de dato");
            console.log(typeof reader.result);

        },

         processFileConst(event){
            const self= this;
             var Consti= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {

            self.empresa.Constitucion=reader.result;
            };
            reader.readAsDataURL(Consti);
        },
         processFilePlan(event){
            const self= this;
             var Plande= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {

            self.empresa.Plan_Pago=reader.result;
            };
            reader.readAsDataURL(Plande);
        },
         processFileCarta(event){
            const self= this;
             var Car= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {

            self.empresa.Carta=reader.result;
            };
            reader.readAsDataURL(Car);
        }
    },
}
</script>


