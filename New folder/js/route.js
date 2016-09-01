angular.module('Game')
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/template1',{
		templateUrl: 'template1/temp1.html'

	})

	.when('/template2',{
		templateUrl: 'template2/temp2.html'
	})
	.otherwise({redirectTo:'/'});

}]);
