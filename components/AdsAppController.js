(function () {
   "use strict";
   angular
      .module("ngAdsApp")
      .controller("AdsAppController", function ($scope) {
         $scope.name = {
            first: "Ryan",
            last: "Chunky"
         };
      });
})();