angular.module('app')
    .directive('listeNoms', function() {
        return {
            templateUrl: '/templates/liste-noms.html',
            controller: 'mainController as mc',
            replace: true
        };
    });
