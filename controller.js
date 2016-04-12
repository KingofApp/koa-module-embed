angular
  .controller('embedCtrl', loadFunction);

loadFunction.$inject = ['$scope', 'structureService', 'storageService', '$location'];

function loadFunction($scope, structureService, storageService, $location) {
  //Register upper level modules
  structureService.registerModule($location, $scope, 'embed');

  $scope.embed.showLogin = false;

  storageService.get('embedLogin').then(function(data) {
    if (data && data.value) {

      post($scope.embed.modulescope.url, data.value);
      $scope.embed.showLogin = true;
    }

  });
  $scope.redirectToLogin = function() {
    console.log("TEST");
    //PETARSE el embedLogin
    storageService.del('embedLogin').then(function(data) {
      console.log("DATA",data);
      storageService.get('loginUrl').then(function(src) {
        if(src && src.value){
          $location.path(src.value);
        }
      });
    });
  }

  function post(path, params, method) {
    method = method || 'post';

    var form = document.createElement('form');
    form.setAttribute('method', method);
    form.setAttribute('action', path);
    form.setAttribute('target', 'embedtest');

    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        var hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('name', key);
        hiddenField.setAttribute('value', params[key]);

        form.appendChild(hiddenField);
      }
    }
    document.body.appendChild(form);
    form.submit();
  }
}
