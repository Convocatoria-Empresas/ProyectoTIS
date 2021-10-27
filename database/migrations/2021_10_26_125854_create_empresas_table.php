<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpresasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empresas', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre_Largo')->unique();
            $table->string('Nombre_Corto', 10);
            $table->string('Direccion', 200);
            $table->Integer('Telefono');
            $table->string('Documento_1');
            $table->string('Documento_2');
            $table->string('Documento_3');
            $table->string('Documento_4');
            $table->string('Socio_1',9);
            $table->string('Socio_2',9);
            $table->string('Socio_3',9);
            $table->string('Socio_4',9);
            $table->string('Socio_5',9);
            $table->string('NIT',10);
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
        Schema::dropIfExists('empresas');
    }
}
