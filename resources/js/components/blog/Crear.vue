<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Crear Convocatoria</h4></div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div class="mb-3">
                            <label for="tituloconvocatoria" class="form-label">Título</label>
                            <input type="email" class="form-control" id="tituloconvocatoria" aria-describedby="titulo" placeholder="Título de la convocatoria">
                            <h2></h2>
                            <div class="mb-3">
                            <label for="descripcionConvocatoria" class="form-label">Descripción</label>
                            <textarea class="form-control" id="descripcionConvocatoria" rows="3"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success">Registrar</button>
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
