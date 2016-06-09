var demo = angular.module('demo', ['ngRoute', 'ngAnimate'])

demo.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'ctrl'
  })
  .when('/home', {
    templateUrl: 'home.html',
    controller: 'ctrl'
  })
  .when('/list', {
    templateUrl: 'countries.html',
    controller: 'ctrl'
  })
  .when('/:countryCode/capital', {
    templateUrl: 'detail.html',
    controller: 'ctrl_detail'
  })
  .otherwise('/error',  {
    template: '<p>Error - Page Not Found</p>'
  });
}]); // end of promises and routes
// gets country listing
demo.factory('list', function($http){
  return function(){
    return $http ({ 
      cache: true,
      method: 'JSONP', 
      url: 'http://api.geonames.org/countryInfoJSON?username=mse2335',
      params: {callback: 'JSON_CALLBACK'}
    })
  };
}); // end of list
// gets capital population
demo.factory('search', function($http){
  return function(countryCode){
    return $http ({ 
      method: 'JSONP', 
      url: 'http://api.geonames.org/countryInfoJSON?&username=mse2335',
      params: {
        callback: 'JSON_CALLBACK', 
        country: countryCode,
      }
    })
  };
}); // end of search
// gets neighbors to countries
demo.factory('neighbors', function($http){
  return function(codeResult){
    return $http ({ 
      method: 'JSONP', 
      url: 'http://api.geonames.org/neighboursJSON?country=' + codeResult + '&username=mse2335',
      params: {callback: 'JSON_CALLBACK'}
    })
  };
}); // end of search\
// end of factories

demo.controller('ctrl', ['$scope', 'list', '$timeout', '$q', function($scope, list, $timeout, $q){
  $scope.country_list = [];
  $scope.url = 'http://api.geonames.org/countryInfoJSON?&username=mse2335';

  function hold() {
    $scope.waiting = true;
    return $q(function(resolve, reject){
      $timeout(function(){
        resolve();
      }, 500);
    });
  };

  function showTable() {
    $scope.table = false;
    return hold().then(function(){
              $scope.table = true;
    });
  };

  list().success(function(data) {
    $scope.country_list = data['geonames'];
    return showTable();
  })
    .error(function(data) {
      console.log('Error!')
  }); //  end of list function

}]); /// ctrl

demo.controller('ctrl_detail', ['$scope', '$location', 'search', 'neighbors', function($scope, $location, search, neighbors){
  $scope.country_list = [];
  $scope.countryCode =  $location.path();
  $scope.codeResult = $scope.countryCode.split('/')[1];

  search($scope.codeResult).success(function(data) {
     $scope.country_data = data['geonames'][0];
  })
    .error(function(data) {
      console.log('Error!')
  }); // end of search function

  neighbors($scope.codeResult).success(function(data) {
    $scope.notApplicable = '';
    $scope.resultNumber = data['totalResultsCount'];
    if($scope.resultNumber === 0) {
      $scope.notApplicable = true;
    } else {
      $scope.neighbours_list = data['geonames'];
    }
  })
    .error(function(data) {
      console.log('Error!')
  }); // end of neighbors function

  $scope.imgCheck = function(){
    $scope.country_map = 'http://www.geonames.org/img/country/250/{{ country_data.countryCode }}.png';
  }

}]); /// ctrl