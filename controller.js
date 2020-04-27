angular
  .controller('embedCtrl', loadFunction);

loadFunction.$inject = ['$scope', 'structureService', 'storageService', '$location', '$translate'];

function loadFunction($scope, structureService, storageService, $location, $translate) {
  //Register upper level modules
  structureService.registerModule($location, $scope, 'embed',  $translate.use());

    var lang = $translate.use().replace('_', '-');
    var config = $scope.embed.modulescope;
    var configLang = $scope.embed.modulescopeLang && $scope.embed.modulescopeLang[lang] && $scope.embed.modulescopeLang[lang].langUrl != "" ? $scope.embed.modulescopeLang[lang]: false;
    
    
    $scope.url = config.url;
    
    if (configLang) {
      $scope.url = configLang.langUrl;
    }

    structureService.launchSpinner('.transitionloader');
}
