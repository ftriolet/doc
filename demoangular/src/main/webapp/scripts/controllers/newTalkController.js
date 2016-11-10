
angular.module('demoangular').controller('NewTalkController', function ($scope, $location, locationParser, flash, TalkResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.talk = $scope.talk || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The talk was created successfully.'});
            $location.path('/Talks');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        TalkResource.save($scope.talk, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Talks");
    };
});