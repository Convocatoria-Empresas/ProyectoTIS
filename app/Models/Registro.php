<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registro extends Model
{
    use HasFactory;
    protected $fillable = [
        'Nombre_Largo',
        'Nombre_Corto',
        'Telefono',
       'Correo_electronico',
        'Documento_1',
        'Documento_2',
        'Documento_3',
        'Documento_4',
    ];
    
    }
