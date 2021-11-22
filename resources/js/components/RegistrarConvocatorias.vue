<template>
    <div class="row">
        <div class="text-center col">
            <h1>REGISTRO DE EMPRESA</h1><h2></h2>
        </div>
        <div class="col-12">
            <div class="card">

                <div class="card-header"><h4> <strong>Registrar Convocatorias</strong></h4></div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div  class="row">
                            <div  class="row needs-validation" novalidate>
                            <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Titulo</strong></label>
                                <input maxlength="7" minlength="7" type="text" placeholder="" name="Titulo" class="form-control" id="Titulo"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llene el NIT de la Empresa, solo se aceptan numeros ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Gestión</strong></label>
                                <input maxlength="7" minlength="7" type="text" placeholder="Nombre completo" name="Asesor" class="form-control" id="Asesor"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llene el NIT de la Empresa, solo se aceptan numeros ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                
                                
                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Asesor</strong></label>
                                <input maxlength="7" minlength="7" type="text" placeholder="Nombre completo" name="Asesor" class="form-control" id="Asesor"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llene el NIT de la Empresa, solo se aceptan numeros ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                 
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Fecha Limite</strong></label>
                                <input maxlength="7" minlength="7" type="text" placeholder="Nombre completo" name="Asesor" class="form-control" id="Asesor"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llene el NIT de la Empresa, solo se aceptan numeros ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                 
                                 
                                </div>
                            </div>
                             <div class="row">
                               <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>información Sobre A</strong></label>
                                <input class="form-control" accept=".pdf" type="file" id="Documento_1" required>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>información Sobre B</strong></label>
                                <input class="form-control" accept=".pdf" type="file" id="Documento_1" required>
                                </div>
                                </div>
                                

                            <div class="col-lg-20 offset-md-1">
                            <label for="validationCustom01" class="form-label"><strong>Descripcion</strong></label>
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-6">
                                <textarea class="form-control" id="Descripcion" name="Descripcion" placeholder="" rows="7"></textarea>
                                
                            </div>
                            
                           
                            <div class="form-group">
                            
                            

                            </div>
                            </div>
                            <div class="row">
                                   
                                    
                                     <label for="validationCustom01" class="form-label"></label>
                                     <div class="row">
                                     <div class="col-lg-10 offset-md-1">
                                     <button type="submit" class="btn btn-lg btn-danger">Cancelar</button>
                                     </div>
                                     <div class="col-lg-1">
                                     <button type="submit" class="btn btn-lg btn-success">Registrar</button>
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