angular.module("myapp",['ngAnimate'])
.controller('mycontrol', ['$scope', function($scope){
    $scope.deyer = false; 
	$scope.myfunc = function(){
    
     $scope.deyer = !$scope.deyer


	}
	
}]);