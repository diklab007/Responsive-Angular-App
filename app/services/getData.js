// app.service('JSONService', function($scope, $http ) {
//     this.get = function() {
//         $http.get('assets/data.json')
//         .then(function(res, $scope){
//          //$scope.myData = res.data;                
//         });
//     };
// });

app.factory('JSONService', function($http) {
  var myService = {
    get: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('assets/data.json').then(function (response) {
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    }
  };
  return myService;
});
