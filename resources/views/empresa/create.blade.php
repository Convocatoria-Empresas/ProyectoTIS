awffwafwfa

<form action="{{ url('/empresa/') }}" method="post" enctype="multipart/form-data">
    @csrf

    <label for="Nombre_Largo">Nombre Largo</label>
    <input type="text" name="Nombre_Largo" id="Nombre_Largo">
    <br>
    <label for="Nombre_Corto">Nombre Corto</label>
    <input type="text" name="Nombre_Corto" id="Nombre_Corto">
    <br>
    <label for="Tipo_de_Sociedad">Tipo de Sociedad</label>
    <input type="text" name="Tipo_de_Sociedad" id="Tipo_de_Sociedad">
    <br>
    <label for="Direccion">Direccion</label>
    <input type="text" name="Direccion" id="Direccion">
    <br>
    <label for="Telefono">Telefono</label>
    <input type="text" name="Telefono" id="Telefono">
    <br>
    <label for="Correo_electronico">Correo_electronico</label>
    <input type="text" name="Correo_electronico" id="Correo_electronico">
    <br>
    <label for="Documento_1">Documento 1</label>
    <input type="file" name="'Documento_1" id="Documento_1">
    <br>
    <label for="Documento_2">Documento 2</label>
    <input type="file" name="'Documento_2" id="Documento_2">
    <br>
    <label for="Documento_2">Documento 3</label>
    <input type="file" name="'Documento_3" id="Documento_3">
    <br>
    <label for="Documento_2">Documento 4</label>
    <input type="file" name="'Documento_4" id="Documento_4">
    <br>
    <label for="Otro">Otro</label>
    <input type="text" name="Otro" id="Otro">
    <br>
    
    <input type="submit" value="Enviar Solicitud">
 
</form>


