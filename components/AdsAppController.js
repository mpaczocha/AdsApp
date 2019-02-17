(function () {
   "use strict";
   angular
      .module("ngAdsApp")
      .controller("AdsAppController", function ($scope) {
         $scope.ads = {
            title: "First item",
            price: "$1,000,000",
            description: "Sint dolore consectetur aliqua pariatur eiusmod dolore labore tempor duis deserunt cillum dolor. Irure exercitation esse excepteur dolor fugiat nostrud sint magna incididunt in est. Est aliquip ullamco anim excepteur.Cillum aute irure ut qui id deserunt dolor adipisicing."
         }
      });
})();