<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    //Aqui se espesifica los campos de la tabla que queremos que se guarde en la base de datos
    use HasFactory;
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'cod_sis',
        'domicilio'
    ];
}
