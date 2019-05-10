<?php
use App\Models\Todo;
use Illuminate\Http\Request;

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

 Route::post('todos', function ( Request $req) {
   return Todo::create($req->all());

 });

 Route::patch('todos/{id}', function ($id,  Request $req) {
    $todo = Todo::findOrFail($id);
    $todo->todo = $req->todo; // $req->input('todo')
    $todo->completed =(int) $req->completed;
    $todo->list_id = (int) $req->list_id;
    $success = $todo->save();
    return response()->json([
        'data' => $todo,
        'success' => $success
    ]);
 })->where([
     'id' => '[0-9]+'
 ]);

 Route::delete('todos/{id}', function ($id) {

    $todo = Todo::findOrFail($id);
    $success = $todo->delete();
    return response()->json([
        'data' => $todo,
        'success' => $success
    ]);
 })->where([
     'id' => '[0-9]+'
 ]);

