'use strict';

/* Controllers */

var bucklistControllers = angular.module('bucklistControllers', []);

bucklistControllers.controller('BucketListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

bucklistControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.item = Phone.get({phoneId: $routeParams.phoneId}, function(item) {
      $scope.mainImageUrl = item.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);

function BucketListCtrl($scope) {
  $scope.list = [
    {"statue": 0,
     "cont": "Fast just got faster with Nexus S."},
    {"statue": 0,
     "cont": "Fast just got faster with Nexus."},
    {"statue": 0,
     "cont": "Fast just got faster with."},
    {"statue": 0,
     "cont": "Fast just got faster."},
  ];

  $scope.orderProp = 'statue';
}
