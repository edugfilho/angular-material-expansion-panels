var app = angular.module('training', ['ngMaterial']);

    'ng-inject';

    app.controller('ExpansionController', function() {
        this.product = {
            name: 'ExpansionPanelTest'
        };
    })
    .directive('expansionPanel', function() {
      return {
        restrict: 'E',
        templateUrl: 'expansion-panel.html'
      }
    });
