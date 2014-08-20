var myApp = angular.module("currencyApp", []);

myApp.controller('currencyCtrl',['$scope', function($scope){
  $scope.amount = 1234.56
}]);

myApp.filter('myCurrency', ['$filter', function($filter){
  return function(input) {
    if(input % 1 == 0) {
      input = input.toFixed(0);
    }
    return '$'+ input;
  };
}]);