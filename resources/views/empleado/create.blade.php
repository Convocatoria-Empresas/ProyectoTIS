<form action="{{url('/empleado')}}" method="post" enctype="multipart/form-data">
@csrf
<label for="Nombre">Nombre</label>    
<input type="text" name="Nombre" id="Nombre">
<br>

<label for="Nombre">Telefono</label>    
<input type="text" name="Telefono" id="Telefono">
<br>

<label for="Nombre">Correo</label>    
<input type="text" name="Correo" id="Correo">
<br>

<label for="Nombre">Archivo PDf</label>    
<input type="File" name="Documento" id="Documento">
<br>

<input type="submit" value="Guadar Datos">
<br>




</form>