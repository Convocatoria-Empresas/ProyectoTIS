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
                    <form @submit.prevent="actualizar">
                        <div  class="row">
                            <div  class="row needs-validation" novalidate>

                                <div class="col-lg-4 offset-md-1" >

                                <label for="validationCustom01" class="form-label"><strong>Nombre Largo</strong></label>
                                <input class="form-control" type="text" :placeholder="this.lapostulacion.PNombre_Largo" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Socios (Codigo SIS)</strong></label>
                                <input class="form-control" type="text" :placeholder="this.lapostulacion.PSocio_1" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>



                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Socio 2</strong></label>
                                <input class="form-control" type="text" :placeholder="this.lapostulacion.PSocio_2" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>



                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Socio 3</strong></label>
                                <input class="form-control" type="text" :placeholder="this.lapostulacion.PSocio_3" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Socio 4</strong></label>
                                <input class="form-control" type="text" :placeholder="this.lapostulacion.PSocio_4" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                

                                <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Socio 5</strong></label>
                                <input class="form-control" type="text" :placeholder="this.lapostulacion.PSocio_5" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                 <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Correo de la Empresa</strong></label>
                                <input class="form-control" type="text" :placeholder="this.lapostulacion.PCorreo_electronico" readonly>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                            </div>
                            <div class="row">
                               <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Solvencia Tecnica</strong></label>
                                
                              <a download=Solvencia :href="this.lapostulacion.PSolvencia" title='Download pdf document' >Descargar</a>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Plan de Pago</strong></label>
                                <a download=Plan_de_Pago :href="this.lapostulacion.PPlan_Pago" title='Download pdf document' >Descargar</a>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Constitución de la Empresa</strong></label>
                                <a download=Constitución :href="this.lapostulacion.PConstitucion" title='Download pdf document' >Descargar</a>
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Carta de Presentación</strong></label>
                                <a download=Carta :href="this.lapostulacion.PCarta" title='Download pdf document' >Descargar</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-5 offset-md-1">
                                <li> <a href="https://www.facebook.com/lacocoyodotcom/" target="_blank" class="nav-link text-info">Mas información</a></li>
                                </div>
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

    name:"lapostulacion",
    data(){
        return {
            lapostulacion: {
             PNombre_Largo: "",
             PCorreo_electronico: "",
             PSolvencia: "",
             PConstitucion: "",
             PPlan_Pago: "",
             PCarta: "",
             PSocio_1: "",
             PSocio_2: "",
             PSocio_3: "",
             PSocio_4: "",
             PSocio_5: "",
             PGetiodeEmp: "",
             PAsesordeEmp: "",
             PEstado_Aprob:"",
            }
            
        }
    },
    mounted(){
        this.mostrarEmp()
    },
    methods:{

        async mostrarEmp(){
            await this.axios.put(`/api/postulacion/${this.$route.params.id}`, this.lapostulacion).then(response=>{
                
                console.log(response.data)
                this.lapostulacion.PNombre_Largo = response.data.PNombre_Largo
                this.lapostulacion.PCorreo_electronico = response.data.PCorreo_electronico
                this.lapostulacion.PPlan_Pago = response.data.PPlan_Pago 
                this.lapostulacion.PConstitucion = response.data.PConstitucion
                this.lapostulacion.PCarta = response.data.PCarta
                this.lapostulacion.PSolvencia = response.data.PSolvencia
                this.lapostulacion.PSocio_1 = response.data.PSocio_1
                this.lapostulacion.PSocio_2 = response.data.PSocio_2
                this.lapostulacion.PSocio_3 = response.data.PSocio_3
                this.lapostulacion.PSocio_4 = response.data.PSocio_4
                this.lapostulacion.PSocio_5 = response.data.PSocio_5
                this.lapostulacion.PGetiodeEmp = response.data.PGetiodeEmp
                this.lapostulacion.PAsesordeEmp = response.data.PAsesordeEmp
                this.lapostulacion.PEstado_Aprob = response.data.PEstado_Aprob
                
                
            }).catch(error=>{
                console.log(error)
            })
            
        },
         AcpeRe(e){
            if(e.target.value==1){
                this.lapostulacion.Estado_Aprob = 1;
                
            }
            else{
                this.lapostulacion.Estado_Aprob = 0;
                
            }
            console.log(this.lapostulacion.Estado_Aprob);
        },
        
        async actualizar(){
          await this.axios.get(`/api/postulacion/${this.$route.params.id}/approve/${this.lapostulacion.Estado_Aprob}`,this.lapostulacion).then(response=>{        
                
            }).catch(error=>{
                console.log(error)
            })
          await this.axios.get(`/api/empresa/${this.lapostulacion.PNombre_Largo}/approve/${this.lapostulacion.Estado_Aprob}`,this.lapostulacion).then(response=>{        
                console.log("Debería ser capaz de encontrar por nombre")
                console.log(response.data)
            }).catch(error=>{
                console.log(error)
            })


            this.$router.push({name:"SegPostulante"}).catch(()=>{});
        },


    }
}
</script>