<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Anime extends Model
{
    protected $fillable = [
        'en_title',
        'jp_title',
        'episodes',
        'sinopse',
        'season',
        'year',
        'genre',
        'image_url'
    ];
}
