<?php

namespace App\Http\Controllers;

use App\Models\convocatoriaEmpresa;
use Illuminate\Http\Request;

class ConvocatoriaEmpresaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $convoEmpre = convocatoriaEmpresa::all(['gestion','titulo','descripcion']);
        return response()->json($convoEmpre);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\convocatoriaEmpresa  $convocatoriaEmpresa
     * @return \Illuminate\Http\Response
     */
    public function show(convocatoriaEmpresa $convocatoriaEmpresa)
    {
        $convocatoriaEmpresa = convocatoriaEmpresa::create($convocatoriaEmpresa->post());
        return response()->json([
            'convocatoriaEmpresa'=>$convocatoriaEmpresa]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\convocatoriaEmpresa  $convocatoriaEmpresa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, convocatoriaEmpresa $convocatoriaEmpresa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\convocatoriaEmpresa  $convocatoriaEmpresa
     * @return \Illuminate\Http\Response
     */
    public function destroy(convocatoriaEmpresa $convocatoriaEmpresa)
    {
        //
    }
}
