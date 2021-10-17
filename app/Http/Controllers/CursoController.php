<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CursoController extends Controller
{
    public function index(){
        //pag main
        return  view('cursos.index');
    }
    public function create(){
        //crear el cruso
        return view('cursos.create');
    }
    public function show($curso){
        //mostrar el curo en particular
        return view('cursos.show', ['curso' => $curso]);
    }
}
