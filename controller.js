angular
  .controller('embedCtrl', loadFunction);

loadFunction.$inject = ['$scope', 'structureService', 'storageService', '$location'];

function loadFunction($scope, structureService, storageService, $location) {
  //Register upper level modules
  structureService.registerModule($location, $scope, 'embed');

  $scope.embed.showLoading = true;
}
