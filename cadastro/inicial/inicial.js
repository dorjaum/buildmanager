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
	$scope.app = 'HOME';
	$scope.showSubItensCadastro = (1 === 0 );
	$scope.itensMenuCadastro = [
		{nome:"Usuario", link: "#/usuario"},
		{nome:"Clientes", link: "#/clientes"},
		{nome:"Empresa", link: "#/empresa"},
		{nome:"Fornecedores", link: "#/fornecedores"},
		{nome:"Centros de custo", link: "#/inicial"},
		{nome:"Grupos de Materiais", link: "#/inicial"},
		{nome:"Unidades de Medida", link: "#/inicial"},
		{nome:"Materiais e Servicos", link: "#/inicial"},
		{nome:"Historicos", link: "#/inicial"}
	];
	$scope.showSubItensCadastro = function(){
		$scope.showSubItensCadastro = !$scope.showSubItensCadastro;
	}
})