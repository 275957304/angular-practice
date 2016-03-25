    var myApp = angular.module('myApp',['ngRoute','myController']);

    myApp.config(function($routeProvider){
        $routeProvider
        .when('/',{
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/register',{
            templateUrl : 'pages/register.html',
            controller  : 'registerShow'
        })
        .otherwise({
            redirectTo:'/'
        })
    });

