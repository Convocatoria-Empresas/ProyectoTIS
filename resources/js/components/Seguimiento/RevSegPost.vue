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
                                <input class="fomr-control" type="text" placeholder="" readonly>
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



                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Integrante" name="Socio2" class="form-control" id="Socio2"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS  ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-5 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Correo de la Empresa</strong></label>
                                <input type="email" name="email" class="form-control"  id="Correo_Emp" placeholder="Correo Electrónico de la Empresa"/>
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

                                

                                <div class="col-lg-4 offset-md-2">
                                <label for="validationCustom01" class="form-label"></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Integrante" name="Socio4" class="form-control" id="Socio 4"   pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS ')" onchange="try{setCustomValidity('')}catch(e){}" />
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
    name:"laempresa",
    data(){
        return {
            laempresa:{
             ID: "",
             Nombre_Largo: "",
             Nombre_Corto: "",
             Correo: "",
             Teléfono: "",
             NIT: "",
             Solvencia: "",
             Constitución: "",
             Plan_de_Pago: "",
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
        //this.mostrarEmp()
    },
    methods:{
        async mostrarEmp(){
            await this.axios.get(`/api/empresa/${this.$route.params.id}`).then(response=>{
                const { Nombre_Largo, Correo, Plan_de_Pago, Constitucion, Carta,Solvencia, Socio_1, Socio_2, Socio_3, Socio_4, Socio_5 } = response.data
                this.empresa.Nombre_Largo = Nombre_Largo
                this.empresa.Correo = Correo
                this.empresa.Plan_de_Pago = Plan_de_Pago 
                this.empresa.Constitucion = Constitucion 
                this.empresa.Carta = Carta 
                this.empresa.Solvencia = Solvencia
                this.empresa.Socio_1 = Socio_1 
                this.empresa.Socio_2 = Socio_2
                this.empresa.Socio_3 = Socio_3 
                this.empresa.Socio_4 = Socio_4
                this.empresa.Socio_5 = Socio_5
                
            }).catch(error=>{
                console.log(error)
            })
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
