<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class Usuario_EstudianteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'Nombre_est'=> $this->faker->name,
            'Codigo_est'=> $this->faker->ean8,
            'Correo_est'=> $this->faker->email,
            'Contrasena_est'=> $this->faker->password,

        ];
    }
}