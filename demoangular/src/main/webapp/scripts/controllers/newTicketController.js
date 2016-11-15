
angular.module('demoangular').controller('NewTicketController', function ($scope, $location, locationParser, flash, TicketResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.ticket = $scope.ticket || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The ticket was created successfully.'});
            $location.path('/Tickets');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        TicketResource.save($scope.ticket, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Tickets");
    };
});