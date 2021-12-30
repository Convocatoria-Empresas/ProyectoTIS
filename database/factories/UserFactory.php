<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'Nombre_usu'=> $this->faker->name,
            'Apellido_Pat'=> $this->faker->lastName,
            'Apellido_Mat'=> $this->faker->lastName,
            'Codigo_usu'=> $this->faker->ean8,
            'Correo_usu'=> $this->faker->email,
            'Telf'=> $this->faker->phoneNumber,
            'Carnet'=> $this->faker->email,
            'Contrasena_usu'=> $this->faker->password,
            'Rol_usu'=> $this->faker->jobTitle,

        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
