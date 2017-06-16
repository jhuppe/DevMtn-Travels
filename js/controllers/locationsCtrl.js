angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv, $stateParams) {
  $scope.travelInfo = mainSrv.travelInfo;

})
