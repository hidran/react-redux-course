<?php
use App\Models\Todo;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('todos', function () {
   //return Todo::get();
   return Todo::where('list_id',3)
   ->select(['id', 'todo'])

   ->orderBy('id', 'DESC')
   ->paginate(20);
});

Route::get('todos/{id}', function ($id) {
    //return Todo::get();
    return Todo::findOrFail($id);
 })->where([
     'id' => '[0-9]+'
 ]);
