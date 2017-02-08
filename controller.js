var app = angular.module('myApp', []);

app.controller("productCtrl", function($scope){
	$scope.products = ['Milk', 'Food', 'Curd'];
	$scope.addMe = 'Add Here';
	$scope.active = 'false';


	$scope.addProduct = function(){
		if (!$scope.addMe) {return;}  

		if($scope.products.indexOf($scope.addMe) == -1  ) {
			$scope.products.push($scope.addMe);
			$scope.addMe = '';
		} else {
			console.log("Already Exist");
		}	

	};

	$scope.removeProduct = function(x){
		$scope.products.splice(x,1);
	};
	$scope.updateProduct = function(index,x){
		$scope.addMe = x;
		$scope.editIndex = index;

		$scope.active = !$scope.active;

	};
	$scope.addUpdatedProduct = function(){
		$scope.products.splice($scope.editIndex, 1, $scope.addMe);
		$scope.active = !$scope.active;
		$scope.addMe = 'Add Here';

	};
});