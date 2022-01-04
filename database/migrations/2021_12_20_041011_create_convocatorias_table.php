<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConvocatoriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('convocatorias', function (Blueprint $table) {
            $table->id();
            $table->string('Codigo_Conv',5)->unique();
            $table->string('Titulo');
            $table->text('Descripcion');
            $table->string('Asesor');
            $table->string('Correo_Ase');
            $table->date('Fecha');
            $table->longText('Informacion_A');
            $table->longText('Informacion_B');
            $table->string('Gestion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('convocatorias');
    }
}