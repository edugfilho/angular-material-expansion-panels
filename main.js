var app = angular.module('training', ['ngMaterial']);

    'ng-inject';

    app.controller('ExpansionController', function() {

      var self = this;

      self.externalPanels = [{id:1, name:"a"}, {id:2, name:"b"}];

    })
    .controller('PanelListCtrl', function() {

      var self = this;

      self.activePanel = null;

    })
    .directive('expansionPanelList', function() {
      return {
        scope: {
          panels: '='
        },
        bindToController: true,
        controller: 'PanelListCtrl',
        controllerAs: '$list',
        restrict: 'E',
        templateUrl: 'expansion-panel-list.html'
      }
    })
    .controller('ExpansionPanelController', function() {
        var self = this;
    })
    .directive('expansionPanel', function() {
      return {
        restrict: 'E',
        scope: {
          panel: '=',
        },
        bindToController: true,
        controller: 'ExpansionPanelController',
        controllerAs: '$item',
        templateUrl: 'expansion-panel.html'
      };
    });
