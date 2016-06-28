(function() {
  angular.directive('hideOnload', [function(){
  return {
      scope: {
          callBack: '&hideOnload'
      },
      link: function(scope, element, attrs){
          element.on('load', function(){
              scope.$parent.iframe.showLoading=false;
              element.parent().find("div.iframeLoading").hide();
              iFrameResize({log:true});
              return scope.callBack();
          })
      }
  }}]);
}());
