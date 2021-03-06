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
        // \App\Models\User::factory(10)->create();
        \App\Models\Empresa::factory(10)->create();
        \App\Models\Socio::factory(50)->create();
        \App\Models\Convocatoria::factory(10)->create();
        \App\Models\Postulacion::factory(10)->create();
        \App\Models\User::factory(10)->create();
        \App\Models\Notificacion::factory(20)->create();

    }
}
