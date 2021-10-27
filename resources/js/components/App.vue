<template>
    <main>
        <nav class="navbar bg-danger"></nav>
        <nav class="navbar bg-primary"></nav>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <!-- llamamos al logo -->
                    <img src="http://m.exam-10.com/pars_docs/refs/13/12262/12262_html_32a82c9a.png" alt="" width="53" height="68">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="mb-2 navbar-nav me-auto mb-lg-0">
                    <li class="nav-item">
                        <span class="mb-0 navbar-brand h1">
                            <router-link exact-active-class="active" to="/" class="nav-link active" aria-current="page">Inicio</router-link>
                        </span>
                    </li>
                    <li class="nav-item">
                        <span class="mb-0 navbar-brand h1">
                            <router-link exact-active-class="active" to="/blogs" class="nav-link">Convocatorias</router-link>
                        </span>
                    </li>
                    <li class="nav-item">
                        <span class="mb-0 navbar-brand h1">
                            <router-link exact-active-class="active" to="/contacto" class="nav-link">Empresas</router-link>
                        </span>
                    </li>
                    <li class="nav-item">
                        <span class="mb-0 navbar-brand h1">
                            <router-link exact-active-class="active" to="/seguimiento" class="nav-link">Seguimiento</router-link>
                        </span>
                    </li>
                    <li class="nav-item">
                        <span class="mb-0 navbar-brand h1">
                            <router-link exact-active-class="active" to="/RegistrarEmpresas" class="nav-link">Registrar Empresa</router-link>
                        </span>
                    </li>
                    <li class="nav-item">
                        <span class="mb-0 navbar-brand h1">
                            <router-link exact-active-class="active" to="/empresa" class="nav-link">LA EMPRESA</router-link>
                        </span>
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
    export default {}
</script>
