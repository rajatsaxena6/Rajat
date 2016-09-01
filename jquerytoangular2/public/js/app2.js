var app2 = angular.module('app2', []);

app2.controller('formController', function($scope, dataservice) {
	$scope.page = 3;
	$scope.hidden = true;

	// $scope.options = ["Please Choose","Money Market Account","Credit Card Account","Auto Loan Account","Personal Loan Account",
	// "Investment Account","Checking Account","Home Loan Account","Savings Account"];

	$scope.searchclick = function() {

	dataservice.searchone($scope.searchvalue).success(function(response){

    		$scope.peopledata = response;
    	
    });

	};

	$scope.next = function() {

		
		dataservice.nextpage($scope.page).success(function(response){

			$scope.peopledata = response;
			$scope.page = $scope.page + 1;
		})
		
	};

	$scope.prev = function() {

		
		dataservice.nextpage($scope.page).success(function(response){

			$scope.peopledata = response;
			$scope.page = $scope.page - 1;
		})
		
	};
//viewall
    $scope.viewclick = function(str) {
    	$scope.hidden = false;

        dataservice.searchall().success(function(response) {
            $scope.pdata = response;

            dataservice.setdata($scope.pdata,str);

            
        }).error(function(error){

            alert("error in viewAll");
        });
    };

    $scope.deleteclick = function(id) {
        

        var userId = $scope.peopledata[id].id;
        
        
        dataservice.delete(userId).success(function(response) {

            $scope.peopledata.splice(id, 1);

        });
    };

    // $scope.submitclick = function(ojb) {
    	
        

    //     dataservice.add(ojb).success(function(response) {
    //     	console.log(response);
    //         $scope.peopledata = [response];
    //     });
    // };

    $scope.showEditRow = function(r) {
    	if($scope.active!=r){
    		$scope.active = r;
    	}
    	else{
    		$scope.active = null;
    	}
    }

    $scope.update = function(oj,id) {

    	dataservice.update(oj,id).success(function(response){

    		console.log(response);
    		$scope.peopledata = [response];
    	})
    }

    $scope.master = {};
   
});














	
