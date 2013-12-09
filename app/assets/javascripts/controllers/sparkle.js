


var module = angular.module( 'my.resource', [ 'ngResource' ] );

module.factory( 'Resource', [ '$resource', function( $resource ) {
  return function( url, params, methods ) {
    var defaults = {
      update: { method: 'put', isArray: false },
      create: { method: 'post' }
    };
    
    methods = angular.extend( defaults, methods );

    var resource = $resource( url, params, methods );

    resource.prototype.$save = function() {
      if ( !this.id ) {
        return this.$create();
      }
      else {
        return this.$update();
      }
    };

    return resource;
  };
}]);


var module = angular.module( 'services', [ 'my.resource' ] );

module.factory( 'Light', [ 'Resource', function( $resource ) {
  return $resource( 'lights/:id', { id: '@id' } );
}]);


var app = angular.module('sparkleApp', ['ngResource', 'services']);


// app.factory('LightService', ['ngResource',
//   function($resource)
//   {
//     // return $resource('lights/:lightId.json', {}, {
//     //   query: {method:'GET', params:{lightId:'lights'}, isArray:true}
//     // });
//     return "whaaa";
//   }]);


app.controller('LightsCtrl', ['$scope', '$log', 'Light', function($scope, $log, Light)
{
  $scope.$log = $log; 
  $log.info('Angular app started.');

  // $scope.lit = LightService.fetch();

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

