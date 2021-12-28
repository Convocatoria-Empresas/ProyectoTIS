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
            $table->string('Correo_electronico');
            $table->string	('Telefono');
	        $table->longText('NIT');
            $table->longText('Solvencia');
            $table->longText('Constitucion');
            $table->longText('Plan_Pago');
            $table->longText('Carta');
            $table->string('Socio_1',9);
            $table->foreign('Socio_1')->references('Codigo')->on('socios');
            $table->string('Socio_2',9);
            $table->foreign('Socio_2')->references('Codigo')->on('socios');
            $table->string('Socio_3',9);
            $table->foreign('Socio_3')->references('Codigo')->on('socios');
            $table->string('Socio_4',9);
            $table->foreign('Socio_4')->references('Codigo')->on('socios');
            $table->string('Socio_5',9);
            $table->foreign('Socio_5')->references('Codigo')->on('socios');
            $table->boolean('Estado_Aprob')->default(0);
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
