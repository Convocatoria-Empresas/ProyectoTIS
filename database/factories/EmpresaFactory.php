<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EmpresaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        //los atributos de la tabla en la BD
        return [
            'first_name' => $this->faker->name(),
            'last_name' => $this->faker->lastname(),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'cod_sis' => $this->faker->phoneNumber(),
            'domicilio' => $this->faker->address()
        ];
    }
}
