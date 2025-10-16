<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserModules extends Model
{
    //

    use HasFactory;

    protected $fillable = [
        'user_id',
        'module_id',
        'active',
    ];

    // public function users()
    // {
    //     return $this->hasMany(User::class);
    // }

    // public function modules() {
    //     return $this->hasMany(Modules::class);
    // }
}
