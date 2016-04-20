angular.directive('hideOnload', [function(){
return {
    scope: {
        callBack: '&hideOnload'
    },
    link: function(scope, element, attrs){
        element.on('load', function(){
            element.parent().find("div.iframeLoading").hide();
            console.log("HIDE");
            return scope.callBack();
        })
    }
}}]);
