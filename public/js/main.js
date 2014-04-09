/**
 * Angular main js
 * */

//네임스페이스를 myApp으로 설정
var myAppModule = angular.module('myApp', ['utility']);

var utility = angular.module('utility', []);
utility.filter('titleCase', function(){
    var titleCaseFilter = function(input){
        var words = input.split(' ');
        for( var i=0; i<words.length; i++){
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    };

    return titleCaseFilter;
})

myAppModule.factory('Items', function(){
    var items = [
        {
            title : '페인트 그릇',
            quantity : 18,
            price : 3.95
        },
        {
            title : '땡땡이 리본',
            quantity : 121,
            price : 11.7
        },
        {
            title : '공깃돌',
            quantity : 2,
            price : 5.2
        }
    ];

    return items;

});

//myApp네임스페이스를 사용하는 모듈 작성, 모듈의 특성은 컨트롤러
myAppModule.controller('CartController',
    function($scope, Items){
        $scope.items = Items;

        $scope.remove = function(index){
            $scope.items.splice(index, 1);
        }

        $scope.clickRow = function(row){
            $scope.selectedRow = row;
        }
    });

myAppModule.controller('SomeController',
    function($scope){

        $scope.funding = {
            startingEstimate : 0
        };

        var computeNeed = function(newValue, oldValue, scope){
            console.log($scope.funding.startingEstimate);
            var estimate = parseInt($scope.funding.startingEstimate, 10);
            if($scope.funding.startingEstimate === ''){
                estimate = 0;
            }
            $scope.needs =  estimate * 10;
        };

        $scope.requestFunding = function(){
            alert('아직 앙돼요~');
        };

        $scope.testTitle = 'hi hello';

        $scope.$watch('funding.startingEstimate', computeNeed);
    });

myAppModule.controller('ShowHideController',
    function($scope){
        $scope.isShowList = true;

        $scope.toggleList = function(){
            $scope.isShowList = !$scope.isShowList;
        };
    });

myAppModule.controller('HeaderController',
    function($scope){
        $scope.isError = false;
        $scope.isWarning = false;

        $scope.showError = function(){
            $scope.messageText = '에러입니다.';
            $scope.isError = true;
            $scope.isWarning = false;
        }
        $scope.showWarning = function(){
            $scope.messageText = '경고입니다.';
            $scope.isError = false;
            $scope.isWarning = true;
        }
    });