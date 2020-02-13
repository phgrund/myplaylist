<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Anime;

class AnimeController extends Controller
{
    public function index() {
        return response()->json(Anime::all());
    }

    public function store() {
        $data = $this->validateData();

        $anime = Anime::create($data);

        return response()->json($anime);
    }

    public function validateData() {
        return request()->validate([
            'en_title' => 'required',
            'jp_title' => 'required',
            'episodes' => 'numeric',
            'sinopse' => '',
            'season' => '',
            'year' => 'numeric',
            'genre' => '',
            'image_url' => ''
        ]);
    }
}
