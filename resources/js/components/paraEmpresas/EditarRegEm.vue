<template>
    <div class="row">
        <div class="text-center col">
            <h1>EDICIÓN DE EMPRESA</h1><h2></h2>
        </div>
        <div class="col-12">
            <div class="card">

                <div class="card-header"><h4> <strong>Editar Empresa</strong></h4></div>
                <div class="card-body">
                    <form @submit.prevent="editar">
                        <div  class="row">
                            <div  class="row needs-validation" novalidate>

                                <div class="col-lg-5 offset-md-1" >
                                <label for="validationCustom01" class="form-label"><strong>Nombre Largo</strong></label>
                                <input maxlength="20" type="text" v-model="empresa.Nombre_Largo" :placeholder="this.empresa.Nombre_Largo" name="NombreLargo" class="form-control" id="NombreLargo"  required pattern="[a-zA-Z- -\.]+">
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Socios (Codigo SIS)</strong></label>
                                <input type="text" v-model="empresa.Socio_1" :placeholder="this.empresa.Socio_1" name="Socio1" class="form-control" id="Socio1"  required pattern="[0-9]+">
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-5 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Nombre Corto</strong></label>
                                <input type="text" v-model="empresa.Nombre_Corto" :placeholder="this.empresa.Nombre_Corto" name="NombreCorto" class="form-control" id="NombreCorto"  required pattern="[a-zA-Z- -\.]+">
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"></label>
                                <input type="text" v-model="empresa.Socio_2" :placeholder="this.empresa.Socio_2" name="Socio2" class="form-control" id="Socio2"  required pattern="[0-9]+">
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-5 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Correo</strong></label>
                                <input type="text" v-model="empresa.Correo_electronico" :placeholder="this.empresa.Correo_electronico" name="Correo" class="form-control" id="Correo"  required>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"></label>
                                <input type="text" v-model="empresa.Socio_3" :placeholder="this.empresa.Socio_3" name="Socio3" class="form-control" id="Socio3"  required pattern="[0-9]+">
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Telefono</strong></label>
                                <input maxlength="8" minlength="7" type="text" v-model="empresa.Telefono" :placeholder="this.empresa.Telefono" name="Telefono" class="form-control" id="Telefono"  required pattern="[0-9]+">
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-2">
                                <label for="validationCustom01" class="form-label"></label>
                                <input type="text" v-model="empresa.Socio_4" :placeholder="this.empresa.Socio_4" name="Socio4" class="form-control" id="Socio 4"  required pattern="[0-9]+">
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>NIT</strong></label>
                                <input type="text" v-model="empresa.NIT" :placeholder="this.empresa.NIT" name="NIT" class="form-control" id="NIT"  required pattern="[0-9]+">
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-2">
                                 <label for="validationCustom01" class="form-label"></label>
                                <input type="text" v-model="empresa.Socio_5" :placeholder="this.empresa.Socio_5" name="Socio5" class="form-control" id="Socio5"  required pattern="[0-9]+">
                                <div class="valid-feedback">
                                 </div>
                                </div>

                            </div>
                            <div class="row">
                               <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Solvencia Tecnica</strong></label>
                                <input class="form-control" accept=".pdf" type="file" id="Documento_1" @change="processFileSolv">
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                <label for="formFile" class="form-label"><strong>Constitución</strong></label>
                                <input class="form-control"  accept=".pdf" type="file" id="Documento_2" @change="processFileConst">
                                </div>
                                <div class="col-lg-4 offset-md-1">
                                <label for="formFile" class="form-label"><strong>Plan de Pago</strong></label>
                                <input class="form-control" accept=".pdf" type="file" id="Documento_3" @change="processFilePlan">
                                </div>
                                <div class="col-lg-4 offset-md-2">
                                <label for="formFile" class="form-label"><strong>Carta de Presentación</strong></label>
                                <input class="form-control" accept=".pdf" type="file" id="Documento_4" @change="processFileCarta">
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
    name:"editar-blog",
    data(){
        return {
            empresa:{

            Nombre_Largo:"",
            Nombre_Corto:"",
            Correo_electronico:"",
            Telefono:"",
            NIT:"",
            Solvencia:"",
            Constitucion:"",
            Plan_Pago:"",
            Carta:"",
            Socio_1:"",
            Socio_2:"",
            Socio_3:"",
            Socio_4:"",
            Socio_5:"",
            Estado_Aprob:"",
            }
        }
    },
    mounted(){
        this.mostrarEmp()
    },
    methods:{
        async mostrarEmp(){
            await this.axios.put(`/api/empresa/${this.$route.params.id}`, this.empresa).then(response=>{
                

                console.log(response.data)
                this.empresa.Nombre_Largo = response.data.Nombre_Largo
                this.empresa.Nombre_Corto = response.data.Nombre_Corto
                this.empresa.Telefono = response.data.Telefono
                this.empresa.NIT = response.data.NIT
                this.empresa.Correo_electronico = response.data.Correo_electronico
                this.empresa.Plan_Pago = response.data.Plan_Pago 
                this.empresa.Constitucion = response.data.Constitucion
                this.empresa.Carta = response.data.Carta
                this.empresa.Solvencia = response.data.Solvencia
                this.empresa.Socio_1 = response.data.Socio_1
                this.empresa.Socio_2 = response.data.Socio_2
                this.empresa.Socio_3 = response.data.Socio_3
                this.empresa.Socio_4 = response.data.Socio_4
                this.empresa.Socio_5 = response.data.Socio_5
                this.empresa.Estado_Aprob = response.data.Estado_Aprob
                
                
            }).catch(error=>{
                console.log(error)
            })
            
        },
        async editar(){


            await this.axios.put(`/api/empresa/${this.$route.params.id}/edit/${this.empresa}`, this.empresa).then(response=>{
                console.log("Aquelo que devuelve es")
                console.log(response.data)
                
                this.$router.push({name:"empresas"})
            }).catch(error=>{
                console.log(error)
            })
        },
        processFileSolv(event){
             const self= this;
             var Solv= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {
            
            self.empresa.Solvencia=reader.result;
            };
            reader.readAsDataURL(Solv);

        },
        
         processFileConst(event){
            const self= this;
             var Consti= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {
            
            self.empresa.Constitucion=reader.result;
            };
            reader.readAsDataURL(Consti);
        },
         processFilePlan(event){
            const self= this;
             var Plande= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {
            
            self.empresa.Plan_Pago=reader.result;
            };
            reader.readAsDataURL(Plande);
        },
         processFileCarta(event){
            const self= this;
             var Car= event.target.files[0];
             const reader = new FileReader();
             reader.onload = function(evt) {
            
            self.empresa.Carta=reader.result;
            };
            reader.readAsDataURL(Car);
        }
    }
}
</script>
