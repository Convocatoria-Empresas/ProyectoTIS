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
        $RegisConv = Convocatoria::all(['id','Codigo_Conv','Titulo','Descripcion', 'Fecha', 'Asesor','Correo_Ase','Informacion_A', 'Informacion_B', 'Gestion']);
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
        /*$input=$request->except('_token');
        if($request->hasfile('file')){
            
            $archivo=$request->file('file');
            $input ['Informacion_A']=time().'_'.$archivo->getClientOriginalName();
            
            $archivo->move(public_path('Archivos'),$input['Informacion_A']);
        }*/


        $convocatoria= new Convocatoria();
        $convocatoria->Titulo = $request->Titulo;
        $convocatoria->Codigo_Conv = $request->Codigo_Conv;
        $convocatoria->Descripcion = $request->Descripcion;
        $convocatoria->Asesor = $request->Asesor;
        $convocatoria->Correo_Ase = $request->Correo_Ase;
        $convocatoria->Fecha = $request->Fecha;
        $convocatoria->Informacion_A = $request->Informacion_A;
        $convocatoria->Informacion_B = $request->Informacion_B;
        $convocatoria->Gestion = $request->Gestion;
        
        $convocatoria->save();

        //return $convocatoria;
    }
    public function mostrar($convocatoria, Request $request){
        $convocatorium= Convocatoria::find($convocatoria);
        $LaConv= new Convocatoria();
        
      
        $LaConv->Codigo_Conv=$convocatorium->Codigo_Conv;
        $LaConv->Titulo=$convocatorium->Titulo;
        $LaConv->Descripcion=$convocatorium->Descripcion;
        $LaConv->Asesor=$convocatorium->Asesor;
        $LaConv->Correo_Ase=$convocatorium->Correo_Ase;
        $LaConv->Fecha=$convocatorium->Fecha;
        $LaConv->Informacion_A=$convocatorium->Informacion_A;
        $LaConv->Informacion_B=$convocatorium->Informacion_B;
        $LaConv->Gestion=$convocatorium->Gestion;
        
         
       
        return response()->json($LaConv);
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
      
        
        
        $nuevaConv=[];
        
        $nuevaConv['Titulo']=$request->get('Titulo');
        $nuevaConv['Gestion']=$request->get('Gestion');
        $nuevaConv['Descripcion']=$request->get('Descripcion');
        $nuevaConv['Asesor']=$request->get('Asesor');
        $nuevaConv['Correo_Ase']=$request->get('Correo_Ase');
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

      $RegisConv = Convocatoria::all(['id','Codigo_Conv','Titulo','Descripcion', 'Asesor', 'Correo_Ase', 'Fecha', 'Informacion_A', 'Informacion_B', 'Gestion']);
        return response()->json($RegisConv);
    }
}