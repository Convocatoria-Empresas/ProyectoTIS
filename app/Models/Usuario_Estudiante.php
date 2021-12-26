<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario_Estudiante extends Model
{
    use HasFactory;
    protected $fillable=[
        'Nombre_est',
        'Codigo_est',
        'Correo_est',
        'Contrasena_est',
        
];
}
