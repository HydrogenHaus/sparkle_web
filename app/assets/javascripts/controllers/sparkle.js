var app = angular.module('sparkleApp', []);

// // var sparkleServices = app.module('sparkleServices', ['ngResource']);
 
// app.factory('Light', ['ngResource',
//   function($resource){
//     return $resource('lights/:lightId.json', {}, {
//       query: {method:'GET', params:{lightId:'lights'}, isArray:true}
//     });
//   }]);


app.controller('LightsCtrl', ['$scope', function($scope)
{

  $scope.test = "Hello World"; 

  $scope.lit = false;

  $scope.on_switch = function()
  {
    $scope.lit = false;
  }

  $scope.off_switch = function()
  {
    $scope.lit = true;
  }
}]);