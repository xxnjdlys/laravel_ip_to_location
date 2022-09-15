@extends('layouts.app')

@section('appcss')
    <link type="text/css" rel="stylesheet" href="{{asset('css/home.css')}}">
@endsection

@section('apptitle')
    网页 Demo
@endsection

@section('appcontent')
    <body>
    <div class="container">
        <div class="center">
            <button class="hello-btn">
                Hello Html By PHP!
            </button>
        </div>
    </div>
    </body>
@endsection

@section('appjs')
    <script src='{{asset('js/jquery.easing.min.js')}}'></script>
@endsection
