'use strict';

angular.module('demoangular',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Articles',{templateUrl:'views/Article/search.html',controller:'SearchArticleController'})
      .when('/Articles/new',{templateUrl:'views/Article/detail.html',controller:'NewArticleController'})
      .when('/Articles/edit/:ArticleId',{templateUrl:'views/Article/detail.html',controller:'EditArticleController'})
      .when('/Books',{templateUrl:'views/Book/search.html',controller:'SearchBookController'})
      .when('/Books/new',{templateUrl:'views/Book/detail.html',controller:'NewBookController'})
      .when('/Books/edit/:BookId',{templateUrl:'views/Book/detail.html',controller:'EditBookController'})
      .when('/Speakers',{templateUrl:'views/Speaker/search.html',controller:'SearchSpeakerController'})
      .when('/Speakers/new',{templateUrl:'views/Speaker/detail.html',controller:'NewSpeakerController'})
      .when('/Speakers/edit/:SpeakerId',{templateUrl:'views/Speaker/detail.html',controller:'EditSpeakerController'})
      .when('/Talks',{templateUrl:'views/Talk/search.html',controller:'SearchTalkController'})
      .when('/Talks/new',{templateUrl:'views/Talk/detail.html',controller:'NewTalkController'})
      .when('/Talks/edit/:TalkId',{templateUrl:'views/Talk/detail.html',controller:'EditTalkController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
