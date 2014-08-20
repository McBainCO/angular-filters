var myApp = angular.module('myApp', []);

function FirstController($scope, Data) {
  @scope.data = Data;
}

myApp.factory('Data', function(){
  return {message: "I'm data from a service"}
});

function SecondController($scope, Data) {
  @scope.data = Data;
}

myApp.filter('reverse', function(data){
  return function (text) {
    return text.split("").reverse().join("")+ " " + Data.message;
  }
});