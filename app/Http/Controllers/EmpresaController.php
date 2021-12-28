<?php

namespace App\Http\Controllers;

use App\Models\Empresa;
use Illuminate\Http\Request;

class EmpresaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $RegisEmpre = Empresa::all(['id','Nombre_Largo','Nombre_Corto','Correo_electronico', 'Telefono', 'NIT', 'Solvencia', 'Constitucion', 'Plan_Pago', 
        'Carta', 'Socio_1', 'Socio_2', 'Socio_3', 'Socio_4', 'Socio_5','Estado_Aprob']);
        return response()->json($RegisEmpre);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('empresa')->with('state', 'create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

      /*  $datosEmpresa= request()->except('_token');
        if($request-> hasFile('Solvencia')){
            $datosEmpresa['Solvencia']=$request->file('Solvencia')->store('uploads', 'public');
        }

        $empresa= new Empresa();
        $empresa-> Nombre_Largo = $request->Nombre_Largo;
        $empresa->Nombre_Corto = $request->Nombre_Corto;
        $empresa->Correo_electronico = $request->Correo_electronico;
        $empresa->Telefono = $request->Telefono;
        $empresa->NIT = $request->NIT;
        $empresa->Solvencia = $request->Solvencia;
        $empresa->Constitucion = $request->Constitucion;
        $empresa->Plan_Pago = $request->Plan_Pago;
        $empresa->Carta = $request->Carta;
        $empresa->Socio_1 = $request->Socio_1;
        $empresa->Socio_2 = $request->Socio_2;
        $empresa->Socio_3 = $request->Socio_3;
        $empresa->Socio_4 = $request->Socio_4;
        $empresa->Socio_5 = $request->Socio_5;
        $empresa->save();

        return $empresa;*/
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function show(Empresa $empresa)
    {

        $empresa = Empresa::create($empresa->post());
        return response()->json([
            'empresa'=>$empresa]);
     
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    /*public function edit(Empresa $empresa)
    {
        //
    }*/

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function update($empresium, Request $request)
    {
        $empresa= Empresa::find($empresium);
        
        
        $LaEmp= new Empresa();
        //$LaEmp= [];

        
        $LaEmp->Nombre_Largo=$empresa->Nombre_Largo;
        $LaEmp->Nombre_Corto=$empresa->Nombre_Corto;
        $LaEmp->Correo_electronico=$empresa->Correo_electronico;
        $LaEmp->Telefono=$empresa->Telefono;
        $LaEmp->NIT=$empresa->NIT;
        $LaEmp->Plan_Pago=$empresa->Plan_Pago;
        $LaEmp->Constitucion=$empresa->Constitucion;
        $LaEmp->Carta=$empresa->Carta;
        $LaEmp->Solvencia=$empresa->Solvencia;
        $LaEmp->Socio_1=$empresa->Socio_1;
        $LaEmp->Socio_2=$empresa->Socio_2;
        $LaEmp->Socio_3=$empresa->Socio_3;
        $LaEmp->Socio_4=$empresa->Socio_4;
        $LaEmp->Socio_5=$empresa->Socio_5;
        $LaEmp->Estado_Aprob=$empresa->Estado_Aprob;

       /* $LaEmp['Nombre_Largo']=$request->get('Nombre_Largo');
        $LaEmp['Nombre_Corto']=$request->get('Nombre_Corto');
        $LaEmp['Correo_electronico']=$request->get('Correo_electronico');
        $LaEmp['Telefono']=$request->get('Telefono');
        $LaEmp['NIT']=$request->get('NIT');
        $LaEmp['Plan_Pago']=$request->get('Plan_Pago');
        $LaEmp['Constitucion']=$request->get('Constitucion');
        $LaEmp['Carta']=$request->get('Carta');
        $LaEmp['Solvencia']=$request->get('Solvencia');
        $LaEmp['Socio_1']=$request->get('Socio_1');
        $LaEmp['Socio_2']=$request->get('Socio_2');
        $LaEmp['Socio_3']=$request->get('Socio_3');
        $LaEmp['Socio_4']=$request->get('Socio_4');
        $LaEmp['Socio_5']=$request->get('Socio_5');
        $LaEmp['Estado_Aprob']=$request->get('Estado_Aprob');*/

       // $empresap->update($LaEmp);
      //  return $convocatoria;
        return response()->json($LaEmp);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Empresa $empresa)
    {
        //
    }
}