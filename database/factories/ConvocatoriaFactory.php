<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ConvocatoriaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'Codigo_Conv'=> $this->faker->numberBetween($min = 10000, $max = 99999),
            'Titulo'=> $this->faker->city,
            'Descripcion'=> $this->faker->realText($maxNbChars = 50, $indexSize = 2),
            'Asesor'=> $this->faker->name,
            'Correo_Ase'=> $this->faker->email,
            'Fecha'=> $this->faker->date($format = 'Y-m-d', $max = 'now'),
            'Informacion_A'=> $this->faker->numberBetween($min = 1000, $max = 9000),
            'Informacion_B'=> $this->faker->numberBetween($min = 1000, $max = 9000),
	        'Gestion'=> $this->faker->century,
            
        ];
    }
}