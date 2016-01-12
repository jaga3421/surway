var SURWAY = {};
	SURWAY.view = {},
	SURWAY.model = {},

	SURWAY.config = {},
	SURWAY.config.elementList = '_be/config/elements.json';


// Angular app 
var appSurway = angular.module('appSurway',['ngRoute']);

document.addEventListener('DOMContentLoaded', function(){ 
    //NAMESPACE.main.init();
}, false);


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


var ctrlSurway = function($scope, $routeParams, $http){
	$scope.surway = {};
	$scope.surway.settings = {};
	$scope.surway.blocks = {};

};
appSurway.controller('ctrlBuilder',function($scope, $http, $sce){

	$scope.builder = {};
	$scope.builder.blocks = [];



	$http.get(SURWAY.config.elementList).success( function(response) {
		$scope.builder.elementLists = response._elements;
	});

	//Methods
	$scope.builder.createBlock = function(id){
		var _newBlock = {};
		_newBlock.id = $scope.builder.elementLists[id].id;
		_newBlock.control = $scope.builder.elementLists[id].control;
		_newBlock.control = $sce.trustAsHtml(_newBlock.control);
		_newBlock.description = 'Enter Your Description here';
		_newBlock.placeholder = 'placeholder';


		$scope.builder.blocks.push(_newBlock);

	}

})
appSurway.controller('ctrlSettings',function($scope, $routeParams, $http){

});
SURWAY.model.clsElement = function(elem){
	var _id=elem.id,
		_type=elem.type,
		_name=elem.name;

	var _getType = function(){
		return _type;
	}
	var _getId = function(){
		return _id;
	}
	var _getName = function(){
		return _name;
	}

    return {
    	getType: _getType,
    	getId:_getId,
    	getName:_getName
    }   
};