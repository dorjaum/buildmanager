'use strict';

angular.module('usuario', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/usuario', {
		templateUrl: 'cadastro/usuario/usuario.html',
		controller: 'usuarioCtrl'
	});
	$routeProvider.otherwise({redirectTo: 'cadastro/usuario/usuario.html'})
}]);
angular.module('usuario').controller('usuarioCtrl', function($scope){
	$scope.app= "CADASTRO USUARIO";
	$scope.isActive="active";
	$scope.usuarios = [
		{nome: "Joao da Silva", cpfCnpj: "132.234.345-89"},
		{nome: "Maria das Dores", cpfCnpj: "321.555.444-80"},
		{nome: "Pinoccio Maddeiro", cpfCnpj: "555.042.023-40"}
	]; 
	$scope.addContato = function(usuario){
		$scope.usuarios.push(angular.copy(usuario));
		delete $scope.usuario;
	};

});