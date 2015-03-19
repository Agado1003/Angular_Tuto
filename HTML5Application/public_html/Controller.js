/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp', []).controller('myCtrl', function($scope) {
    $scope.Countries=[{Name:'France',Population:65000000},
                      {Name:'Belgium',Population:12000000},
                      {Name:'Germany',Population:80000000},
                      {Name:'Finland',Population:5000000}];
});


