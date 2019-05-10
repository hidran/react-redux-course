<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Todo;
use Faker\Generator as Faker;

$factory->define(Todo::class, function (Faker $faker) {
    return [
        'todo'=> $faker->name,
        'completed' => $faker->randomElement([0,1])
    ];
});