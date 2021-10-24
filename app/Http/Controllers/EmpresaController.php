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
    public function index()
    {
        return view('empleado.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("empresa.create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        {
            //Solicitud de toda la información
            $datosEmpresa= request()->except('_token');
    
            if($request->hasFile('Documento_1')){
                $datosEmpresa['Documento_1']=$request->file('Documento_1')->store('uploads', 'public');
            }
            if($request->hasFile('Documento_2')){
                $datosEmpresa['Documento_2']=$request->file('Documento_2')->store('uploads', 'public');
            }
            if($request->hasFile('Documento_3')){
                $datosEmpresa['Documento_3']=$request->file('Documento_3')->store('uploads', 'public');
            }
            if($request->hasFile('Documento_4')){
                $datosEmpresa['Documento_4']=$request->file('Documento_4')->store('uploads', 'public');
            }
    
            Empresa::insert($datosEmpresa);
            return response()->json($datosEmpresa);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function show(Empresa $empresa)
    {
        //
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
