angular.module('app2')
		.controller('addController',function ($scope,dataservice){
	console.log("hee");
	$scope.bank = {};
	$scope.options = ["Please Choose","Money Market Account","Credit Card Account","Auto Loan Account","Personal Loan Account",
	"Investment Account","Checking Account","Home Loan Account","Savings Account"];

	$scope.submitclick = function(ojb,str){
		
		dataservice.add(ojb).success(function(response) {
        	
            $scope.bank = [response];
            dataservice.setdata($scope.bank,str);
            
        }).error(function(error){

        	alert("error occured");
        });
	};


});

