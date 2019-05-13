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
      $list = $req->list_id ?? 1;
        $result =  Todo::where('list_id',$list)
        ->select(['id', 'todo','list_id'])

        ->orderBy('id', 'DESC')
        ->paginate(20);
        return $this->getResult( $result->toArray() );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        $todo = Todo::create($req->all());
        return $this->getResult( $todo->toArray() );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo)
    {
        return $this->getResult( $todo->toArray() );
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
        return $this->getResult( $todo->toArray(), $success);
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
    return $this->getResult( $todo->toArray() ,$success);
    }
    private function getResult(array $data =[] , $success = true)
    {
        return response()->json([
            'result' => $data,
            'success' => $success
        ]);
    }
}
