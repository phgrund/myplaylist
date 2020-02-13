<?php

use Illuminate\Http\Request;

Route::get('/animes', 'AnimeController@index');
Route::get('/animes/{id}', 'AnimeController@show');
Route::post('/animes', 'AnimeController@store');
Route::put('/animes/{id}', 'AnimeController@update');
Route::delete('/animes/{id}', 'AnimeController@destroy');

Route::group([
  'middleware' => 'api',
  'prefix' => 'auth'
], function ($router) {
  Route::post('login', 'AuthController@login');
  Route::post('logout', 'AuthController@logout');
  Route::post('me', 'AuthController@me');
});
