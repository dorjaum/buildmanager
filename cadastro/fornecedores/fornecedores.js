'use strict';

angular.module('fornecedores', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/fornecedores', {
		templateUrl: 'cadastro/fornecedores/fornecedores.html',
		controller: 'fornecedoresCtrl'
	});
}]);
angular.module('fornecedores').controller('fornecedoresCtrl', function($scope){
	$scope.isActive="active";
});