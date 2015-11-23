angular.module('empresa', ['ngRoute'])
.config(['$routeProvider', function($routeProvider, $scope, $http){
	$routeProvider.when('/empresa', {
		templateUrl: 'cadastro/empresa/empresa.html',
		controller:'empresaCtrl'
	});	
}]);
angular.module('empresa').controller('empresaCtrl', function($scope, $http){
	$scope.isActive="active";
	$scope.cadastrarEmpresa = function(empresa){
		//$http.post('http://maquinadojorge.com.br/cadastraEmpresa/empresa')
		console.log(empresa);
	}

});