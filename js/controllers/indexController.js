/**
 * Created by Jason on 15/09/2017.
 */

indexApp.controller('indexCtrl', ['$scope', function ($scope) {

    // $scope.errorMessage = '';

    $scope.submit = function () {
        console.log($scope.userName);//可以正确的拿到页面上输入的值
        if (typeof($scope.userName) === "undefined" && typeof($scope.userPW) === "undefined") {
            $scope.errorMessage = '用户名和密码不能为空!'
        } else {
            $scope.errorMessage = ''
        }
    }
}
])