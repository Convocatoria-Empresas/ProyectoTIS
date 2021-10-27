<?php

namespace App\Http\Controllers;

use App\Providers\RouteServiceProvider;
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
        return Empresa::get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $empresa= new Empresa;
        $empresa->create($request->all());
        /*if($request->hasFile('Documento_1')){ 
            $empresa['Documento_1']=$request->file('Documento_1')->store('uploads','public');
        }
        if($request->hasFile('Documento_2')){
            $empresa['Documento_2']=$request->file('Documento_2')->store('uploads','public');
        }
        if($request->hasFile('Documento_3')){
            $empresa['Documento_3']=$request->file('Documento_3')->store('uploads','public');
        }
        if($request->hasFile('Documento_4')){
            $empresa['Documento_4']=$request->file('Documento_4')->store('uploads','public');
        }
        Empresa::insert($empresa);*/
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function show(Empresa $empresa)
    {
        return $empresa;
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
