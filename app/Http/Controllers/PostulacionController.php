<?php

namespace App\Http\Controllers;

use App\Models\Postulacion;
use Illuminate\Http\Request;

class PostulacionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $RegisPostulacion = Postulacion::all(['id',
        'PNombre_Largo',
        'PNombre_Corto',
        'PCorreo_electronico',
        'PTelefono',
        'PNIT',
        'PSolvencia',
        'PConstitucion',
        'PPlan_Pago',
        'PCarta',
        'PSocio_1',
        'PSocio_2',
        'PSocio_3',
        'PSocio_4',
        'PSocio_5',
        'PEstado_Aprob']);
        return response()->json($RegisPostulacion);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $postulacion= new Postulacion();
        $postulacion->PNombre_Largo = $request->PNombre_Largo;
        $postulacion->PNombre_Corto = $request->PNombre_Corto;
        $postulacion->PCorreo_electronico = $request->PCorreo_electronico;
        $postulacion->PTelefono = $request->PTelefono;
        $postulacion->PNIT = $request->PNIT;
        $postulacion->PSolvencia = $request->PSolvencia;
        $postulacion->PConstitucion = $request->PConstitucion;
        $postulacion->PPlan_Pago = $request->PPlan_Pago;
        $postulacion->PCarta = $request->PCarta;
        $postulacion->PSocio_1 = $request->PSocio_1;
        $postulacion->PSocio_2 = $request->PSocio_2;
        $postulacion->PSocio_3 = $request->PSocio_3;
        $postulacion->PSocio_4 = $request->PSocio_4;
        $postulacion->PSocio_5 = $request->PSocio_5;
        $postulacion->save();
    }

    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Postulacion  $postulacion
     * @return \Illuminate\Http\Response
     */
    public function show(Postulacion $postulacion)
    {
        $postulacion = Postulacion::create($postulacion->post());
        return response()->json([
            'postulacion'=>$postulacion]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Postulacion  $postulacion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Postulacion $postulacion)
    {
        $postulacion= Postulacion::find($empresium);
        
        
        $LaPostu= new Postulacion();
        //$LaPostu= [];

        
        $LaPostu->PNombre_Largo=$postulacion->PNombre_Largo;
        $LaPostu->PNombre_Corto=$postulacion->PNombre_Corto;
        $LaPostu->PCorreo_electronico=$postulacion->PCorreo_electronico;
        $LaPostu->PTelefono=$postulacion->PTelefono;
        $LaPostu->PNIT=$postulacion->PNIT;
        $LaPostu->PPlan_Pago=$postulacion->PPlan_Pago;
        $LaPostu->PConstitucion=$postulacion->PConstitucion;
        $LaPostu->PCarta=$postulacion->PCarta;
        $LaPostu->PSolvencia=$postulacion->PSolvencia;
        $LaPostu->PSocio_1=$postulacion->PSocio_1;
        $LaPostu->PSocio_2=$postulacion->PSocio_2;
        $LaPostu->PSocio_3=$postulacion->PSocio_3;
        $LaPostu->PSocio_4=$postulacion->PSocio_4;
        $LaPostu->PSocio_5=$postulacion->PSocio_5;
        $LaPostu->PEstado_Aprob=$postulacion->PEstado_Aprob;

       /* $LaPostu['Nombre_Largo']=$request->get('Nombre_Largo');
        $LaPostu['Nombre_Corto']=$request->get('Nombre_Corto');
        $LaPostu['Correo_electronico']=$request->get('Correo_electronico');
        $LaPostu['Telefono']=$request->get('Telefono');
        $LaPostu['NIT']=$request->get('NIT');
        $LaPostu['Plan_Pago']=$request->get('Plan_Pago');
        $LaPostu['Constitucion']=$request->get('Constitucion');
        $LaPostu['Carta']=$request->get('Carta');
        $LaPostu['Solvencia']=$request->get('Solvencia');
        $LaPostu['Socio_1']=$request->get('Socio_1');
        $LaPostu['Socio_2']=$request->get('Socio_2');
        $LaPostu['Socio_3']=$request->get('Socio_3');
        $LaPostu['Socio_4']=$request->get('Socio_4');
        $LaPostu['Socio_5']=$request->get('Socio_5');
        $LaPostu['Estado_Aprob']=$request->get('Estado_Aprob');*/

       // $empresap->update($LaPostu);
      //  return $convocatoria;
        return response()->json($LaPostu);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Postulacion  $postulacion
     * @return \Illuminate\Http\Response
     */
    public function destroy(Postulacion $postulacion)
    {
        //
    }
}
