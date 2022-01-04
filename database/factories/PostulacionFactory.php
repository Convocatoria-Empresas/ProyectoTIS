<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostulacionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'PNombre_Largo'=> $this->faker->company,
            'PNombre_Corto'=> $this->faker->companySuffix,
            'PCorreo_electronico'=> $this->faker->companyEmail,
            'PTelefono'=> $this->faker->ean8,
	        'PNIT'=> $this->faker->ean8,
            'PSolvencia'=> $this->faker->bankAccountNumber,
            'PConstitucion'=> $this->faker->bankAccountNumber,
            'PPlan_Pago'=> $this->faker->bankAccountNumber,
            'PCarta'=> $this->faker->bankAccountNumber,
            'PSocio_1'=> $this->faker->ean8,
            'PSocio_2'=> $this->faker->ean8,
            'PSocio_3'=> $this->faker->ean8,
            'PSocio_4'=> $this->faker->ean8,
            'PSocio_5'=> $this->faker->ean8,
            'PAsesordeEmp'=> $this->faker->name,
            'PGetiodeEmp'=> $this->faker->century,
            'PEstado_Aprob'=> $this->faker->boolean,
        ];
    }
}