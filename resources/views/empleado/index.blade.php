<h1>Mostrar las listas de empleados</h1>
<table class="table table-light">
    <thead class="thead-light">
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Correo</th>
            <th>VER</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($empleado as $empleado)
            
        <tr>
            <td>{{$empleado->id}}</td>
            <td>{{$empleado->Nombre}}</td>
            <td>{{$empleado->Telefono}}</td>
            <td>{{$empleado->Correo}}</td>
            <td><a href="{{asset('storage').'/'.$empleado->Documento}}" target="blank_">Ver Documento</a></td>
        </tr>
        @endforeach
    </tbody>


</table>