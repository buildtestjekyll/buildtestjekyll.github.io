// Generated by CoffeeScript 1.8.0
(function() {
  var HelpfulTipsManagerCtrl, ListUsageManagerCtrl, PertinenceManagerCtrl, PrestationManagerCtrl, module;

  module = angular.module("commons.encommuns.controllers", ['commons.encommuns.services', 'chartjs']);

  module.controller("TestCtrl", (function(_this) {
    return function($scope) {
      $scope.lineChartData = {
        labels: ['Gouvernance', 'Technique', 'Contribution', 'Partage', 'Juridique', 'Mutualisation', 'Financement', 'Prestation', 'Partenaires', 'Evaluation'],
        datasets: [
          {
            data: [300, 300, 350, 400, 200, 400, 300, 200, 180, 290]
          }
        ]
      };
      return $scope.activeData = $scope.lineChartData;
    };
  })(this));

  module.controller('CollapseCtrl', function($scope) {
    return $scope.isCollapsed = true;
  });

  module.controller('TooltipCtrl', function($scope) {
    return $scope.dynamicTooltipText = 'dynamic';
  });

  ListUsageManagerCtrl = (function() {
    function ListUsageManagerCtrl($scope, Pertinences) {
      this.$scope = $scope;
      this.Pertinences = Pertinences;
      this.$scope.usages = this.Pertinences.getList().$object;
    }

    return ListUsageManagerCtrl;

  })();

  module.controller("ListUsageManagerCtrl", ['$scope', 'Pertinences', ListUsageManagerCtrl]);

  module.controller("DetailUsageManagerCtrl", function($scope, OneUsage) {
    return $scope.detailledUsage = OneUsage.one($scope.usage.id).get().$object;
  });

  module.controller("DetailPertinenceManagerCtrl", function($scope, OnePertinence) {
    return $scope.detailledPertinence = OnePertinence.one($scope.pertinence.id).get().$object;
  });

  PertinenceManagerCtrl = (function() {
    function PertinenceManagerCtrl($scope, Pertinences) {
      this.$scope = $scope;
      this.Pertinences = Pertinences;
      this.$scope.pertinences = this.Pertinences.getList().$object;
    }

    return PertinenceManagerCtrl;

  })();

  module.controller("PertinenceManagerCtrl", ['$scope', 'Pertinences', PertinenceManagerCtrl]);

  HelpfulTipsManagerCtrl = (function() {
    function HelpfulTipsManagerCtrl($scope, HelpfulTips) {
      this.$scope = $scope;
      this.HelpfulTips = HelpfulTips;
      this.$scope.helpfultips = this.HelpfulTips.getList().$object;
    }

    return HelpfulTipsManagerCtrl;

  })();

  module.controller("HelpfulTipsManagerCtrl", ['$scope', 'HelpfulTips', HelpfulTipsManagerCtrl]);

  PrestationManagerCtrl = (function() {
    function PrestationManagerCtrl($scope, Prestations) {
      this.$scope = $scope;
      this.Prestations = Prestations;
      this.$scope.prestations = this.Prestations.getList().$object;
    }

    return PrestationManagerCtrl;

  })();

  module.controller("PrestationManagerCtrl", ['$scope', 'Prestations', PrestationManagerCtrl]);

}).call(this);
