<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name', 'My playlist') }}</title>
  <script src="{{ asset('js/app.js') }}" defer></script>
  <style>
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      font-family: 'Roboto', sans-serif;
      scroll-behavior: smooth;
    }
  </style>
</head>
<body>
  <noscript>
    Necessário javascript para executar esta página.
  </noscript>
  <div id="app">
    @yield('content')
  </div>
</body>
</html>
