<template>
    <main>
        <div class="row">
            <div class="text-center col">
                <h1>Registrarse en la Empresa TIS</h1>
                <hr>
                <p>Universidad Mayor de San Simón</p>
            </div>
            <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4> <strong class="text-center col"><i class="fas fa-address-card"></i> Registrarse</strong></h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="Registrarse">
                        <div  class="row">
                            <div  class="row needs-validation" novalidate>
                                <div class="col-lg-4 offset-md-1" >
                                <label for="validationCustom01" class="form-label"><strong>Nombre(s)</strong></label>
                                <input maxlength="30" type="text" placeholder="Ej: José Luis" name="NombrePersonal" class="form-control" id="NombrePersonal"  required pattern="[a-zA-Z- -\.]+"
                                oninvalid="setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>
                                <div class="col-lg-4 offset-md-1" >
                                    <label for="validationCustom01" class="form-label"><strong>Apellido Paterno</strong></label>
                                    <input maxlength="30" type="text" placeholder="Ej: Romero" name="NombrePaterno" class="form-control" id="NombrePaterno"  required pattern="[a-zA-Z- -\.]+"
                                oninvalid="setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                    <div class="valid-feedback"></div>
                                </div>
                                <div class="col-lg-4 offset-md-1" >
                                    <label for="validationCustom01" class="form-label"><strong>Apellido Materno</strong></label>
                                    <input maxlength="30" type="text" placeholder="Ej: Fernandez" name="NombreMaterno" class="form-control" id="NombreMaterno"  required pattern="[a-zA-Z- -\.]+"
                                oninvalid="setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                    <div class="valid-feedback"></div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Código SIS</strong></label>
                                <input maxlength="9" minlength="9" type="text" placeholder="Código SIS (sólo números)" name="CodigoSis" class="form-control" id="CodigoSis"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Revise el codigo SIS ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                 <label for="validationCustom01" class="form-label"><strong>Correo electrónico</strong></label>
                                <input type="email" name="email" class="form-control"  id="CorreoVigen" placeholder="Ej: pepitopelapapas@gmail.com"/>
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Número de Celular</strong></label>
                                <input maxlength="8" minlength="7" type="text" placeholder="Debe ser vigente. Ej: 65316647" name="Celular" class="form-control" id="Celular"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llene el Celular, solo se aceptan numeros y el minumo son 8 digitos')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                                <div class="col-lg-4 offset-md-1">
                                <label for="validationCustom01" class="form-label"><strong>Carnet de Identidad</strong></label>
                                <input maxlength="7" minlength="7" type="text" placeholder="Ej: 431579521" name="NIT" class="form-control" id="NIT"  required pattern="[0-9]+"
                                oninvalid="setCustomValidity('Porfavor llene el carnet de identidad, solo se aceptan numeros ')" onchange="try{setCustomValidity('')}catch(e){}" />
                                <div class="valid-feedback">
                                 </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="text-center">
                                    <label for="validationCustom01" class="form-label"></label>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <router-link :to='{name:"Login"}' class="btn btn-danger"><i class="far fa-ballot-check"></i> Cancelar
                                            </router-link>
                                        </div>
                                        <div class="col-lg-4">
                                        <button type="submit" class="btn btn-success">Registrarse</button>
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
    </main>
</template>
