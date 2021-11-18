<template>
    <div class="row">
        <div class="text-center col">
            <h1>REGISTRO DE EMPRESA</h1><h2></h2>
        </div>
        <div class="col-12">
            <div class="card">

                <div class="card-header"><h4> <strong>Registrar Empresa</strong></h4></div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div  class="row">
                            <div  class="row needs-validation" novalidate>

                                <div class="col-lg-5 offset-md-1" >
                                <label for="validationCustom01" class="form-label"><strong>Nombre Largo</strong></label>
                                <input maxlength="30" type="text" placeholder="Nombre Largo Empresa" name="NombreLargo" class="form-control" id="NombreLargo"  required pattern="[a-zA-Z- -\.]+"
                                oninvalid="setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Socios (Codigo SIS)</strong></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Representante Legal" name="Socio1" class="form-control" id="Socio1"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-5 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Nombre Corto</strong></label>
                                <input maxlength="20"  type="text" placeholder="Nombre Corto Empresa" name="NombreCorto" class="form-control" id="NombreCorto"  required pattern="[a-zA-Z- -\.]+"
                                oninvalid="setCustomValidity('Porfavor llena el nombre corto con caracteres de la A-Z')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Integrante" name="Socio2" class="form-control" id="Socio2"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS  ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-5 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Correo de la Empresa</strong></label>
                                <input type="email" name="email" class="form-control"  id="Correo_Emp" required pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)[.][a-zA-Z]{1,5}"
                                oninvalid="setCustomValidity('Por favor ingresa una dirección de correo valida ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Integrante" name="Socio3" class="form-control" id="Socio3"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Telefono</strong></label>
                                <input maxlength="8" minlength="7" type="text" placeholder="Telefono Empresa" name="Telefono" class="form-control" id="Telefono"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llene el Telefono, solo se aceptan numeros y el minumo son 7 digitos')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-2">
                                <label for="validationCustom01" class="form-label"></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Integrante" name="Socio4" class="form-control" id="Socio 4"   pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>NIT</strong></label>
                                <input maxlength="7" minlength="7" type="text" placeholder="NIT Empresa" name="NIT" class="form-control" id="NIT"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llene el NIT de la Empresa, solo se aceptan numeros ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-2">
                                 <label for="validationCustom01" class="form-label"></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Integrante" name="Socio5" class="form-control" id="Socio5"  pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS  ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                            </div>
                            <div class="row">
                               <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Solvencia Tecnica</strong></label>
                                <input class="form-control" accept=".pdf" type="file" id="Documento_1" required>
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                <label for="formFile" class="form-label"><strong>Plan de Pago</strong></label>
                                <input class="form-control"  accept=".pdf" type="file" id="Documento_2" required>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Constitución de la Empresa</strong></label>
                                <input class="form-control" accept=".pdf" type="file" id="Documento_3" required>
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                <label for="formFile" class="form-label"><strong>Carta de Presentación</strong></label>
                                <input class="form-control" accept=".pdf" type="file" id="Documento_4" required>
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
</template>

<script>
export default {
    name:"crear-blog",
    data(){
        return {
            blog:{
                titulo:"",
                Descripcion:""
            }
        }
    },
    methods:{
        async crear(){
            await this.axios.post('/api/blog',this.blog).then(response=>{
                this.$router.push({name:"mostrarBlogs"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

<script type="text/javascript">
    function validarExt(){

        var archivoInput = document.getElementById('Documento_1');
        var archivoRuta = archivoInput.value;
        var extPermitida = /(.pdf)$/i;

        if(!extPermitida.exec(archivoRuta)){
            alert('Asegurate de haber seleccionado un PDf');
            archivoInput.value;
            return false;
        }
        else{

                if(archivoInput.files && archivoInput[0]){

                        var visor = new FileReader();
                        visor.onload=function(e){
                        document.getElementById('visorArchivo').innerHTML= '<embed src="+e.target.result" width>';

                        }
                }


        }

    }

</script>
