angular
  .controller('embedCtrl', loadFunction);

loadFunction.$inject = ['$scope', 'structureService', 'storageService', '$location'];

function loadFunction($scope, structureService, storageService, $location) {
  //Register upper level modules
  structureService.registerModule($location, $scope, 'embed');

  setTimeout(function () {
    structureService.launchSpinner('.transitionloader');
  }, 100);
}
