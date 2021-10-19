<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PlanDePagos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Plan_de_Pagos',function(Blueprint $table){
            $table->string('Codigo',6)->unique();
            $table->date('Fecha');
            $table->smallInteger('Porcentaje');
            $table->string('Entregables');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Plan_de_Pagos');
    }
}
