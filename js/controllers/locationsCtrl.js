angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv) {
  $scope.travelInfo = function() {
    mainSrv.travelInfo();
      console.log(travelInfo);
    }
})
