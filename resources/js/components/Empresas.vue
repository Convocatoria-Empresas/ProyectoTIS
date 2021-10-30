<template>
    <div class="container mt-4">
        <div class="row">
            <div class="text-center col mb-5">
                <h1>Historial de Empresas Registradas</h1>.
                <div class="input-group mb-5">
                     <router-link :to='{name:"crearBlog"}' class="btn btn-success"><i class="fas fa-plus-circle"> Registrar Empresa</i></router-link>
                    <span class="input-group-text" id="basic-addon1">  </span>
                    <input type="text" class="form-control" placeholder="Buscar el nombre de la empresa registrada" aria-label="Burcar el nombre de la empresa registrada" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button type="button" class="btn btn-primary">Buscar</button>
                    </div>
                </div>
                <table class="table table-hover table-dark ">
                    <thead>
                        <tr>
                        <th scope="col">N°</th>
                        <th scope="col">Gestión</th>
                        <th scope="col">Nombre de la Empresa</th>
                        <th scope="col">Asesor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td >Larry the Bird</td>
                        <td></td>
                        <td>@twitter</td>
                        </tr>
                        <tr>
                            <td scope="row">4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
