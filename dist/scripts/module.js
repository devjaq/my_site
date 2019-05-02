"use strict";


angular
  .module("Site", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/home", {
        template: `<home></home>`
      })
      .when("/about", {
        template: `<about></about>`
      })
      .when("/resume", {
        template: `<resume></resume>`
      })
      .when("/blog", {
        template: `<blog></blog>`
      })
      .otherwise({
        redirectTo: `/home`
      })
  });