

<label for="Nombre"> Nombre </label>
<input type="text" name="Nombre" value="{{ isset($empleado->Nombre)?$empleado->Nombre:'' }}" id="Nombre">
<br>
<label for="ApellidoPaterno"> ApellidoPaterno </label>
<input type="text" name="ApellidoPaterno" value="{{isset($empleado->ApellidoPaterno)?$empleado->ApellidoPaterno:''}}" id="ApellidoPaterno">
<br>
<label for="ApellidoMaterno"> ApellidoMaterno </label>
<input type="text" name="ApellidoMaterno"value="{{isset($empleado->ApellidoMaterno)?$empleado->ApellidoMaterono:''}}"  id="ApellidoMaterno">
<br>
<label for="Correo"> Correo </label>
<input type="text" name="Correo"value="{{ isset($empleado->Correo)?$empleado->Coreeo:'' }}" id="Correo">
<br>
<label for="Foto"> Foto </label>
<input type="file" name="Foto"value="{{ isset($empleado->Foto)?$empleado->Foto:'' }}" id="Foto">
<br>
<label for="Enviar"> Enviar </label>
<input type="submit" value="Guardar datos">

<a href="{{url('empleado/')}}">
    Regresar
  </a>

<br>