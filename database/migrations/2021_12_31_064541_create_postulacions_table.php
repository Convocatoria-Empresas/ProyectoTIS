<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostulacionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('postulacions', function (Blueprint $table) {
            $table->id();
            $table->string('PNombre_Largo')->unique();
            $table->string('PNombre_Corto', 10);
            $table->string('PCorreo_electronico');
            $table->string	('PTelefono');
	        $table->longText('PNIT');
            $table->longText('PSolvencia');
            $table->longText('PConstitucion');
            $table->longText('PPlan_Pago');
            $table->longText('PCarta');
            $table->string('PSocio_1',9);
            $table->foreign('PSocio_1')->references('Codigo')->on('Psocios');
            $table->string('PSocio_2',9);
            $table->foreign('PSocio_2')->references('Codigo')->on('sPocios');
            $table->string('PSocio_3',9);
            $table->foreign('PSocio_3')->references('Codigo')->on('soPcios');
            $table->string('PSocio_4',9);
            $table->foreign('PSocio_4')->references('Codigo')->on('socPios');
            $table->string('PSocio_5',9);
            $table->foreign('PSocio_5')->references('Codigo')->on('sociPos');
            $table->boolean('PEstado_Aprob')->default(0);
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
        Schema::dropIfExists('postulacions');
    }
}
