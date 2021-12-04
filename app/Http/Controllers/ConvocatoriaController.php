<?php

namespace App\Http\Controllers;

use App\Models\Convocatoria;
use Illuminate\Http\Request;

class ConvocatoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $RegisConv = Convocatoria::all(['id','Codigo_Conv','Titulo','Descripcion', 'Fecha', 'Informacion_A', 'Informacion_B', 'Gestion']);
        return response()->json($RegisConv);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $convocatoria= new Convocatoria();
        $convocatoria->Titulo = $request->Titulo;
        $convocatoria->Codigo_Conv = $request->Codigo_Conv;
        $convocatoria->Descripcion = $request->Descripcion;
        $convocatoria->Asesor = $request->Asesor;
        $convocatoria->Fecha = $request->Fecha;
        $convocatoria->Informacion_A = $request->Informacion_A;
        $convocatoria->Informacion_B = $request->Informacion_B;
        $convocatoria->Gestion = $request->Gestion;
        
        $convocatoria->save();

        return $convocatoria;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Convocatoria  $convocatoria
     * @return \Illuminate\Http\Response
     */
    public function show(Convocatoria $convocatoria)
    {
        $convocatoria = Convocatoria::create($convocatoria->post());
        return response()->json([
            'convocatoria'=>$convocatoria]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Convocatoria  $convocatoria
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $convocatorium)
    {
        $convocatoria= Convocatoria::find($convocatorium);
      /*  $convocatoria->Titulo = $request->Titulo;
        $convocatoria->Codigo_Conv = $request->Codigo_Conv;
        $convocatoria->Descripcion = $request->Descripcion;
        $convocatoria->Asesor = $request->Asesor;
        $convocatoria->Fecha = $request->Fecha;
        $convocatoria->Informacion_A = $request->Informacion_A;
        $convocatoria->Informacion_B = $request->Informacion_B;
        $convocatoria->Gestion = $request->Gestion;*/
        
        
        $nuevaConv=[];
        
        $nuevaConv['Titulo']=$request->get('Titulo');
        $nuevaConv['Gestion']=$request->get('Gestion');
        $nuevaConv['Descripcion']=$request->get('Descripcion');
        $nuevaConv['Asesor']=$request->get('Asesor');
        $nuevaConv['Fecha']=$request->get('Fecha');
        $nuevaConv['Informacion_A']=$request->get('Informacion_A');
        $nuevaConv['Informacion_B']=$request->get('Informacion_B');
        $convocatoria->update($nuevaConv);
      //  return $convocatoria;
        return response()->json($nuevaConv);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Convocatoria  $convocatoria
     * @return \Illuminate\Http\Response
     */
    public function destroy($convocatorium)
    {

       $convo= Convocatoria::find($convocatorium);
      $convo->delete();

      $RegisConv = Convocatoria::all(['id','Codigo_Conv','Titulo','Descripcion', 'Fecha', 'Informacion_A', 'Informacion_B', 'Gestion']);
        return response()->json($RegisConv);
    }
}
