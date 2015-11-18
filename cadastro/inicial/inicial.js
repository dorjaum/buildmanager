'use strict';

angular.module('inicial', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/inicial', {
		templateUrl: 'cadastro/inicial/inicial.html',
		contoller: 'inicialCtrl'
	})
}]);

angular.module('inicial').controller('inicialCtrl', function($scope){
	$scope.isActive = 'active';
	$scope.showSubItensCadastro = (1 === 0);
	$scope.itensMenuCadastro = [
		{nome:"USUARIO", link: "#/usuario"},
		{nome:"CLIENTES", link: "#/clientes"},
		{nome:"EMPRESA", link: "#/empresa"},
		{nome:"FORNECEDORES", link: "#/fornecedores"}		
	];
	$scope.showSubItensCadastro = function(){
		$scope.showSubItensCadastro = !$scope.showSubItensCadastro;
	}
})