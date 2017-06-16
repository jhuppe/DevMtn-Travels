angular.module('devmtnTravel').controller('packagesCtrl',
function($scope, mainSrv, $stateParams) {

  $scope.packageInfo = $stateParams.country ? mainSrv.findPackages($stateParams.country) : mainSrv.packageInfo;
})
