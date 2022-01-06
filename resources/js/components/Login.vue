<template>
    <main>

        <div class="text-center">
            <div id="login_outer">
			<div id="login_title">
				<h1>Universidad Mayor de San Simón</h1>
			</div>
	    </div>
        <div id="login_panel">
		<div id="login_panel_header"></div>
		<b>Inicio de Sesión</b>
        <form @submit.prevent="Searchmail">
            <div class="form-group" >
                <label for="exampleInputEmail1"><i class="far fa-envelope"></i> Correo Institucional</label>
                <input type="email" v-model="ellogin.correo" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduzca su correo institucional"  required
                oninvalid="setCustomValidity('Porfavor debe llenar un correo institucional')">
                <small id="emailHelp" class="form-text text-muted">No comparta su correo electrónico con nadie más.</small>
            </div>
             <!--   <div class="form-group" >
                    <label for="exampleInputEmail1"><i class="far fa-envelope"></i> Correo Institucional</label>
                    <input type="email" v-model="ellogin.correo" class="form-control is-invalid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduzca su correo institucional">
                    <div class="invalid-feedback">El correo no puede estar vacío</div>
                </div>-->
            <div class="form-group">
                <label for="exampleInputPassword1"><i class="fas fa-unlock-alt"></i> Contraseña</label>
                <input type="password" v-model="ellogin.contra"  class="form-control" id="exampleInputPassword1" placeholder="Introduzca su contraseña" required
                oninvalid="setCustomValidity('Porfavor debe llenar la contraseña')">
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1"><i class="far fa-save"></i> Guardar mis datos</label>
            </div>
            <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </form>
	    </div>
    </div>
    </main>
</template>
<script>
    export default {
    name:"usuarios",
    data(){
        
        return {
            ellogin:{
                usuarios:[],
                correo:"",
                contra:"",
                NoexisteEmail:0,
                contraCorrecta:0,
            }

        }
    },
    mounted(){
       this.ellogin.NoexisteEmail=0;
       this.ellogin.contraCorrecta=0;
        this.conseguirUsers()
    },
    methods:{
        async conseguirUsers(){
            await this.axios.get('/api/user').then(response=>{
                console.log(response.data)
                this.ellogin.usuarios = response.data
            }).catch(error=>{
                console.log(error)
                this.ellogin.usuarios = []
            })
        },
        Searchmail(){

            var cont=0;
            var corr= this.ellogin.correo;
            var contuar= this.ellogin.contra;
            let self = this;

            if(this.ellogin.correo == null){
                this.ellogin.NoexisteEmail=1;
            }


            this.ellogin.usuarios.forEach(function(usuario){
                //console.log("VAS bIEN VAS BIEN");
                if(usuario.Correo_usu==corr){
                    cont=1;
                   /* console.log("Lo de abajo debe ser el correo");
                    console.log(usuario.Correo_usu);
                    console.log(usuario.Contrasena_usu);
                    console.log(usuario.Carnet);
                    console.log(contuar);*/

                    if(usuario.Contrasena_usu==contuar){
                        console.log("Bienvenido");

                        switch(usuario.Rol_usu){
                            case "Estudiante":

                                break;
                            case "Asesor":

                                break;
                            case "Administrador":

                                break;
                        }

                        self.$router.push({name:"home"});
                    }
                    else{
                        console.log("Verifique contraseña");
                    }

                }
            });
            if(cont==0){
                console.log("No tiene cuenta, haga click aquí para registrarse");
            }
        }
    }
}
</script>

