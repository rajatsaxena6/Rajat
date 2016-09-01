angular.module('app2')
	.config(['$routeProvider',function($routeProvider){

		$routeProvider
		.when('/addTemplate',{
			templateUrl: '/templates/addTemplate.html',
			controller: 'addController'
		})
		.when('/tableTemplate',{
			templateUrl: '/templates/tableTemplate.html',
			controller:'tableController'
		})
		.otherwise({redirectTo:'/'});
	}]);