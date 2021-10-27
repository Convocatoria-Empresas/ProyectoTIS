<?php

namespace Database\Factories;

use App\Models\Empresa;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmpresaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Empresa::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
          /*  'Nombre_Largo' => $this->faker->name(),
            'Nombre_Corto' => $this->faker->name(),
            'Tipo_de_Sociedad' => $this->faker->name(),
            'Direccion' => $this->faker->name(),
            'Telefono' => $this->faker->numberBetween(),
            'Correo_electronico' => $this->faker->name(),
            'Documento_1' => $this->faker->name(),
            'Documento_2' => $this->faker->name(),
            'Documento_3' => $this->faker->name(),
            'Documento_4' => $this->faker->name(),
            'Socio_1' => $this->faker->name(),
            'Socio_2' => $this->faker->name(),
            'Socio_3' => $this->faker->name(),
            'Socio_4' => $this->faker->name(),
            'Socio_5' => $this->faker->name(),
            'Otro' => $this->faker->name(),
            */
            
        ];
    }
}
