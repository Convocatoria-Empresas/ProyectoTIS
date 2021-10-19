<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EmpresasRegistradas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empresas_registradas',function(Blueprint $table){
            $table->string('Nombre_Largo');
            $table->string('Nombre_Corto');
            $table->string('Tipo_de_Sociedad');
            $table->string('Direccion');
            $table->string('Correo_electronico');
            $table->string('Socios');
            $table->string('Otro');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
