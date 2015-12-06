
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('main', {
      url: '/main',
      controller: 'MainCtrl',
      templateUrl: 'templates/main.html',
    });

  $urlRouterProvider.otherwise('/main');

})

.service('API', function($http){

  return {
    baseUrl: 'https://wtpt-alexnixi.c9.io/',
    nextSlide: function(id){
      return $http.post(this.baseUrl+'api/next', {id: id});
    },
    previousSlide: function(id){
      // todo
    },
    close: function(id){
      // todo
    },
  };

})

.controller('MainCtrl', function($scope, $cordovaBarcodeScanner, $http, API){

  var id = null;
  
  $scope.nextSlide = function(){
    if(id) {
      API.nextSlide(id);
    } else {
      // todo
    }
  };

  $scope.previousSlide = function(){
    if(id){
      API.previousSlide(id);
    } else {
      // todo
    }
  };

  $scope.scan = function(){
    document.addEventListener("deviceready", function () {
      $cordovaBarcodeScanner.scan().then(function(data){
        $("#scan").slideUp();
        id = data.text;
      });    
    }, false);
  };

})
