/**
 * @author Dikla Behor <diklab@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('myApp', ['ngRoute','ngAnimate', 'ui.bootstrap']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "views/home.html", controller: "HomePageCtrl"})
    // Pages
    .when("/about", {templateUrl: "views/about.html", controller: "HomePageCtrl"})
    .when("/faq", {templateUrl: "views/faq.html"})
    // else 
    .otherwise("/", {templateUrl: "views/home.html"});
}]);
