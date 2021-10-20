<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Convocatoria extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('convocatoria',function(Blueprint $table){
            $table->string('Titulo');
            $table->string('Codigo',6)->unique();
            $table->date('Fecha');
            $table->smallinteger('Semestre');
            $table->string('Correo_electronico');
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
        Schema::dropIfExists('convocatoria');
    }
}
