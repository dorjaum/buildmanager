'use strict';

angular.module('clientes', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/clientes', {
		templateUrl: 'cadastro/clientes/clientes.html',
		controller: 'clientesCtrl'
	})
}]);

angular.module('clientes').controller('clientesCtrl', function($scope){
	$scope.isActive = "active";
});