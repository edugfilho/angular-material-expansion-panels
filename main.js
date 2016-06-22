var app = angular.module('training', ['ngMaterial']);

    'ng-inject';

    app.controller('ExpansionController', function() {
        this.product = {
            name: 'ExpansionPanelTest'
        };
    })
    .controller('PanelListCtrl', function() {
      var self = this;

      self.panelList = [];
      self.activePanel = null;
      self.
    })
    .directive('expansionPanelList', function() {
      return {
        controller: 'PanelListCtrl',
        controllerAs: 'listCtrl',
        restrict: 'E',
        templateUrl: 'expansion-panel-list.html'
      }
    })
    .directive('expansionPanel', function() {
      return {
        scope: {
          activePanel: '=',

        },
        templateUrl: 'expansion-panel.html'
      };
    });
