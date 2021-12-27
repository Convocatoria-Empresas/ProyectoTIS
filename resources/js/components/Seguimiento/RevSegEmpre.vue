<template>
    <div class="row">
        <div class="text-center col">
        <h1>Revision de la Grupo-Empresas</h1>
        <hr>
    </div>
    <div class="col-12">
        <div class="card-body">
            <form @submit.prevent="RevSegEmpre" action="">
                <div class="col-lg-5 offset-md-4">
                    <form>
                        <fieldset disabled>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-calendar-week"></i> Gestión</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Gestión">
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="far fa-user"></i> Asesor</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Nombre del Asesor">
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-signature"></i> Nombre</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Nombre de la Grupo Empresa">
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-envelope-open-text"></i> Correo Electrónico</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Correo de la Empresa">
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-envelope-open-text"></i> Correo Electrónico</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Correo de la Empresa">
                                <hr>
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-file-pdf"></i> Boleta de garantia</label>
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend">PDF</span>
                                </div>
                                <input type="text" class="form-control" id="validationCustomUsername" placeholder="Documento.pdf" aria-describedby="inputGroupPrepend" required>
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-file-pdf"></i> Carta de Presentación</label>
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend">PDF</span>
                                </div>
                                <input type="text" class="form-control" id="validationCustomUsername" placeholder="Documento.pdf" aria-describedby="inputGroupPrepend" required>
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-file-pdf"></i> Constitución de la Empresa</label>
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend">PDF</span>
                                </div>
                                <input type="text" class="form-control" id="validationCustomUsername" placeholder="Documento.pdf" aria-describedby="inputGroupPrepend" required>
                            </div>
                            <div class="form-group">
                                <label for="disabledTextInput"><i class="fas fa-file-pdf"></i> Solvencia Técnica</label>
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend">PDF</span>
                                </div>
                                <input type="text" class="form-control" id="validationCustomUsername" placeholder="Documento.pdf" aria-describedby="inputGroupPrepend" required>
                            </div>
                        </fieldset>
                        <hr>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1"><i class="fas fa-comments"></i> Escribir las observaciones</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
