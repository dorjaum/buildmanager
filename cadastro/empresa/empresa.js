angular.module('empresa', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/empresa', {
		templateUrl: 'cadastro/empresa/empresa.html',
		controller:'empresaCtrl'
	});	
}]);
angular.module('empresa').controller('empresaCtrl', function($scope){
	$scope.isActive="active";
});