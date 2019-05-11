<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TodoList extends Model
{
    //todolists . lists
  // protected $table = 'lists';
  protected $fillable = ['name','user_id'];
}
