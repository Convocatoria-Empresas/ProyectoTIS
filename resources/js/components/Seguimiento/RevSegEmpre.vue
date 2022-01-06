<template>
    <div class="row">
        <div class="text-center col">
        <h1>Revision de la Grupo-Empresas</h1>
        <hr>
    </div>
    <div class="col-12">
        <div class="card-body">
            <form  >
                <div class="col-lg-5 offset-md-4">
                    <form @submit.prevent="RevSegEmpre">
                        <fieldset disabled>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-calendar-week"></i> Gestión</label>
                                <input type="text" id="gestion" class="form-control" :placeholder="this.laempresa.GetiodeEmp" readonly>
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="far fa-user"></i> Asesor</label>
                                <input type="text" id="disabledTextInput1" class="form-control" :placeholder="this.laempresa.AsesordeEmp">
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-signature"></i> Nombre</label>
                                <input type="text" id="disabledTextInput2" class="form-control" :placeholder="this.laempresa.Nombre_Largo" readonly>
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-envelope-open-text"></i> Correo Electrónico</label>
                                <input type="text" id="disabledTextInput3" class="form-control" :placeholder="this.laempresa.Correo_electronico" readonly>
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-phone"></i> Teléfono</label>
                                <input type="text" id="disabledTextInput4" class="form-control" :placeholder="this.laempresa.Telefono" readonly>
                                <hr>
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-file-pdf"></i> Plan de Pago</label>
                                <div class="input-group-prepend">
                                    <a  download=Plan_Pago :href="laempresa.Plan_Pago" id="inputGroupPrepend">PDF</a>
                
                                </div>
                                
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-file-pdf"></i> Carta de Presentación</label>
                                <div class="input-group-prepend">
                                    <a  download=Carta :href="laempresa.Carta" id="inputGroupPrepend">PDF</a>
                                </div>
                                
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-file-pdf"></i> Constitución de la Empresa</label>
                                <div class="input-group-prepend">
                                    <a  download=Constitucion :href="laempresa.Constitucion" id="inputGroupPrepend2">PDF</a>
                                </div>
                                
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput5"><i class="fas fa-file-pdf"></i> Solvencia Técnica</label>
                                <div class="input-group-prepend">
                                    <a  download=Solvencia :href="laempresa.Solvencia" id="inputGroupPrepend3">PDF</a>
                                </div>
                                
                            </div>
                        </fieldset>
                        <hr>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1"><i class="fas fa-comments"></i> Escribir las observaciones</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" v-model="notificacion.Texto" rows="3"></textarea>
                        </div>
                        <button class="btn btn-success" type="submit">Enviar</button>
                        <button class="btn btn-warning">Volver</button>
                    </form>
                </div>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {


    data(){
        return {
            laempresa: 
            {
             Nombre_Largo: "",
             Correo_electronico: "",
             Telefono: "",
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
             Estado_Aprob:"",
            },
            notificacion:{
                NTitulo:"",
                Texto:"",
                Emisor:"",
                Receptor:"",
                Leido:"", 
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
                this.laempresa.Telefono = response.data.Telefono
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
                this.laempresa.Estado_Aprob = response.data.Estado_Aprob

            }).catch(error=>{
                console.log(error)
            })
            
        },
        
        async RevSegEmpre(){
        
            //console.log(this.notificacion.Texto);
            this.notificacion.NTitulo=`Comunicado de la gestión ${this.laempresa.GetiodeEmp}`;
            //this.notificacion.Texto="";
            this.notificacion.Emisor= this.$route.params.asesorCorr;
            this.notificacion.Receptor= this.laempresa.Correo_electronico;
            this.notificacion.Leido=0;
           // console.log("Llegas aquí");
            await axios.post('/api/notificacion', this.notificacion);

            console.log("Hora de irse")
            
            this.$router.push({name:"SegEmpresa"}).catch(()=>{});
        
        
        /*await this.axios.get(`/api/empresa/${this.$route.params.id}/approve/${this.laempresa.Estado_Aprob}`,this.laempresa).then(response=>{
                
                console.log(response.data)
                
                
            }).catch(error=>{
                console.log(error)
            })
            this.$router.push({name:"SegPostulante"}).catch(()=>{});*/
        },


    }
}
</script>