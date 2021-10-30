<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegistrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registros', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre_Largo')->unique();
            $table->string('Nombre_Corto', 10);
            $table->mediumInteger('Telefono');
            $table->string('Correo_electronico');
            $table->string('Documento_1');
            $table->string('Documento_2');
            $table->string('Documento_3');
            $table->string('Documento_4');
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
        Schema::dropIfExists('registros');
    }
}
