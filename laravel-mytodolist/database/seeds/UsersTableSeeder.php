<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\TodoList;
use App\Models\Todo;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
        DB::table('users')->insert([
            'name' => Str::random(10),
            'email' => Str::random(10).'@gmail.com',
            'password' => bcrypt('secret'),
            'created_at' => now()
        ]);
        */
        factory(User::class, 50)
        ->create()->each(
            function($user){
           factory(TodoList::class,10)
           ->create([
               'user_id'=> $user->id
           ])->each(function($list){
            factory(Todo::class,10)
            ->create([
                'list_id' => $list->id
            ]);
           });
        });
    }
}
