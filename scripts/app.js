angular
.module('ngAdsApp', ["ngMaterial"])
.config(function($mdThemingProvider){
   $mdThemingProvider.theme('default')
   .primaryPalette('teal')
   .accentPalette('orange');
})
.directive("helloWorld")