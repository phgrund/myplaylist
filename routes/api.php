<?php

use Illuminate\Http\Request;

Route::get('/animes', 'AnimeController@index');
Route::post('/animes', 'AnimeController@store');

Route::group([
  'middleware' => 'api',
  'prefix' => 'auth'
], function ($router) {
  Route::post('login', 'AuthController@login');
  Route::post('logout', 'AuthController@logout');
  Route::post('me', 'AuthController@me');
});
