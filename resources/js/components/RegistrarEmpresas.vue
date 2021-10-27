<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4> <strong>Registrar Empresas</strong></h4></div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div  class="row">
                            <div  class="row  needs-validation" novalidate>

                                <div class="col-lg-5 offset-md-1" >
                                <label for="validationCustom01" class="form-label"><strong>Nombre Largo</strong></label>
                                <input type="text" placeholder="Nombre Largo Empresa" name="Nombre_Largo" class="form-control" id="Nombre_Largo"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Socios (Codigo SIS)</strong></label>
                                <input type="text" placeholder="Representante Legal" name="Socio_1" class="form-control" id="Socio_1"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-5 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Nombre Corto</strong></label>
                                <input type="text" placeholder="Nombre Corto Empresa" name="Nombre_Corto" class="form-control" id="Nombre_Corto"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"></label>
                                <input type="text" placeholder="Integrante" name="Socio_2" class="form-control" id="Socio_2"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-5 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Dirección/Ubicación</strong></label>
                                <input type="text" placeholder="Dirección Empresa" name="Direccion" class="form-control" id="Direccion"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"></label>
                                <input type="text" placeholder="Integrante" name="Socio_3" class="form-control" id="Socio_3"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                
                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Telefono</strong></label>
                                <input type="text" placeholder="Telefono Empresa" name="Telefono" class="form-control" id="Telefono"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-2">
                                <label for="validationCustom01" class="form-label"></label>
                                <input type="text" placeholder="Integrante" name="Socio_4" class="form-control" id="Socio_4"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>NIT</strong></label>
                                <input type="text" placeholder="NIT Empresa" name="NIT" class="form-control" id="NIT"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                
                                <div class="col-lg-4 offset-md-2">
                                 <label for="validationCustom01" class="form-label"></label>
                                <input type="text" placeholder="Integrante" name="Socio_5" class="form-control" id="Socio_5"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                            </div>
                            <div class="row">
                               <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Solvencia Tecnica</strong></label>
                                <input class="form-control" type="file" id="Documento_1">
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                <label for="formFile" class="form-label"><strong>Plan de Pago</strong></label>
                                <input class="form-control" type="file" id="Documento_2">
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Constitución de la Empresa</strong></label>
                                <input class="form-control" type="file" id="Documento_3">
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                <label for="formFile" class="form-label"><strong>Carta de Presentación</strong></label>
                                <input class="form-control" type="file" id="Documento_4">
                                </div>
                            </div>
                            <div class="row">
                                   <div class="col-lg-5 offset-md-1">
                                  <li> <a href="https://www.facebook.com/lacocoyodotcom/" target="_blank" class="nav-link">Mas información</a></li>
                                  </div>
                                     <div class="col-lg-6">
                                     <label for="validationCustom01" class="form-label"></label>
                                     <div class="row">
                                     <div class="col-lg-6 offset-md-2">
                                     <button type="submit" class="btn btn-primary">Cancelar</button>
                                     </div>
                                     <div class="col-lg-4">
                                     <button @click="guardar();" type="submit" class="btn btn-primary">Registrar</button>
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

    name: 'empresa',
    data(){
        return {
            
            empresa:[],
 
        }
    },
    methods:{

        async listar() {
            const res = await axios.get('empresa');
            this.empresa = res.data;
    },
        
        async crear(){
            await this.axios.post('/api/blog',this.blog).then(response=>{
                this.$router.push({name:"mostrarBlogs"})
            }).catch(error=>{
                console.log(error)
            })
        },
        async guardar(){
                const res= await axios.post('/empresa', this.empresa);
                this.listar();

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
