angular.directive('hideOnload', [function(){
return {
    scope: {
        callBack: '&hideOnload'
    },
    link: function(scope, element, attrs){
        element.on('load', function(){
            console.log("HIDE");
            scope.$parent.embed.showLoading=false;
            window.scrollTo(0, 0);
            element.parent().find("div.iframeLoading").hide();
            return scope.callBack();
        })
    }
}}]);
