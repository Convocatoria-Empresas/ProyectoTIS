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
        /*if($request->ajax()){
            return Empresa::all();
        } else{
            return view('empresa')->with('state','index');
        }*/
        $RegisEmpre = Empresa::all(['Nombre_Largo','Nombre_Corto','Correo_electronico', 'Telefono', 'NIT', 'Solvencia', 'Constitucion', 'Plan_Pago', 
        'Carta', 'Socio_1', 'Socio_2', 'Socio_3', 'Socio_4', 'Socio_5']);
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
    public function obtain(Request $request,  $empresium)
    {
        $empresa= Empresa::find($empresium);
        
        
        $LaEmp=[];
        
        $LaEmp['Nombre_Largo']=$request->get('Nombre_Largo');
        $LaEmp['Correo']=$request->get('Correo');
        $LaEmp['Plan_de_Pago']=$request->get('Plan_de_Pago');
        $LaEmp['Constitucion']=$request->get('Constitucion');
        $LaEmp['Carta']=$request->get('Carta');
        $LaEmp['Solvencia']=$request->get('Solvencia');
        $LaEmp['Socio_1']=$request->get('Socio_1');
        $LaEmp['Socio_2']=$request->get('Socio_2');
        $LaEmp['Socio_3']=$request->get('Socio_3');
        $LaEmp['Socio_4']=$request->get('Socio_4');
        $LaEmp['Socio_5']=$request->get('Socio_5');
      //  return $convocatoria;
        return response()->json($LaEmp);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function edit(Empresa $empresa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Empresa $empresa)
    {
        //
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