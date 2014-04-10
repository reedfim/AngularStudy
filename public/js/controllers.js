var aMailServices = angular.module('AMail', ['ngRoute']);

function emailRouteConfig($routeProvider){
    $routeProvider
        .when('/', {
            controller : ListController,
            templateUrl : '/template/list.html'
        })
        .when('/view/:id', {
            controller : DetailController,
            templateUrl : '/template/detail.html'
        })
        .otherwise({
            redirect : '/'
        });
}

aMailServices.config(emailRouteConfig);



function ListController($scope, $http){

    $http.get('/json/data.json')
        .success(function(data, status, headers, config){
            console.log(data);
            console.log(status);
            console.log(headers());
            console.log(config);
            $scope.messages = data;
        })



}

function DetailController($scope, $routeParams){
    $scope.message = messages[$routeParams.id];
}