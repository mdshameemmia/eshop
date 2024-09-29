<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    use HasFactory;

    protected $table ='contact_us';
    protected $guarded = [];

    static public $indexColumnKeys = [
        'id'                    => 'ID',
        'name'                  => 'Name',
        'email'                 => 'Email',
        'subject'               => 'Subject',
        'message'               => 'Message',
        'action'                => 'Action'
    ];

}
