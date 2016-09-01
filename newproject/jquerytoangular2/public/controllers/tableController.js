angular.module('app2')
		.controller('tableController',function ($scope,dataservice){
	
	
	$scope.options = ["Please Choose","Money Market Account","Credit Card Account","Auto Loan Account","Personal Loan Account",
	"Investment Account","Checking Account","Home Loan Account","Savings Account"];
	
	console.log(dataservice.getFlag());

	if(dataservice.getFlag()=='addition'){
		console.log("inside add");
	$scope.peopledata = dataservice.getdata();
}
if(dataservice.getFlag()=='load'){
	console.log("inside load");
	$scope.peopledata = dataservice.getdata();
}



});

