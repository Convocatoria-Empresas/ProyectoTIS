<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuarioEstudiantesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario__estudiantes', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre_est');
            $table->string('Codigo_est')->unique();
            $table->string('Correo_est');
            $table->string('Contrasena_est');
            $table->rememberToken();
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
        Schema::dropIfExists('usuario__estudiantes');
    }
}
