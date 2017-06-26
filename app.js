/**
 * @author Dikla Behor <diklab@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('myApp', ['ngRoute','ngAnimate', 'ui.bootstrap','chart.js']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "views/home.html", controller: "HomePageCtrl"})
    // Pages
    .when("/skills", {templateUrl: "views/skills.html",  controller: "SkillsPageCtrl"})
    .when("/why", {templateUrl: "views/why.html"})
    .when("/faq", {templateUrl: "views/faq.html"})
    // else 
    .otherwise("/", {templateUrl: "views/home.html"});
}]);

angular.module('myApp').controller('headerCtrl', function ($scope) {
  $scope.isNavCollapsed = true;
});