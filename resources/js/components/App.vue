<template>
    <main @submit.prevent="Searchnotif">
        <nav class="navbar bg-danger"></nav>
        <nav class="navbar bg-primary"></nav>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid" >
                <a class="navbar-brand" href="#">
                    <img src="http://m.exam-10.com/pars_docs/refs/13/12262/12262_html_32a82c9a.png" alt="" width="53" height="68">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="mb-2 navbar-nav me-auto mb-lg-0">
                    <li class="nav-item">
                        <span class="mb-0 navbar-brand h1">
                            <router-link exact-active-class="active" to="/" class="nav-link " aria-current="page" > <i class="fas fa-home"></i> Inicio</router-link>
                        </span>
                    </li>

                    <li class="nav-item" v-if="this.sesionIniciada">
                        <span class="mb-0 navbar-brand h1">
                            <router-link v-if="this.tipoUsuario == 'Estudiante'" exact-active-class="active" to="/EmpresaEst" class="nav-link"><i class="fas fa-building"></i> Empresas</router-link>
                            <router-link v-else exact-active-class="active" to="/empresas" class="nav-link"><i class="fas fa-building"></i> Empresas</router-link>
                        </span>
                    </li>

                    <li class="nav-item" v-if="this.sesionIniciada">
                        <span class="mb-0 navbar-brand h1">
                            <router-link v-if="this.tipoUsuario == 'Estudiante'" exact-active-class="active" to="/ConvoEst" class="nav-link"><i class="fas fa-bullhorn"></i> Convocatorias</router-link>
                            <router-link v-else exact-active-class="active" to="/convocatoria" class="nav-link"><i class="fas fa-bullhorn"></i> Convocatorias</router-link>
                        </span>
                    </li>

                    <li class="nav-item" v-if="this.sesionIniciada">
                        <div class="accordion" v-if="this.tipoUsuario != 'Estudiante'" id="accordionExample">
                        <div class="card">
                            <div class="card-header dark" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left btn-dark " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><i class="far fa-folder-open"></i>
                                Seguimiento
                                </button>
                            </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body" >
                                <router-link class="dropdown-item active btn-warning btn" type="button" exact-active-class="" to="/SegEmpresa"><i class="fas fa-user-tie"></i> Grupo-Empresas</router-link>
                            </div>
                            <div class="card-body" >
                                <router-link class="dropdown-item active btn-warning btn" exact-active-class="" to="/SegPostulante"><i class="fas fa-users"></i> Postulantes</router-link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                </ul>



                <div class="text-end">
                    <fieldset disabled>

                            <div class="col-lg-9 offset-md-0">
                                <label for="" color= #22b24b>{{this.elcorreousu}}</label>
                            </div>

                    </fieldset>
                </div>
                <div class="dropdown">
                    <button class="btn btn-warning dropdown-toggle"  type="submit" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false"><i class="fas fa-bell"></i><span class="badge badge-light"> </span></button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">1</a>
                        <a class="dropdown-item" href="#">2</a>
                        <a class="dropdown-item" href="#">3</a>
                        <a class="dropdown-item" href="#">4</a>
                    </div>
                </div>

                <div class="text-end">
                    <router-link :to='{name:"Login"}' class="btn btn-primary" v-if="!this.sesionIniciada"><i class="fas fa-sign-in-alt"></i> Iniciar Sesión
                    </router-link>
                    <router-link :to='{name:"Registrarse"}' class="btn btn-primary" v-if="!this.sesionIniciada">
                        <i class="fas fa-user"></i> Registrarse
                    </router-link>
                </div>

                <ul v-if="this.sesionIniciada" class="px-3 navbar-nav">
                    <li class="nav-item text-nowrap">
                    <a class="nav-link" href="#" v-on:click="SalirdeSesion"><i  class="fas fa-sign-out-alt" ></i> Cerrar Sesión</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <nav class="navbar bg-primary"></nav>
        <nav class="navbar bg-danger"></nav>

        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
    export default {
        data(){
            return{
               lasnoti:[], 
               elcorreousu: '',
               tipoUsuario:'',
               sesionIniciada:false,

               color: '#111000' 

            }
        },
        mounted(){
              this.elcorreousu='';
              this.tipoUsuario='';
              this.sesionIniciada=false;


              this.elcorreousu = localStorage.getItem('correo');

              this.sesionIniciada = localStorage.getItem('sesionIniciada');

              this.tipoUsuario = localStorage.getItem('tipoUsuario');
                //Refrescar la página
              //vm.$forceUpdate();

           /* if(localStorage.elcorreousu){
                this.elcorreousu = localStorage.elcorreousu;
            }*/
            this.GettheNotif();
            
        
        },
        methods:{
            
           async GettheNotif(){
                await this.axios.get('/api/notificacion').then(response=>{
                console.log(response.data)
                this.lasnoti = response.data
            }).catch(error=>{
                console.log(error)
                this.lasnoti = []
            })
            

            },

            Searchnotif(){

                var corrremit = this.elcorreousu;
                this.lasnoti.forEach(function(notif){
                    
                    if(notif.Receptor==corrremit){
                        console.log("Hay notificaciones para tí")
                    }
                    else{
                        console.log("Me temo que nada para tí")
                    }
                })
            },

            SalirdeSesion(){
          
                console.log("El deploy se actualiza")
                let self = this;
                self.$router.push({name:"home"}).catch(()=>{});
                //self.$router.push('');
                
                /*console.log(`Antes de salir el correo es ${this.elcorreousu}`)
                console.log(`Y la sesión es  ${localStorage.getItem('sesionIniciada')}`)*/
                
                this.elcorreousu = '';
                this.sesionIniciada=false;
                this.elcorreousu='';
                this.tipoUsuario='';
                localStorage.removeItem('sesionIniciada');
                localStorage.removeItem('tipoUsuario');
                localStorage.removeItem('correo');

                

                
                //console.log(`Ahora el correo es ${this.elcorreousu}`)
                //console.log(`Y la sesión ahora es  ${this.sesionIniciada}`)

               // localStorage.sesionIniciada = false;
               // localStorage.tipoUsuario = '';

               // window.location.reload();
            }
        }

    }
</script>

<style scoped src="C:\wamp64\www\ProyectoTIS\resources\css\app.css">

</style>
