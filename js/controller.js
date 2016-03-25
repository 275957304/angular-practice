var myController = angular.module('myController', []);

myController.controller('mainController',function($scope,$http){
    $scope.show_date = '';

    $http.get("http://event.vxinyou.net/activity/pet/get_next_update?pet_id=" + 1)
    .success(function(response){
        $scope.show_date = response.show_date;
    });

    $http({
        method : 'GET',
        url: 'list.json'
    })
    .success(function(data, status, headers, config){
        console.log(data);
        $scope.list = data;
    })
    .error(function(data, status, headers, config){
        console.log("error...." + data)
    });

})

myController.controller('registerShow',function($scope){
    //$scope.userinfo = false;  //56
    //$scope.imgSrc = 'http://hdcdn.vxinyou.com//upload/20160324/20160324172648_292.jpg';

    $scope.submitForm = function(isValid){
        if(!isValid){
            console.log('验证成功');
        }else{
            console.log('失败')
        }
    }

    // $scope.submitForm = function(){
    //     console.log($scope.form)
    //     if($scope.form.$valid){
    //         alert("验证通过")
    //     }else{
    //         alert("验证没-----通过")
    //     }
    // }

})
