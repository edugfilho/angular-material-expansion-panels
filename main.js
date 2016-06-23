var app = angular.module('training', ['ngMaterial']);

'ng-inject';

app.controller('ExpansionController', function() {

        var self = this;

        self.duplicatePanel = function() {
          console.log('panel duplicated');
        };

        self.deletePanel = function() {
          console.log('panel deleted');
        };

        self.obj = {
          collection: [{
              id: 1,
              accountStringFrom: "House Ads",
              accountStringTo: "Marketing",
              value: "5000"
          }, {
            id: 1,
            accountStringFrom: "House Ads",
            accountStringTo: "Marketing",
            value: "5000"
          }],
          mdPanelLabel: 'value',
          mdPanelHeaderValues: ['accountStringFrom', 'accountStringTo'],
          mdPanelActions: [{
              idx: 0,
              label: 'Delete',
              action: self.deletePanel,
              primary: false
          },
          {
            idx: 1,
            label: 'Duplicate',
            action: self.duplicatePanel,
            primary: true
          }]
        };

    })
    .controller('PanelListCtrl', function() {

        var self = this;
        self.activePanelIdx = -1;
        self.controlExpandedPanel = function(idx) {
          if(self.activePanelIdx === -1) {
            self.activePanelIdx = idx;
          }
          else if(idx === self.activePanelIdx) {
            self.activePanelIdx = -1;
          }
          else if(idx !== self.activePanelIdx) {
            self.activePanelIdx = idx;
          }
          console.log(idx);
        };

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
        console.log(self.idx);
        console.log(this.activePanel);
    })
    .directive('expansionPanel', function() {
        return {
            restrict: 'E',
            scope: {
                panel: '=',
                label: '=',
                attributes: '=',
                expandHandler: '=',
                idx: '=',
                activePanel: '=',
                actions: '='
            },
            bindToController: true,
            controller: 'ExpansionPanelController',
            controllerAs: '$item',
            templateUrl: 'expansion-panel.html'
        };
    })
    .directive('expansionPanelContent', function() {
        return {
            restrict: 'E',
            templateUrl: 'expansion-panel-content.html'
        }
    });
