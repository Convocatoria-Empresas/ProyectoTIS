<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Convocatorias extends Model
{
    use HasFactory;
    protected $fillable=[
        'Codigo_Conv',
        'Titulo',
        'Descripcion',
        'Fecha',
        'Gestion',
        
];
}
