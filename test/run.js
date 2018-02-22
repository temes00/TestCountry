'use strict';

angular.module('Country',[])
	.controller('CountrySearch', function($scope, $http){
		$scope.$watch('search', function(){
		fetch();


		});
	$scope.wait = false;
	$scope.showInfo = false;
	$scope.linePlace = 'Enter name, please';
	
	function showMore(index){
		console.log(index);


	};

	function countryReFetch(index){
		$http.get("https://restcountries.eu/rest/v2/name/all")
			.then(function(resultat){
				$scope.relateds = resultat.data;
				$scope.clickElement = relateds[index];
				console.log(resultat.data);
				console.log(clickElement);
			},function(){
				console.log("Error reFetch");
			});

	};

	function fetch() {
		$http.get("https://restcountries.eu/rest/v2/name/" + $scope.search)
			.then(function(result){
				$scope.relateds = result.data;

				if ($scope.relateds.length == 1) 
					{ 
						$scope.wait = true;
					};

				console.log(result.data);
				console.log(result.data[0]);
			},function(){
				console.log("Error");
				$scope.search = '';
				$scope.linePlace = 'Incorrect name';
			});

	};
});

