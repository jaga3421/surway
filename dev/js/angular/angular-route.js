appSurway.config(['$routeProvider',function($routeProvider){  
    $routeProvider.
        when('/configure-surway', {
            templateUrl: 'pages/settings.html',
            controller: 'ctrlSettings'
        }).
        when('/build-surway', {
            templateUrl: 'pages/builder.html',
            controller: 'ctrlBuilder' 
        }).
        otherwise({
           redirectTo: '/configure-surway'
        });
  }
]);

