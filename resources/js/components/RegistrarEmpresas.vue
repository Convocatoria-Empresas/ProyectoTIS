<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Registrar Empresas</h4></div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div  class="row">
                            <div  class="row  needs-validation" novalidate>

                                <div class="col-lg-6">
                                <label for="validationCustom01" class="form-label">Nombre Largo</label>
                                <input type="text" name="NombreLargo"class="form-control" id="NombreLargo"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-6">
                                 <label for="validationCustom01" class="form-label">Socios (Codigo SIS)</label>
                                <input type="text" name="Socio1"class="form-control" id="Socio1"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-6">
                                <label for="validationCustom01" class="form-label">Nombre Corto</label>
                                <input type="text" name="NombreCorto"class="form-control" id="NombreCorto"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-6">
                                <label for="validationCustom01" class="form-label"></label>
                                <input type="text" name="Socio2"class="form-control" id="Socio2"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-6">
                                 <label for="validationCustom01" class="form-label">Dirección/Ubicación</label>
                                <input type="text" name="Dirección"class="form-control" id="Dirección"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-6">
                                <label for="validationCustom01" class="form-label"></label>
                                <input type="text" name="Socio3"class="form-control" id="Socio3"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                
                                <div class="col-lg-6">
                                <label for="validationCustom01" class="form-label">Telefono</label>
                                <input type="text" name="Telefono"class="form-control" id="Telefono"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-6">
                                <label for="validationCustom01" class="form-label"></label>
                                <input type="text" name="Socio4"class="form-control" id="Socio 4"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-6">
                                <label for="validationCustom01" class="form-label">NIT</label>
                                <input type="text" name="NIT"class="form-control" id="NIT"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                
                                <div class="col-lg-6">
                                 <label for="validationCustom01" class="form-label"></label>
                                <input type="text" name="Socio5"class="form-control" id="Socio5"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                            </div>
                            <div class="row">
                               <div class="col-lg-6">
                                <label for="formFile" class="form-label">Sobre A</label>
                                <input class="form-control" type="file" id="formFile">
                                </div>
                                <div class="col-lg-6">
                                <label for="formFile" class="form-label">Plan de pago</label>
                                <input class="form-control" type="file" id="formFile">
                                </div>
                                <div class="col-lg-6">
                                <label for="formFile" class="form-label">Sobre B</label>
                                <input class="form-control" type="file" id="formFile">
                                </div>
                                <div class="col-lg-6">
                                <label for="formFile" class="form-label">C.V</label>
                                <input class="form-control" type="file" id="formFile">
                                </div>
                            </div>
                            <div class="row">
                                   <div class="col-lg-6">
                                  <li> <a href="https://www.facebook.com/lacocoyodotcom/" target="_blank" class="nav-link">Mas información</a></li>
                                  </div>
                                     <div class="col-lg-6">
                                     <div class="row">
                                     <div class="col-lg-6">
                                     <button type="submit" class="btn btn-primary">Cancelar</button>
                                     </div>
                                     <div class="col-lg-6">
                                     <button type="submit" class="btn btn-primary">Registrar</button>
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
