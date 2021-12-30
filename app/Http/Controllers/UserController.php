<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $RegisUser = User::all(['id','Nombre_usu',
        'Apellido_Pat',
        'Apellido_Mat',
        'Codigo_usu',
        'Correo_usu',
        'Telf',
        'Carnet',
        'Contrasena_usu',
        'Rol_usu',]);
        return response()->json($RegisUser);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $datosUsuario= request()->except('_token');
        /*if($request-> hasFile('Solvencia')){
            $datosEmpresa['Solvencia']=$request->file('Solvencia')->store('uploads', 'public');
        }*/

        $usuario= new User();
        $usuario-> Nombre_usu = $request->Nombre_usu;
        $usuario->Apellido_Pat = $request->Apellido_Pat;
        $usuario->Apellido_Mat = $request->Apellido_Mat;
        $usuario->Codigo_usu = $request->Codigo_usu;
        $usuario->Correo_usu = $request->Correo_usu;
        $usuario->Telf = $request->Telf;
        $usuario->Carnet = $request->Carnet;
        $usuario->Contrasena_usu = $request->Contrasena_usu;
        $usuario->Rol_usu = $request->Rol_usu;
        
        $usuario->save();

        return $usuario;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $usuario)
    {
        $usuario = User::create($usuario->post());
        return response()->json([
            'user'=>$usuario]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
