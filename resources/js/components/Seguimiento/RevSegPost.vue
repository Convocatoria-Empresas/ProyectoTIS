<template>
    <div class="row">
        <h1>Revision de los Postulantes</h1>
        <hr>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4> <strong>Registrar Empresa</strong></h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="RegEmpresa">
                        <div  class="row">
                            <div  class="row needs-validation" novalidate>

                                <div class="col-lg-5 offset-md-1" >
                             
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
                                 <label for="validationCustom01" class="form-label"><strong>Correo de la Empresa</strong></label>
                                <input class="form-control" type="text" :placeholder="this.laempresa.Correo_electronico" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Socio 3</strong></label>
                                <input class="form-control" type="text" :placeholder="this.laempresa.Socio_3" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                

                                <div class="col-lg-4 offset-md-2">
                                <label for="validationCustom01" class="form-label"><strong>Socio 4</strong></label>
                                <input class="form-control" type="text" :placeholder="this.laempresa.Socio_4" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                

                                <div class="col-lg-4 offset-md-2">
                                 <label for="validationCustom01" class="form-label"><strong>Socio 5</strong></label>
                                <input class="form-control" type="text" :placeholder="this.laempresa.Socio_5" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                            </div>
                            <div class="row">
                               <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Solvencia Tecnica</strong></label>
                                <button type="submit" class="btn btn-primary mb-2">Descargar</button>
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                <label for="formFile" class="form-label"><strong>Plan de Pago</strong></label>
                                <button type="submit" class="btn btn-primary mb-2">Descargar</button>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Constitución de la Empresa</strong></label>
                                <button type="submit" class="btn btn-primary mb-2">Descargar</button>
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                <label for="formFile" class="form-label"><strong>Carta de Presentación</strong></label>
                                <button type="submit" class="btn btn-primary mb-2">Descargar</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-5 offset-md-1">
                                <li> <a href="https://www.facebook.com/lacocoyodotcom/" target="_blank" class="nav-link text-info">Mas información</a></li>
                                </div>
                                    <div class="col-lg-6">
                                    <label for="validationCustom01" class="form-label"></label>
                                    <div class="row">
                                   <!-- <div class="col-lg-6 offset-md-2">
                                    <button type="submit" class="btn btn-lg btn-danger">Cancelar</button>
                                    </div>-->
                                    <div class="form-group col-md-4">
                                    
                                    <div class="col-auto my-1">
                                         <label class="mr-sm-2" for="inlineFormCustomSelect">Estado</label>
                                         <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                           <option selected>Aceptar/Rechazar</option>
                                           <option value="1" v-bind="AcpeRe(true)">Aceptar</option>
                                           <option value="2" v-bind="AcpeRe(false)">Rechazar</option>
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
                console.log(this.laempresa.Nombre_Largo)
                
            }).catch(error=>{
                console.log(error)
            })
            
        },
        async AcpeRe(e){
            if(e){
                this.laempresa.Estado_Aprob = 1;
                
            }
            else{
                this.laempresa.Estado_Aprob = 0;
            }
            console.log(this.laempresa.Estado_Aprob);
        },
        
        async actualizar(){
            await this.axios.put(`/api/empresa/${this.$route.params.id}`,this.empresa).then(response=>{
                console.log(response.data)
                this.$router.push({name:"laempresa"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>