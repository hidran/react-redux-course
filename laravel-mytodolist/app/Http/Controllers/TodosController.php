<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index( Request $req)
    {
      //   request()->input('list_id');
      $list = $req->list_id ?? 0;
        return Todo::where('list_id',$list)
        ->select(['id', 'todo'])

        ->orderBy('id', 'DESC')
        ->paginate(20);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        return Todo::create($req->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo)
    {
        return $todo;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, Todo $todo)
    {

        $todo->todo = $req->todo; // $req->input('todo')
        $todo->completed =(int) $req->completed;
        $todo->list_id = (int) $req->list_id;
        $success = $todo->save();
        return response()->json([
            'data' => $todo,
            'success' => $success
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo)
    {


    $success = $todo->delete();
    return response()->json([
        'data' => $todo,
        'success' => $success
    ]);
    }
}
