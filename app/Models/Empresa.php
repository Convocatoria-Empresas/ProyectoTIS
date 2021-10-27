<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    use HasFactory;

    protected $fillable= [
            
            'Nombre_Largo' ,
            'Nombre_Corto',
            'Direccion' ,
            'Telefono' ,
            'Documento_1' ,
            'Documento_2' ,
            'Documento_3' ,
            'Documento_4' ,
            'Socio_1' ,
            'Socio_2' ,
            'Socio_3' ,
            'Socio_4' ,
            'Socio_5' ,
            'NIT' ,

    ];
}
