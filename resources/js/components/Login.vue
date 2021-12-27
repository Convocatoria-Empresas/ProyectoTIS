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
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1"><i class="far fa-envelope"></i> Correo Institucional</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduzca su correo institucional">
                <small id="emailHelp" class="form-text text-muted">No comparta su correo electrónico con nadie más.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1"><i class="fas fa-unlock-alt"></i> Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Introduzca su contraseña">
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
</script>

