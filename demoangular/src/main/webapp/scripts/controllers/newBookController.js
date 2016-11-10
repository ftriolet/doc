
angular.module('demoangular').controller('NewBookController', function ($scope, $location, locationParser, flash, BookResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.book = $scope.book || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The book was created successfully.'});
            $location.path('/Books');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        BookResource.save($scope.book, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Books");
    };
});