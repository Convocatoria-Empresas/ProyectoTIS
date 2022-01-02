<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//de esta forma SOLO nos genera las rutas de los metodos que estan en el only
//Route::resource('blog',App\Http\Controllers\BlogController::class)->only(['index','store','show','update','destroy']);

//de esta forma nos genera todas las rutas
Route::resource('convocatoria',App\Http\Controllers\ConvocatoriaController::class);

Route::put('empresa/{empresa}/edit/{editar}',['uses' =>'App\Http\Controllers\EmpresaController@edit']);
Route::get('empresa/{empresa_id}/approve/{aprob}', ['uses' =>'App\Http\Controllers\EmpresaController@approve']);

Route::resource('empresa',App\Http\Controllers\EmpresaController::class);

Route::resource('user',App\Http\Controllers\UserController::class);

//Route::resource('convocatorias', ConvocatoriaEmpresaController::class);
