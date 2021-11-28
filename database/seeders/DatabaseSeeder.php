<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //Aqui se coloca el nombre del modelo con la que estamos trabajando
        // \App\Models\User::factory(10)->create();
        \App\Models\Empresa::factory(20)->create();
    }
}
