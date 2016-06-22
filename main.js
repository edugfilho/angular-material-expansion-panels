angular.module('ExpansionPanel', ['ngMaterial'])
    .controller('ExpansionController', ['$scope', function($scope) {
        this.product = {
            name: 'ExpansionPanel'
        };
    }]);