angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider
    .otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home-tmpl.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: './views/about-tmpl.html'
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: './views/portfolio-tmpl.html'
    })
    .state('skills', {
      url: '/skills',
      templateUrl: './views/skills-tmpl.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: './views/contact-tmpl.html'
    })
})
