<template>
    <div class="container mt-4">
        <div class="row">
            <div class="text-center col">
                <h1>Historial de Empresas Registradas</h1>.
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Buscar el nombre de la empresa registrada" aria-label="Burcar el nombre de la empresa registrada" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button type="button" class="btn btn-lg btn-primary">Buscar</button>
                    </div>
                </div>
                <div>
                    <table class="table table-dark table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>fila1</td>
                            <td>fila2</td>
                            <td>fila3</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td></td>
                            </tr>
                        </tbody>
                        </table>
                </div>
            </div>
        </div>
    </div>
</template>
