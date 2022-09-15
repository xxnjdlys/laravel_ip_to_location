<!DOCTYPE html>
<html lang="en">
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,viewport-fit=cover">

    @yield('appcss')

    <link type="text/css" rel="stylesheet" href="{{asset('css/fonts.css')}}">
    <link rel="shortcut icon" href="{{asset('images/applogo.png')}}">

    <title>@yield('apptitle')</title>


    <script src='{{asset('js/jquery.js')}}'></script>

</head>

{{--body--}}
@yield('appcontent')

@yield('appjs')
</html>
