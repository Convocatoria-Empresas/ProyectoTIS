<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class NotificacionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'NTitulo'=> $this->faker->word,
            'Texto'=> $this->faker->paragraph($nbSentences = 5, $variableNbSentences = true),
            'Emisor'=> $this->faker->freeEmail,
            'Receptor'=> $this->faker->freeEmail,
            'Leido'=> $this->faker->boolean,
        ];
    }
}