<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Postulacion extends Model
{
    use HasFactory;
    protected $fillable=[
        
        'PNombre_Largo',
        'PNombre_Corto',
        'PCorreo_electronico',
        'PTelefono',
        'PNIT',
        'PSolvencia',
        'PConstitucion',
        'PPlan_Pago',
        'PCarta',
        'PSocio_1',
        'PSocio_2',
        'PSocio_3',
        'PSocio_4',
        'PSocio_5',
        'PEstado_Aprob',
        
];
}
