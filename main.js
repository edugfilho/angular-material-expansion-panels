var app = angular.module('training', ['ngMaterial']);

    'ng-inject';

    app.controller('ExpansionController', function() {
        this.product = {
            name: 'ExpansionPanelTest'
        };
    })
    .controller('PanelListCtrl', function() {
      var self = this;

      self.panels = [{id:1, name:"a"}, {id:2, name:"b"}];
      self.activePanel = null;
      self.
    })
    .directive('expansionPanelList', function() {
      return {
        scope: {
          activePanel: '=',

        },
        controller: 'PanelListCtrl',
        controllerAs: 'list',
        restrict: 'E',
        templateUrl: 'expansion-panel-list.html'
      }
    })
    .directive('expansionPanel', function() {
      return {
        templateUrl: 'expansion-panel.html'
      };
    });
