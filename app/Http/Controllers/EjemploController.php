<?php

namespace App\Http\Controllers;

use App\Models\Ejemplo;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;

class EjemploController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $datos['ejemploses']=Ejemplo::paginate(5);
        return view('ejemplo.index', $datos);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('ejemplo.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $datosEjemplo= request()->except(['_token']);
        if($request->hasFile('Foto')){ 
            
            $datosEjemplo['Foto']=$request->file('Foto')->store('uploads', 'public');
        }

        ejemplo::insert($datosEjemplo);
        return redirect('ejemplo')->with('mensaje','Ejemplo agregado con éxito');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ejemplo  $ejemplo
     * @return \Illuminate\Http\Response
     */
    public function show(Ejemplo $ejemplo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ejemplo  $ejemplo
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $ejemplo=Ejemplo::findOrFail($id);
        return view('ejemplo.edit', compact('ejemplo'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ejemplo  $ejemplo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $datosEjemplo= request()->except(['_token', '_method']);


        if($request->hasFile('Foto')){ 
            $ejemplo=Ejemplo::findOrFail($id);
            Storage::delete('public/'.$ejemplo->Foto);
            $datosEjemplo['Foto']=$request->file('Foto')->store('uploads', 'public');
        }
        Ejemplo::where('id','=',$id)->update($datosEjemplo);

        $ejemplo=Ejemplo::findOrFail($id);
        return view('ejemplo.edit', compact('ejemplo'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ejemplo  $ejemplo
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ejemplo=Ejemplo::findOrFail($id);
        if(Storage::delete('public/'.$ejemplo->Foto)){
            Ejemplo::destroy($id);
        }
        
        return redirect('/ejemplo')->with('mensaje', 'Ejemplo Eliminado con Éxito');
    }
}
