// MAIN CONTROLLER
angular.module('app')
    .controller('mainController', function($scope) {
        $scope.persons = [];
        $scope.form = {
            firstname: '',
            lastname: '',
            email: ''
        };

        $scope.addPerson = function() {
            $scope.persons.push({
                firstname: $scope.form.firstname,
                lastname: $scope.form.lastname,
                email: $scope.form.email
            });
        };
    });
