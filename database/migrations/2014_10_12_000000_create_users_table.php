<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre_usu');
            $table->string('Apellido_Pat');
            $table->string('Apellido_Mat');
            $table->string('Codigo_usu')->unique();
            $table->string('Correo_usu');
            $table->string('Telf');
            $table->string('Carnet');
            $table->string('Contrasena_usu');
            $table->string('Rol_usu');
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
        Schema::dropIfExists('users');
    }
}
