//home page controller
app.controller('HomePageCtrl', function ( $scope, $http, JSONService) {
    JSONService.get().then(function(d) {
    $scope.myData = d;
  });


  $scope.greaterThan = function(query) {
  return function(item) { return ((query == null) || (parseInt(item.id) > parseInt(query))) }
};
});

