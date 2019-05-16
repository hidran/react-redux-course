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
      $list = $req->list_id ? : 1;
      $where = [
        'list_id' => $list
      ];
      if($req->has('filter') && $req->filter!=='ALL'){
          $where['completed'] = $req->filter === 'TODO'? 0 : 1;
      }
        $result =  Todo::where( $where)
        ->select(['id', 'todo','list_id','completed'])

        ->orderBy('id', 'DESC')
        ->paginate(10);
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
        $data = $req->only(['list_id','todo','completed']);
        $data['list_id'] = $data['list_id'] ? : 1;
        /**
         * Todo
         * Add user id from session
         */
        $data['user_id'] = 1;
        $todo = Todo::create($data);
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
