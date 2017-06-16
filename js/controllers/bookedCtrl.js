angular.module('devmtnTravel').controller('bookedCtrl',
function($scope, mainSrv, $stateParams){
  mainSrv.packageInfo.forEach(function(package) {
    if (package.id == $stateParams.id) {
      $scope.package = package;
    }
  });

})
