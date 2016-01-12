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