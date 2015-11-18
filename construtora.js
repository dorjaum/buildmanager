'use strict';

angular.module('construtora',[
'ngRoute',
'inicial',
'clientes',
'empresa',
'fornecedores',
'usuario'
]).config(['$routeProvider',function($routeProvider) {
	$routeProvider.otherwise({redirectTo:'/inicial'})
}]);