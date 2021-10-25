<template>
    <main>
        <nav class="navbar bg-danger"></nav>
        <nav class="navbar bg-primary"></nav>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <!-- llamamos al logo -->
                    <img src="http://creadictivo.com/wp-content/uploads/2018/05/umss-san-simon.png" alt="" width="50" height="30">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="mb-2 navbar-nav me-auto mb-lg-0">
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/" class="nav-link active" aria-current="page">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/blogs" class="nav-link">Convocatorias</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/contacto" class="nav-link">Empresas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/seguimiento" class="nav-link">Seguimiento</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/RegistrarEmpresas" class="nav-link">Registrar</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
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
    export default {}
</script>
