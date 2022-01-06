<template>
    <div class="row">
        <h1>Mis datos de Postulante</h1>
        <hr>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4> <strong>Revisión de la Grupo-Empresa</strong></h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                        <div  class="row">
                            <div  class="row needs-validation" novalidate>

                                <div class="col-lg-4 offset-md-1" >

                                <label for="validationCustom01" class="form-label"><strong>Nombre Largo</strong></label>
                                <input class="form-control" type="text" :placeholder="this.laempresa.Nombre_Largo" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Socios (Codigo SIS)</strong></label>
                                <input class="form-control" type="text" :placeholder="this.laempresa.Socio_1" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>



                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Socio 2</strong></label>
                                <input class="form-control" type="text" :placeholder="this.laempresa.Socio_2" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>



                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Socio 3</strong></label>
                                <input class="form-control" type="text" :placeholder="this.laempresa.Socio_3" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>



                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Socio 4</strong></label>
                                <input class="form-control" type="text" :placeholder="this.laempresa.Socio_4" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>



                                <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Socio 5</strong></label>
                                <input class="form-control" type="text" :placeholder="this.laempresa.Socio_5" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                 <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Correo de la Empresa</strong></label>
                                <input class="form-control" type="text" :placeholder="this.laempresa.Correo_electronico" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                            </div>
                            <div class="row">
                               <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Solvencia Tecnica</strong></label>
                                <button  class="btn btn-primary mb-2">Descargar</button>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Plan de Pago</strong></label>
                                <button  class="btn btn-primary mb-2">Descargar</button>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Constitución de la Empresa</strong></label>
                                <button  class="btn btn-primary mb-2">Descargar</button>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Carta de Presentación</strong></label>
                                <button  class="btn btn-primary mb-2">Descargar</button>
                                </div>
                            </div>
                            <div class="row">

                                    <div class="col-lg-6">
                                    <label for="validationCustom01" class="form-label"></label>
                                    <div class="row">

                                    <div class="form-group col-md-4">

                                    <div class="col-auto my-1">
                                         <label class="mr-sm-2" for="inlineFormCustomSelect">Estado</label>
                                         <select class="custom-select mr-sm-2" id="inlineFormCustomSelect"  @change="AcpeRe($event)" required>
                                           <option disabled selected>Aceptar/Rechazar</option>
                                           <option value=1 >Aceptar</option>
                                           <option value=0 >Rechazar</option>
                                         </select>
                                       </div>
                                    </div>
                                    <div class="col-lg-4">
                                    <button type="submit" class="btn btn-lg btn-success">Aceptar</button>
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

    name:"laempresa",
    data(){
        return {
            laempresa:
            {
             Nombre_Largo: "",
             Correo_electronico: "",
             Solvencia: "",
             Constitucion: "",
             Plan_Pago: "",
             Carta: "",
             Socio_1: "",
             Socio_2: "",
             Socio_3: "",
             Socio_4: "",
             Socio_5: "",
             AsesordeEmp: "",
             GetiodeEmp: "",
            }

        }
    },
    mounted(){
        this.mostrarEmp()
    },
    methods:{

        async mostrarEmp(){
            await this.axios.put(`/api/empresa/${this.$route.params.id}`, this.laempresa).then(response=>{
                console.log(response.data)
                this.laempresa.Nombre_Largo = response.data.Nombre_Largo
                this.laempresa.Correo_electronico = response.data.Correo_electronico
                this.laempresa.Plan_Pago = response.data.Plan_Pago
                this.laempresa.Constitucion = response.data.Constitucion
                this.laempresa.Carta = response.data.Carta
                this.laempresa.Solvencia = response.data.Solvencia
                this.laempresa.Socio_1 = response.data.Socio_1
                this.laempresa.Socio_2 = response.data.Socio_2
                this.laempresa.Socio_3 = response.data.Socio_3
                this.laempresa.Socio_4 = response.data.Socio_4
                this.laempresa.Socio_5 = response.data.Socio_5
                this.laempresa.AsesordeEmp = response.data.AsesordeEmp
                this.laempresa.GetiodeEmp = response.data.GetiodeEmp
                //this.laempresa.Estado_Aprob = response.data.Estado_Aprob

                console.log(this.laempresa.Nombre_Largo)

            }).catch(error=>{
                console.log(error)
            })

        },
         AcpeRe(e){
            if(e.target.value==1){
                this.laempresa.Estado_Aprob = 1;

            }
            else{
                this.laempresa.Estado_Aprob = 0;
            }
            console.log(this.laempresa.Estado_Aprob);
        },

        async actualizar(){
           /* await this.axios.put(`/api/empresa/${this.$route.params.id}`,this.laempresa).then(response=>{
                console.log(response.data)
                this.$router.push({name:"SegPostulante"})
            }).catch(error=>{
                console.log(error)
            })*/
            this.$router.push({name:"SegPostulante"})
        }
    }
}
</script>
