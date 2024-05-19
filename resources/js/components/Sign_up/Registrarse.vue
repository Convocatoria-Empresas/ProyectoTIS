<template>
    <main>
        <div class="row">
            <div class="text-center col">
                <h1>Registrarse en la Empresa TIS</h1>
                <hr>
                <p>Universidad Mayor de San Simón</p>
            </div>
            <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4> <strong class="text-center col"><i class="fas fa-address-card"></i> Registrarse</strong></h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="submit">
                        <div  class="row">
                            <div  class="row needs-validation" novalidate>
                                <div class="col-lg-4 offset-md-1" >
                                <label for="validationCustom01" class="form-label"><strong>Nombre(s)</strong></label>
                                <input maxlength="30" type="text" v-model="users.Nombre_usu" placeholder="Ej: José Luis" name="NombrePersonal" class="form-control" id="NombrePersonal"  required pattern="[a-zA-Z- -\.]+"
                                oninvalid="setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-1" >
                                    <label for="validationCustom01" class="form-label"><strong>Apellido Paterno</strong></label>
                                    <input maxlength="30" type="text" v-model="users.Apellido_Pat" placeholder="Ej: Romero" name="NombrePaterno" class="form-control" id="NombrePaterno"  required pattern="[a-zA-Z- -\.]+"
                                oninvalid="setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                    <div class="valid-feedback"></div>
                                </div>
                                <div class="col-lg-4 offset-md-1" >
                                    <label for="validationCustom01" class="form-label"><strong>Apellido Materno</strong></label>
                                    <input maxlength="30" type="text" v-model="users.Apellido_Mat" placeholder="Ej: Fernandez" name="NombreMaterno" class="form-control" id="NombreMaterno"  required pattern="[a-zA-Z- -\.]+"
                                oninvalid="setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                    <div class="valid-feedback"></div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Código SIS</strong></label>
                                <input maxlength="9" minlength="9" type="text" v-model="users.Codigo_usu" placeholder="Código SIS (sólo números)" name="CodigoSis" class="form-control" id="CodigoSis"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Correo electrónico</strong></label>
                                <input type="email" v-model="users.Correo_usu" name="email" class="form-control"  id="CorreoVigen" placeholder="Ej: pepitopelapapas@gmail.com"/>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Número de Celular</strong></label>
                                <input maxlength="8" minlength="7" type="text" v-model="users.Telf" placeholder="Debe ser vigente. Ej: 65316647" name="Celular" class="form-control" id="Celular"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llene el Celular, solo se aceptan numeros y el minumo son 8 digitos')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Carnet de Identidad</strong></label>
                                <input maxlength="7" minlength="7" type="text" v-model="users.Carnet" placeholder="Ej: 431579521" name="NIT" class="form-control" id="NIT"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llene el carnet de identidad, solo se aceptan numeros ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1" >
                                    <label for="validationCustom01" class="form-label"><strong>Contraseña</strong></label>
                                    <input maxlength="30" type="text" v-model="users.Contrasena_usu" placeholder="No debe ser muy fácil" name="Contrasena" class="form-control" id="Contrasena"  required pattern="[a-zA-Z- -\.]+[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llena la contraseña con letras y números')" onchange="try{setCustomValidity('')}catch(e){}" />
                                    <div class="valid-feedback"></div>
                                </div>

                                <div class="col-lg-4 offset-md-1" >
                                    <label for="validationCustom01" class="form-label"><strong>Confirmar Contraseña</strong></label>
                                    <input maxlength="30" type="text" placeholder="Escriba la misma contraseña" name="ContrasenaConf" class="form-control" id="ContrasenaConf"  required pattern="[a-zA-Z- -\.]+[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llena la contraseña con letras y números')" onchange="try{setCustomValidity('')}catch(e){}" />
                                    <div class="valid-feedback"></div>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                         <label class="form-label" for="inlineFormCustomSelect">¿A quién registra?</label>
                                         <select class="custom-select mr-sm-2" id="inlineFormCustomSelect"  @change="SelecTipoUsuar($event)" required>
                                           <option disabled selected>Seleccione</option>
                                           <option value=1 >Asesor</option>
                                           <option value=0 >Estudiante</option>
                                         </select>
                                       </div>

                                </div>
                            <div class="row">
                                <div class="text-center">
                                    <label for="validationCustom01" class="form-label"></label>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <router-link :to='{name:"Login"}' class="btn btn-danger"><i class="far fa-ballot-check"></i> Cancelar
                                            </router-link>
                                        </div>
                                        <div class="col-lg-4">
                                        <button type="submit" class="btn btn-success">Registrarse</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </main>
</template>

<script>
export default {



    data() {
        return{
            users:{

            Nombre_usu:"",
            Apellido_Pat:"",
            Apellido_Mat:"",
            Codigo_usu:"",
            Correo_usu:"",
            Telf:"",
            Carnet:"",
            Contrasena_usu:"",
            Rol_usu:"",
            }
        }

    },

     methods:{

        async submit(){

           const response = await axios.post('/api/user', this.users);


            this.users.Nombre_usu="";
            this.users.Apellido_Pat="";
            this.users.Apellido_Mat="";
            this.users.Codigo_usu="";
            this.users.Correo_usu="";
            this.users.Telf="";
            this.users.Carnet="";
            this.users.Contrasena_usu="";
            this.users.Rol_usu="";

            this.$router.push({name:"Login"});


        },

        SelecTipoUsuar(e){
            if(e.target.value==1){
                this.users.Rol_usu="Asesor";

            }
            else{
                this.users.Rol_usu="Estudiante";

            }

        }

    },
}
</script>
